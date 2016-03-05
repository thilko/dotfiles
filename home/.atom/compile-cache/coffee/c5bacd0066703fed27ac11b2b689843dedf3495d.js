(function() {
  var CyberDojoKata;

  CyberDojoKata = require('../lib/cyber-dojo-kata');

  describe("CyberDojoKata", function() {
    var avatar, dojoId, kata, serverUrl, url, _ref;
    describe("forUrl", function() {
      var avatar, dojoId, serverUrl, url, _ref;
      _ref = [], url = _ref[0], serverUrl = _ref[1], dojoId = _ref[2], avatar = _ref[3];
      describe("with valid URL", function() {
        beforeEach(function() {
          serverUrl = 'http://192.168.188.10:8000';
          dojoId = '8FB98C541B';
          avatar = 'snake';
          return url = "" + serverUrl + "/kata/edit/" + dojoId + "?avatar=" + avatar;
        });
        it("contains correct URL", function() {
          var result;
          result = CyberDojoKata.forUrl(url);
          return expect(result.url).toEqual(url);
        });
        it("contains correct URL serverUrl", function() {
          var result;
          result = CyberDojoKata.forUrl(url);
          return expect(result.serverUrl).toEqual(serverUrl);
        });
        it("contains correct URL dojoId", function() {
          var result;
          result = CyberDojoKata.forUrl(url);
          return expect(result.dojoId).toEqual(dojoId);
        });
        return it("contains correct URL avatar", function() {
          var result;
          result = CyberDojoKata.forUrl(url);
          return expect(result.avatar).toEqual(avatar);
        });
      });
      return describe("with invalid URL", function() {
        it("return null for missing protocol", function() {
          var result;
          result = CyberDojoKata.forUrl('/kata/edit/8FB98C541B?avatar=snake');
          return expect(result).toBe(null);
        });
        it("return null for missing avatar", function() {
          var result;
          result = CyberDojoKata.forUrl('http://192.168.188.10:8000/kata/edit/8FB98C541B?avatar=');
          return expect(result).toBe(null);
        });
        it("return null for missing dojoId", function() {
          var result;
          result = CyberDojoKata.forUrl('http://192.168.188.10:8000/kata/edit/?avatar=snake');
          return expect(result).toBe(null);
        });
        return it("return null for wrong path", function() {
          var result;
          result = CyberDojoKata.forUrl('http://192.168.188.10:8000/k/e/8FB98C541B?avatar=snake');
          return expect(result).toBe(null);
        });
      });
    });
    describe("show_json_url", function() {
      var avatar, dojoId, kata, serverUrl, url, _ref;
      _ref = [], kata = _ref[0], url = _ref[1], serverUrl = _ref[2], dojoId = _ref[3], avatar = _ref[4];
      beforeEach(function() {
        serverUrl = 'http://192.168.188.10:8000';
        dojoId = '8FB98C541B';
        avatar = 'snake';
        url = "" + serverUrl + "/kata/edit/" + dojoId + "?avatar=" + avatar;
        return kata = new CyberDojoKata(url, serverUrl, dojoId, avatar);
      });
      return it("creates correct URL", function() {
        var result;
        result = kata.show_json_url();
        return expect(result).toEqual("" + serverUrl + "/kata/show_json/" + dojoId + "?avatar=" + avatar);
      });
    });
    describe("run_tests_url", function() {});
    _ref = [], kata = _ref[0], url = _ref[1], serverUrl = _ref[2], dojoId = _ref[3], avatar = _ref[4];
    beforeEach(function() {
      serverUrl = 'http://192.168.188.10:8000';
      dojoId = '8FB98C541B';
      avatar = 'snake';
      url = "" + serverUrl + "/kata/edit/" + dojoId + "?avatar=" + avatar;
      return kata = new CyberDojoKata(url, serverUrl, dojoId, avatar);
    });
    return it("creates correct URL", function() {
      var result;
      result = kata.run_tests_url();
      return expect(result).toEqual("" + serverUrl + "/kata/run_tests/" + dojoId + "?avatar=" + avatar);
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9jeWJlci1kb2pvL3NwZWMvY3liZXItZG9qby1rYXRhLXNwZWMuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLGFBQUE7O0FBQUEsRUFBQSxhQUFBLEdBQWdCLE9BQUEsQ0FBUSx3QkFBUixDQUFoQixDQUFBOztBQUFBLEVBT0EsUUFBQSxDQUFTLGVBQVQsRUFBMEIsU0FBQSxHQUFBO0FBRXhCLFFBQUEsMENBQUE7QUFBQSxJQUFBLFFBQUEsQ0FBUyxRQUFULEVBQW1CLFNBQUEsR0FBQTtBQUNqQixVQUFBLG9DQUFBO0FBQUEsTUFBQSxPQUFtQyxFQUFuQyxFQUFDLGFBQUQsRUFBTSxtQkFBTixFQUFpQixnQkFBakIsRUFBeUIsZ0JBQXpCLENBQUE7QUFBQSxNQUVBLFFBQUEsQ0FBUyxnQkFBVCxFQUEyQixTQUFBLEdBQUE7QUFDekIsUUFBQSxVQUFBLENBQVcsU0FBQSxHQUFBO0FBQ1QsVUFBQSxTQUFBLEdBQVksNEJBQVosQ0FBQTtBQUFBLFVBQ0EsTUFBQSxHQUFTLFlBRFQsQ0FBQTtBQUFBLFVBRUEsTUFBQSxHQUFTLE9BRlQsQ0FBQTtpQkFHQSxHQUFBLEdBQU0sRUFBQSxHQUFHLFNBQUgsR0FBYSxhQUFiLEdBQTBCLE1BQTFCLEdBQWlDLFVBQWpDLEdBQTJDLE9BSnhDO1FBQUEsQ0FBWCxDQUFBLENBQUE7QUFBQSxRQU1BLEVBQUEsQ0FBRyxzQkFBSCxFQUEyQixTQUFBLEdBQUE7QUFDekIsY0FBQSxNQUFBO0FBQUEsVUFBQSxNQUFBLEdBQVMsYUFBYSxDQUFDLE1BQWQsQ0FBcUIsR0FBckIsQ0FBVCxDQUFBO2lCQUNBLE1BQUEsQ0FBTyxNQUFNLENBQUMsR0FBZCxDQUFrQixDQUFDLE9BQW5CLENBQTJCLEdBQTNCLEVBRnlCO1FBQUEsQ0FBM0IsQ0FOQSxD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

//# sourceURL=/Users/thilko/.atom/packages/cyber-dojo/spec/cyber-dojo-kata-spec.coffee
