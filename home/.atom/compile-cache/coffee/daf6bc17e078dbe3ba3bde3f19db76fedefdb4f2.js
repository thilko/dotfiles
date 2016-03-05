(function() {
  var CompositeDisposable, CyberDojoClient, CyberDojoServer, CyberDojoSettings, CyberDojoUrlView, ProgressElement;

  CompositeDisposable = require('atom').CompositeDisposable;

  CyberDojoUrlView = require('./cyber-dojo-url-view.coffee');

  ProgressElement = require('./progress-element.coffee');

  CyberDojoClient = require('./cyber-dojo-client.coffee');

  CyberDojoSettings = require('./cyber-dojo-settings.coffee');

  CyberDojoServer = require('./cyber-dojo-server.coffee');

  module.exports = {
    config: {
      workspace: {
        type: 'string',
        "default": 'Cyber-Dojo workspace must be defined'
      }
    },
    cyberDojoSettings: null,
    cyberDojoServer: null,
    cyberDojoClient: null,
    cyberDojoUrlView: null,
    subscriptions: null,
    activate: function(serializedState) {
      this.subscriptions = new CompositeDisposable();
      this.cyberDojoSettings = new CyberDojoSettings();
      this.cyberDojoServer = new CyberDojoServer(serializedState.serverState);
      this.cyberDojoClient = new CyberDojoClient(serializedState.clientState, this.cyberDojoSettings);
      this.cyberDojoUrlView = new CyberDojoUrlView(this.cyberDojoServer.url(), (function(_this) {
        return function(kata) {
          return _this.configureKata(kata);
        };
      })(this));
      this.subscriptions.add(atom.commands.add('atom-workspace', 'cyber-dojo:url', (function(_this) {
        return function() {
          return _this.enterKataUrl();
        };
      })(this)));
      return this.subscriptions.add(atom.commands.add('atom-workspace', 'cyber-dojo:run-tests', (function(_this) {
        return function() {
          return _this.runTests();
        };
      })(this)));
    },
    enterKataUrl: function() {
      this.setupCyberDojoWorkspace();
      return this.cyberDojoUrlView.toggle();
    },
    setupCyberDojoWorkspace: function() {
      var settings;
      settings = this.cyberDojoSettings;
      if (!this.cyberDojoSettings.workspaceExists()) {
        console.log('No workspace set, ask User for workspace directory');
        atom.pickFolder(function(paths) {
          if (paths[0] != null) {
            settings.setWorkspacePath(paths[0]);
            atom.notifications.addInfo("Selected Cyber-Dojo workspace '" + paths[0] + "'");
            atom.project.addPath(settings.getWorkspacePath());
            console.log("Set workspace to '" + paths[0] + "' and added it as project path");
            return atom.notifications.addSuccess("Setting cyber-dojo workspace to '" + paths[0] + "'");
          }
        });
      } else {
        console.log("adding project path: " + settings.getWorkspacePath());
        atom.project.addPath(settings.getWorkspacePath());
      }
      return atom.notifications.addInfo("BEWARE: All files within Cyber-Dojo Workspace " + ("'" + (settings.getWorkspacePath()) + "'\nwill be deleted, if you start a new Kata!"));
    },
    deactivate: function() {
      this.cyberDojoUrlView.destroy();
      return this.subscriptions.dispose();
    },
    serialize: function() {
      return {
        clientState: this.cyberDojoClient.getInitialState(),
        serverState: this.cyberDojoServer.serialize()
      };
    },
    configureKata: function(kata) {
      var view;
      this.cyberDojoServer.setKata(kata);
      view = this.displayProgress('sync');
      return this.cyberDojoServer.sync((function(_this) {
        return function(success, message) {
          if (success) {
            _this.cyberDojoClient.saveState(_this.cyberDojoServer.files());
            atom.notifications.addInfo("Successfully synced kata");
          } else {
            atom.notifications.addError(message);
          }
          return view.destroy();
        };
      })(this));
    },
    runTests: function() {
      var view;
      if (this.cyberDojoServer.isKataDefined()) {
        view = this.displayProgress('runTests');
        return this.cyberDojoClient.getState((function(_this) {
          return function(localState) {
            return _this.cyberDojoServer.runTests(localState, function(success) {
              var output;
              if (success) {
                _this.cyberDojoClient.saveState(_this.cyberDojoServer.files());
                output = _this.cyberDojoServer.output();
                switch (_this.cyberDojoServer.testResult()) {
                  case 'green':
                    atom.notifications.addSuccess(output);
                    break;
                  case 'amber':
                    atom.notifications.addWarning(output);
                    break;
                  case 'red':
                    atom.notifications.addError(output);
                }
                return view.destroy();
              } else {
                return view.displayFailure();
              }
            });
          };
        })(this));
      } else {
        return atom.notifications.addInfo("No Cyber-Dojo URL set, set one prior running the tests");
      }
    },
    displayProgress: function(type) {
      var panel, view;
      view = new ProgressElement();
      view.setType(type);
      panel = atom.workspace.addModalPanel({
        item: view
      });
      view.setDestroy(function() {
        return panel.destroy();
      });
      view.displayLoading();
      view.focus();
      atom.commands.add(view, 'core:cancel', function() {
        return view.destroy();
      });
      return view;
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9jeWJlci1kb2pvL2xpYi9jeWJlci1kb2pvLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSwyR0FBQTs7QUFBQSxFQUFDLHNCQUF1QixPQUFBLENBQVEsTUFBUixFQUF2QixtQkFBRCxDQUFBOztBQUFBLEVBRUEsZ0JBQUEsR0FBbUIsT0FBQSxDQUFRLDhCQUFSLENBRm5CLENBQUE7O0FBQUEsRUFHQSxlQUFBLEdBQWtCLE9BQUEsQ0FBUSwyQkFBUixDQUhsQixDQUFBOztBQUFBLEVBSUEsZUFBQSxHQUFrQixPQUFBLENBQVEsNEJBQVIsQ0FKbEIsQ0FBQTs7QUFBQSxFQUtBLGlCQUFBLEdBQW9CLE9BQUEsQ0FBUSw4QkFBUixDQUxwQixDQUFBOztBQUFBLEVBTUEsZUFBQSxHQUFrQixPQUFBLENBQVEsNEJBQVIsQ0FObEIsQ0FBQTs7QUFBQSxFQVFBLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7QUFBQSxJQUFBLE1BQUEsRUFDRTtBQUFBLE1BQUEsU0FBQSxFQUNFO0FBQUEsUUFBQSxJQUFBLEVBQU0sUUFBTjtBQUFBLFFBQ0EsU0FBQSxFQUFTLHNDQURUO09BREY7S0FERjtBQUFBLElBS0EsaUJBQUEsRUFBbUIsSUFMbkI7QUFBQSxJQU1BLGVBQUEsRUFBaUIsSUFOakI7QUFBQSxJQU9BLGVBQUEsRUFBaUIsSUFQakI7QUFBQSxJQVFBLGdCQUFBLEVBQWtCLElBUmxCO0FBQUEsSUFTQSxhQUFBLEVBQWUsSUFUZjtBQUFBLElBb0JBLFFBQUEsRUFBVSxTQUFDLGVBQUQsR0FBQTtBQUNSLE1BQUEsSUFBQyxDQUFBLGFBQUQsR0FBcUIsSUFBQSxtQkFBQSxDQUFBLENBQXJCLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxpQkFBRCxHQUF5QixJQUFBLGlCQUFBLENBQUEsQ0FE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

//# sourceURL=/Users/thilko/.atom/packages/cyber-dojo/lib/cyber-dojo.coffee
