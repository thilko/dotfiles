(function() {
  var CyberDojoSettings, Directory;

  Directory = require('atom').Directory;

  module.exports = CyberDojoSettings = (function() {
    function CyberDojoSettings() {}

    CyberDojoSettings.prototype.workspaceExists = function() {
      return this.getWorkspace().existsSync();
    };

    CyberDojoSettings.prototype.getWorkspace = function() {
      return new Directory(this.getWorkspacePath());
    };

    CyberDojoSettings.prototype.getWorkspacePath = function() {
      return atom.config.get('cyber-dojo.workspace');
    };

    CyberDojoSettings.prototype.setWorkspacePath = function(path) {
      return atom.config.set('cyber-dojo.workspace', path);
    };

    return CyberDojoSettings;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9jeWJlci1kb2pvL2xpYi9jeWJlci1kb2pvLXNldHRpbmdzLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSw0QkFBQTs7QUFBQSxFQUFDLFlBQWEsT0FBQSxDQUFRLE1BQVIsRUFBYixTQUFELENBQUE7O0FBQUEsRUFFQSxNQUFNLENBQUMsT0FBUCxHQUVNO21DQUdKOztBQUFBLGdDQUFBLGVBQUEsR0FBaUIsU0FBQSxHQUFBO2FBQ2YsSUFBQyxDQUFBLFlBQUQsQ0FBQSxDQUFlLENBQUMsVUFBaEIsQ0FBQSxFQURlO0lBQUEsQ0FBakIsQ0FBQTs7QUFBQSxnQ0FJQSxZQUFBLEdBQWMsU0FBQSxHQUFBO2FBQ1IsSUFBQSxTQUFBLENBQVUsSUFBQyxDQUFBLGdCQUFELENBQUEsQ0FBVixFQURRO0lBQUEsQ0FKZCxDQUFBOztBQUFBLGdDQVFBLGdCQUFBLEdBQWtCLFNBQUEsR0FBQTthQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0Isc0JBQWhCLEVBRGdCO0lBQUEsQ0FSbEIsQ0FBQTs7QUFBQSxnQ0FZQSxnQkFBQSxHQUFrQixTQUFDLElBQUQsR0FBQTthQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0Isc0JBQWhCLEVBQXdDLElBQXhDLEVBRGdCO0lBQUEsQ0FabEIsQ0FBQTs7NkJBQUE7O01BUEYsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/thilko/.atom/packages/cyber-dojo/lib/cyber-dojo-settings.coffee
