(function() {
  var CyberDojoServer, request;

  request = require('request');

  module.exports = CyberDojoServer = (function() {
    function CyberDojoServer(serializedState) {
      this.serverState = (serializedState != null ? serializedState.serverState : void 0) || {};
      this.jar = (serializedState != null ? serializedState.jar : void 0) || request.jar();
      this.kata = (serializedState != null ? serializedState.kata : void 0) || null;
    }

    CyberDojoServer.prototype.serialize = function() {
      return {
        serverState: this.serverState,
        jar: this.jar,
        kata: this.kata
      };
    };

    CyberDojoServer.prototype.url = function() {
      return (typeof kata !== "undefined" && kata !== null ? kata.url : void 0) || '';
    };

    CyberDojoServer.prototype.isKataDefined = function() {
      var _ref;
      return (_ref = this.kata) != null ? _ref.valid() : void 0;
    };

    CyberDojoServer.prototype.setKata = function(kata) {
      return this.kata = kata;
    };

    CyberDojoServer.prototype.sync = function(finishedCallback) {
      return request.get({
        url: this.kata.show_json_url(),
        jar: this.jar
      }, (function(_this) {
        return function(error, response, body) {
          var errorMessage;
          if (!error && response.statusCode === 200) {
            _this.serverState = JSON.parse(body);
            console.log(_this.serverState);
            return finishedCallback(true);
          } else {
            errorMessage = ("'" + (_this.kata.show_json_url()) + "' response.statusMessage=" + response.statusMessage + " ") + ("response.statusCode=" + response.statusCode + "\nBody=" + response.body + "\nError=" + error);
            console.log(errorMessage + " , response object:\n");
            console.log(response);
            return finishedCallback(false, errorMessage);
          }
        };
      })(this));
    };

    CyberDojoServer.prototype.files = function() {
      var _ref;
      console.log(this.serverState);
      return (_ref = this.serverState) != null ? _ref.visible_files : void 0;
    };

    CyberDojoServer.prototype.runTests = function(localState, finishedCallback) {
      var data, filename, formData, options;
      formData = {
        authenticity_token: this.serverState['csrf_token']
      };
      for (filename in localState) {
        data = localState[filename];
        formData["file_content[" + filename + "]"] = data['content'];
        if (data.deleted) {
          console.log("'" + filename + "' is deleted");
          formData["file_hashes_incoming[" + filename + "]"] = 0;
        } else if (data.changed) {
          console.log("'" + filename + "' is changed");
          formData["file_hashes_outgoing[" + filename + "]"] = 1;
          formData["file_hashes_incoming[" + filename + "]"] = 0;
        } else {
          console.log("'" + filename + "' is unchanged");
          formData["file_hashes_outgoing[" + filename + "]"] = 0;
          formData["file_hashes_incoming[" + filename + "]"] = 0;
        }
      }
      console.log(formData);
      options = {
        url: this.kata.run_tests_url(),
        jar: this.jar,
        headers: {
          'X-CSRF-Token': this.serverState['csrf_token'],
          'Accept': 'application/json; charset=UTF-8'
        },
        form: formData
      };
      console.log(options);
      return request.post(options, (function(_this) {
        return function(error, response, body) {
          if (!error && response.statusCode === 200) {
            _this.serverState = JSON.parse(body);
            console.log(_this.serverState);
            return finishedCallback(true);
          } else {
            console.log("'" + url + "' response.statusCode=" + response.statusCode + " Error=" + error);
            return finishedCallback(false);
          }
        };
      })(this));
    };

    CyberDojoServer.prototype.lights = function() {
      return this.serverState.lights;
    };

    CyberDojoServer.prototype.testResult = function() {
      var lights;
      lights = this.lights();
      return lights[lights.length - 1].colour;
    };

    CyberDojoServer.prototype.output = function() {
      return this.serverState.visible_files.output;
    };

    return CyberDojoServer;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9jeWJlci1kb2pvL2xpYi9jeWJlci1kb2pvLXNlcnZlci5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsd0JBQUE7O0FBQUEsRUFBQSxPQUFBLEdBQVUsT0FBQSxDQUFRLFNBQVIsQ0FBVixDQUFBOztBQUFBLEVBRUEsTUFBTSxDQUFDLE9BQVAsR0FDTTtBQUVTLElBQUEseUJBQUMsZUFBRCxHQUFBO0FBQ1gsTUFBQSxJQUFDLENBQUEsV0FBRCw4QkFBZSxlQUFlLENBQUUscUJBQWpCLElBQWdDLEVBQS9DLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxHQUFELDhCQUFPLGVBQWUsQ0FBRSxhQUFqQixJQUF3QixPQUFPLENBQUMsR0FBUixDQUFBLENBRC9CLENBQUE7QUFBQSxNQUVBLElBQUMsQ0FBQSxJQUFELDhCQUFRLGVBQWUsQ0FBRSxjQUFqQixJQUF5QixJQUZqQyxDQURXO0lBQUEsQ0FBYjs7QUFBQSw4QkFLQSxTQUFBLEdBQVcsU0FBQSxHQUFBO2FBQ1Q7QUFBQSxRQUNFLFdBQUEsRUFBYSxJQUFDLENBQUEsV0FEaEI7QUFBQSxRQUVFLEdBQUEsRUFBSyxJQUFDLENBQUEsR0FGUjtBQUFBLFFBR0UsSUFBQSxFQUFNLElBQUMsQ0FBQSxJQUhUO1FBRFM7SUFBQSxDQUxYLENBQUE7O0FBQUEsOEJBWUEsR0FBQSxHQUFLLFNBQUEsR0FBQTs2REFDSCxJQUFJLENBQUUsYUFBTixJQUFhLEdBRFY7SUFBQSxDQVpMLENBQUE7O0FBQUEsOEJBZUEsYUFBQSxHQUFlLFNBQUEsR0FBQTtBQUNiLFVBQUEsSUFBQTs4Q0FBSyxDQUFFLEtBQVAsQ0FBQSxXQURhO0lBQUEsQ0FmZixDQUFBOztBQUFBLDhCQWtCQSxPQUFBLEdBQVMsU0FBQyxJQUFELEdBQUE7YUFDUCxJQUFD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

//# sourceURL=/Users/thilko/.atom/packages/cyber-dojo/lib/cyber-dojo-server.coffee
