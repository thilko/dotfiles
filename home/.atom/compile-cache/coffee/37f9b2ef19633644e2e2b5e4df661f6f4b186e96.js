(function() {
  var EditorElement;

  EditorElement = require('../../lib/view/editor-element');

  describe("EditorElement", function() {
    return describe(".initialize", function() {
      var editor, label, text, _ref;
      _ref = [], editor = _ref[0], label = _ref[1], text = _ref[2];
      return describe("with valid config data", function() {
        beforeEach(function() {
          label = 'editor label';
          text = 'serializedState text';
          return editor = new EditorElement({
            text: text,
            label: label
          });
        });
        it("sets correct label", function() {
          var result;
          result = editor.element.querySelector('.message');
          return expect(result.textContent).toEqual(label);
        });
        return it("sets correct text in editor", function() {
          var result;
          result = editor.element.querySelector('.editor');
          return expect(result.getModel().getText()).toEqual(text);
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9jeWJlci1kb2pvL3NwZWMvdmlldy9lZGl0b3ItZWxlbWVudC1zcGVjLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxhQUFBOztBQUFBLEVBQUEsYUFBQSxHQUFnQixPQUFBLENBQVEsK0JBQVIsQ0FBaEIsQ0FBQTs7QUFBQSxFQU9BLFFBQUEsQ0FBUyxlQUFULEVBQTBCLFNBQUEsR0FBQTtXQUV4QixRQUFBLENBQVMsYUFBVCxFQUF3QixTQUFBLEdBQUE7QUFDdEIsVUFBQSx5QkFBQTtBQUFBLE1BQUEsT0FBd0IsRUFBeEIsRUFBQyxnQkFBRCxFQUFTLGVBQVQsRUFBZ0IsY0FBaEIsQ0FBQTthQUVBLFFBQUEsQ0FBUyx3QkFBVCxFQUFtQyxTQUFBLEdBQUE7QUFDakMsUUFBQSxVQUFBLENBQVcsU0FBQSxHQUFBO0FBQ1QsVUFBQSxLQUFBLEdBQVEsY0FBUixDQUFBO0FBQUEsVUFDQSxJQUFBLEdBQU8sc0JBRFAsQ0FBQTtpQkFFQSxNQUFBLEdBQWEsSUFBQSxhQUFBLENBQWM7QUFBQSxZQUN6QixJQUFBLEVBQU0sSUFEbUI7QUFBQSxZQUV6QixLQUFBLEVBQU8sS0FGa0I7V0FBZCxFQUhKO1FBQUEsQ0FBWCxDQUFBLENBQUE7QUFBQSxRQVFBLEVBQUEsQ0FBRyxvQkFBSCxFQUF5QixTQUFBLEdBQUE7QUFDdkIsY0FBQSxNQUFBO0FBQUEsVUFBQSxNQUFBLEdBQVMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFmLENBQTZCLFVBQTdCLENBQVQsQ0FBQTtpQkFDQSxNQUFBLENBQU8sTUFBTSxDQUFDLFdBQWQsQ0FBMEIsQ0FBQyxPQUEzQixDQUFtQyxLQUFuQyxFQUZ1QjtRQUFBLENBQXpCLENBUkEsQ0FBQTtlQVlBLEVBQUEsQ0FBRyw2QkFBSCxFQUFrQyxTQUFBLEdBQUE7QUFDaEMsY0FBQSxNQUFBO0FBQUEsVUFBQSxNQUFBLEdBQVMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFmLENBQTZCLFNBQTdCLENBQVQsQ0FBQTtpQkFDQSxNQUFBLENBQU8sTUFBTSxDQUFDLFFBQVAsQ0FBQSxDQUFpQixDQUFDLE9BQWxCLENBQUEsQ0FBUCxDQUFtQyxDQUFDLE9BQXBDLENBQTRDLElBQTVDLEVBRmdDO1FBQUEsQ0FBbEMsRUFiaUM7TUFBQSxDQUFuQyxFQUhzQjtJQUFBLENBQXhCLEVBRndCO0VBQUEsQ0FBMUIsQ0FQQSxDQUFBO0FBQUEiCn0=

//# sourceURL=/Users/thilko/.atom/packages/cyber-dojo/spec/view/editor-element-spec.coffee
