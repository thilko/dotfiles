(function() {
  var CyberDojoKata;

  module.exports = CyberDojoKata = (function() {
    function CyberDojoKata(url, serverUrl, dojoId, avatar) {
      this.url = url;
      this.serverUrl = serverUrl;
      this.dojoId = dojoId;
      this.avatar = avatar;
    }

    CyberDojoKata.forUrl = function(url) {
      var matched, urlPattern;
      urlPattern = /^(http:\/\/.*)\/kata\/edit\/(\w+)\?avatar=(\w+)$/i;
      matched = url.match(urlPattern);
      if (matched) {
        return new CyberDojoKata(url, matched[1], matched[2], matched[3]);
      } else {
        return null;
      }
    };

    CyberDojoKata.prototype.valid = function() {
      return this.url !== null && this.serverUrl !== null && this.dojoId !== null && this.avatar !== null;
    };

    CyberDojoKata.prototype.show_json_url = function() {
      return "" + this.serverUrl + "/kata/show_json/" + this.dojoId + "?avatar=" + this.avatar;
    };

    CyberDojoKata.prototype.run_tests_url = function() {
      return "" + this.serverUrl + "/kata/run_tests/" + this.dojoId + "?avatar=" + this.avatar;
    };

    return CyberDojoKata;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9jeWJlci1kb2pvL2xpYi9jeWJlci1kb2pvLWthdGEuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLGFBQUE7O0FBQUEsRUFBQSxNQUFNLENBQUMsT0FBUCxHQUVNO0FBRVMsSUFBQSx1QkFBRSxHQUFGLEVBQVEsU0FBUixFQUFvQixNQUFwQixFQUE2QixNQUE3QixHQUFBO0FBQXNDLE1BQXJDLElBQUMsQ0FBQSxNQUFBLEdBQW9DLENBQUE7QUFBQSxNQUEvQixJQUFDLENBQUEsWUFBQSxTQUE4QixDQUFBO0FBQUEsTUFBbkIsSUFBQyxDQUFBLFNBQUEsTUFBa0IsQ0FBQTtBQUFBLE1BQVYsSUFBQyxDQUFBLFNBQUEsTUFBUyxDQUF0QztJQUFBLENBQWI7O0FBQUEsSUFFQSxhQUFDLENBQUEsTUFBRCxHQUFTLFNBQUMsR0FBRCxHQUFBO0FBQ1AsVUFBQSxtQkFBQTtBQUFBLE1BQUEsVUFBQSxHQUFhLG1EQUFiLENBQUE7QUFBQSxNQU9BLE9BQUEsR0FBVSxHQUFHLENBQUMsS0FBSixDQUFVLFVBQVYsQ0FQVixDQUFBO0FBU0EsTUFBQSxJQUFHLE9BQUg7ZUFBb0IsSUFBQSxhQUFBLENBQWMsR0FBZCxFQUFtQixPQUFRLENBQUEsQ0FBQSxDQUEzQixFQUErQixPQUFRLENBQUEsQ0FBQSxDQUF2QyxFQUEyQyxPQUFRLENBQUEsQ0FBQSxDQUFuRCxFQUFwQjtPQUFBLE1BQUE7ZUFBK0UsS0FBL0U7T0FWTztJQUFBLENBRlQsQ0FBQTs7QUFBQSw0QkFjQSxLQUFBLEdBQU8sU0FBQSxHQUFBO2FBQ0wsSUFBQyxDQUFBLEdBQUQsS0FBUSxJQUFSLElBQWdCLElBQUMsQ0FBQSxTQUFELEtBQWMsSUFBOUIsSUFBc0MsSUFBQyxDQUFBLE1BQUQsS0FBVyxJQUFqRCxJQUF5RCxJQUFDLENBQUEsTUFBRCxLQUFXLEtBRC9EO0lBQUEsQ0FkUCxDQUFBOztBQUFBLDRCQWlCQSxhQUFBLEdBQWUsU0FBQSxHQUFBO2FBQ2IsRUFBQSxHQUFHLElBQUMsQ0FBQSxTQUFKLEdBQWMsa0JBQWQsR0FBZ0MsSUFBQyxDQUFBLE1BQWpDLEdBQXdDLFVBQXhDLEdBQWtELElBQUMsQ0FBQSxPQUR0QztJQUFBLENBakJmLENBQUE7O0FBQUEsNEJBb0JBLGFBQUEsR0FBZSxTQUFBLEdBQUE7YUFDYixFQUFBLEdBQUcsSUFBQyxDQUFBLFNBQUosR0FBYyxrQkFBZCxHQUFnQyxJQUFDLENBQUEsTUFBakMsR0FBd0MsVUFBeEMsR0FBa0QsSUFBQyxDQUFBLE9BRHRDO0lBQUEsQ0FwQmYsQ0FBQTs7eUJBQUE7O01BSkYsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/thilko/.atom/packages/cyber-dojo/lib/cyber-dojo-kata.coffee
