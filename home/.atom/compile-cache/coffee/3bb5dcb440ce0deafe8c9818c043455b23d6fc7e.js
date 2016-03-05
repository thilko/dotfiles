(function() {
  var CyberDojoClient, Directory, shell;

  Directory = require('atom').Directory;

  shell = require('shell');

  module.exports = CyberDojoClient = (function() {
    function CyberDojoClient(initialServerState, settings) {
      this.initialServerState = initialServerState;
      this.settings = settings;
      if (!this.initialServerState) {
        this.initialServerState = {};
      }
    }

    CyberDojoClient.prototype.getInitialState = function() {
      return this.initialServerState;
    };

    CyberDojoClient.prototype.saveState = function(files) {
      var content, name;
      this.initialServerState = {};
      for (name in files) {
        content = files[name];
        this.initialServerState[name] = content;
      }
      this.removeDeletedFiles();
      return this.writeFiles();
    };

    CyberDojoClient.prototype.removeDeletedFiles = function() {
      var file, filename, _i, _len, _ref, _results;
      _ref = this.getWorkspaceFiles();
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        filename = file.getBaseName();
        if (!this.initialServerState[filename]) {
          console.log("Moving '" + filename + "' to trash");
          _results.push(shell.moveItemToTrash(file.getPath()));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    CyberDojoClient.prototype.writeFiles = function() {
      var content, file, name, workspace, _ref, _results;
      workspace = this.settings.getWorkspace();
      console.log("Saving kata files to '" + (this.settings.getWorkspacePath()) + "'");
      _ref = this.initialServerState;
      _results = [];
      for (name in _ref) {
        content = _ref[name];
        file = workspace.getFile(name);
        file.write(content);
        _results.push(console.log("Writing file '" + name + "'"));
      }
      return _results;
    };

    CyberDojoClient.prototype.getState = function(callback) {
      var baseFiles, fileReadPromises, filename, result, workspaceFiles;
      result = {};
      baseFiles = this.initialServerState;
      for (filename in baseFiles) {
        result[filename] = {
          deleted: true
        };
      }
      workspaceFiles = this.getWorkspaceFiles();
      fileReadPromises = workspaceFiles.map(function(file) {
        return file.read().then(function(content) {
          return {
            filename: file.getBaseName(),
            content: content
          };
        });
      });
      return Promise.all(fileReadPromises).then(function(fileContents) {
        var fileContent, _i, _len;
        for (_i = 0, _len = fileContents.length; _i < _len; _i++) {
          fileContent = fileContents[_i];
          result[fileContent.filename] = {
            content: fileContent.content,
            changed: fileContent.content !== baseFiles[fileContent.filename]
          };
        }
        return callback(result);
      });
    };

    CyberDojoClient.prototype.getWorkspaceFiles = function() {
      var entries, workspace;
      workspace = this.settings.getWorkspace();
      entries = workspace.getEntriesSync();
      return entries.filter(function(e) {
        return e.isFile();
      });
    };

    return CyberDojoClient;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9jeWJlci1kb2pvL2xpYi9jeWJlci1kb2pvLWNsaWVudC5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsaUNBQUE7O0FBQUEsRUFBQyxZQUFhLE9BQUEsQ0FBUSxNQUFSLEVBQWIsU0FBRCxDQUFBOztBQUFBLEVBQ0EsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSLENBRFIsQ0FBQTs7QUFBQSxFQUdBLE1BQU0sQ0FBQyxPQUFQLEdBSU07QUFFUyxJQUFBLHlCQUFFLGtCQUFGLEVBQXVCLFFBQXZCLEdBQUE7QUFFWCxNQUZZLElBQUMsQ0FBQSxxQkFBQSxrQkFFYixDQUFBO0FBQUEsTUFGaUMsSUFBQyxDQUFBLFdBQUEsUUFFbEMsQ0FBQTtBQUFBLE1BQUEsSUFBQSxDQUFBLElBQWlDLENBQUEsa0JBQWpDO0FBQUEsUUFBQSxJQUFDLENBQUEsa0JBQUQsR0FBc0IsRUFBdEIsQ0FBQTtPQUZXO0lBQUEsQ0FBYjs7QUFBQSw4QkFLQSxlQUFBLEdBQWlCLFNBQUEsR0FBQTthQUNmLElBQUMsQ0FBQSxtQkFEYztJQUFBLENBTGpCLENBQUE7O0FBQUEsOEJBVUEsU0FBQSxHQUFXLFNBQUMsS0FBRCxHQUFBO0FBQ1QsVUFBQSxhQUFBO0FBQUEsTUFBQSxJQUFDLENBQUEsa0JBQUQsR0FBc0IsRUFBdEIsQ0FBQTtBQUNBLFdBQUEsYUFBQTs4QkFBQTtBQUNFLFFBQUEsSUFBQyxDQUFBLGtCQUFtQixDQUFBLElBQUEsQ0FBcEIsR0FBNEIsT0FBNUIsQ0FERjtBQUFBLE9BREE7QUFBQSxNQUdBLElBQUMsQ0FBQSxrQkFBRCxDQUFBLENBSEEsQ0FBQTthQUlBLElBQUMsQ0FBQSxVQUFELENBQUEsRUFMUztJQUFBLENBVlgsQ0FBQTs7QUFBQSw4QkFtQkEsa0JBQUEsR0FBb0IsU0FB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

//# sourceURL=/Users/thilko/.atom/packages/cyber-dojo/lib/cyber-dojo-client.coffee
