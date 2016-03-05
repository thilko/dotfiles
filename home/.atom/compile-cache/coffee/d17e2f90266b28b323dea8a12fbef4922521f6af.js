(function() {
  var CyberDojo, temp;

  CyberDojo = require('../lib/cyber-dojo');

  temp = require('temp');

  describe("CyberDojo", function() {
    var activationPromise, workspaceElement, _ref;
    _ref = [], workspaceElement = _ref[0], activationPromise = _ref[1];
    beforeEach(function() {
      workspaceElement = atom.views.getView(atom.workspace);
      return activationPromise = atom.packages.activatePackage('cyber-dojo');
    });
    return describe("when the cyber-dojo:url event is triggered", function() {
      return describe("and no cyber-dojo.workspace is set", function() {
        return it("opens atom.pickFolder and set picked folder as workspace config", function() {
          var tempDir;
          tempDir = temp.mkdirSync('a-new-cyberdojo-workspace');
          spyOn(atom, 'pickFolder').andCallFake(function(callback) {
            return callback([tempDir]);
          });
          atom.commands.dispatch(workspaceElement, 'cyber-dojo:url');
          waitsForPromise(function() {
            return activationPromise;
          });
          return runs(function() {
            return expect(atom.config.get('cyber-dojo.workspace')).toEqual(tempDir);
          });
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9jeWJlci1kb2pvL3NwZWMvY3liZXItZG9qby1zcGVjLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxlQUFBOztBQUFBLEVBQUEsU0FBQSxHQUFZLE9BQUEsQ0FBUSxtQkFBUixDQUFaLENBQUE7O0FBQUEsRUFDQSxJQUFBLEdBQU8sT0FBQSxDQUFRLE1BQVIsQ0FEUCxDQUFBOztBQUFBLEVBUUEsUUFBQSxDQUFTLFdBQVQsRUFBc0IsU0FBQSxHQUFBO0FBQ3BCLFFBQUEseUNBQUE7QUFBQSxJQUFBLE9BQXdDLEVBQXhDLEVBQUMsMEJBQUQsRUFBbUIsMkJBQW5CLENBQUE7QUFBQSxJQUVBLFVBQUEsQ0FBVyxTQUFBLEdBQUE7QUFDVCxNQUFBLGdCQUFBLEdBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBWCxDQUFtQixJQUFJLENBQUMsU0FBeEIsQ0FBbkIsQ0FBQTthQUNBLGlCQUFBLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZCxDQUE4QixZQUE5QixFQUZYO0lBQUEsQ0FBWCxDQUZBLENBQUE7V0FNQSxRQUFBLENBQVMsNENBQVQsRUFBdUQsU0FBQSxHQUFBO2FBRXJELFFBQUEsQ0FBUyxvQ0FBVCxFQUErQyxTQUFBLEdBQUE7ZUFFN0MsRUFBQSxDQUFHLGlFQUFILEVBQXNFLFNBQUEsR0FBQTtBQUNwRSxjQUFBLE9BQUE7QUFBQSxVQUFBLE9BQUEsR0FBVSxJQUFJLENBQUMsU0FBTCxDQUFlLDJCQUFmLENBQVYsQ0FBQTtBQUFBLFVBQ0EsS0FBQSxDQUFNLElBQU4sRUFBWSxZQUFaLENBQXlCLENBQUMsV0FBMUIsQ0FBc0MsU0FBQyxRQUFELEdBQUE7bUJBQWMsUUFBQSxDQUFTLENBQUMsT0FBRCxDQUFULEVBQWQ7VUFBQSxDQUF0QyxDQURBLENBQUE7QUFBQSxVQUdBLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBZCxDQUF1QixnQkFBdkIsRUFBeUMsZ0JBQXpDLENBSEEsQ0FBQTtBQUFBLFVBS0EsZUFBQSxDQUFnQixTQUFBLEdBQUE7bUJBQUcsa0JBQUg7VUFBQSxDQUFoQixDQUxBLENBQUE7aUJBTUEsSUFBQSxDQUFLLFNBQUEsR0FBQTttQkFDSCxNQUFBLENBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLHNCQUFoQixDQUFQLENBQThDLENBQUMsT0FBL0MsQ0FBdUQsT0FBdkQsRUFERztVQUFBLENBQUwsRUFQb0U7UUFBQSxDQUF0RSxFQUY2QztNQUFBLENBQS9DLEVBRnFEO0lBQUEsQ0FBdkQsRUFQb0I7RUFBQSxDQUF0QixDQVJBLENBQUE7QUFBQSIKfQ==

//# sourceURL=/Users/thilko/.atom/packages/cyber-dojo/spec/cyber-dojo-spec.coffee
