(function() {
  var $, CyberDojoKata, CyberDojoUrlView, TextEditorView, View, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ref = require('atom-space-pen-views'), $ = _ref.$, TextEditorView = _ref.TextEditorView, View = _ref.View;

  CyberDojoKata = require('./cyber-dojo-kata.coffee');

  module.exports = CyberDojoUrlView = (function(_super) {
    __extends(CyberDojoUrlView, _super);

    function CyberDojoUrlView() {
      return CyberDojoUrlView.__super__.constructor.apply(this, arguments);
    }

    CyberDojoUrlView.content = function() {
      return this.div({
        "class": 'cyber-dojo'
      }, (function(_this) {
        return function() {
          _this.subview('miniEditor', new TextEditorView({
            mini: true
          }));
          return _this.div({
            "class": 'message',
            outlet: 'message'
          });
        };
      })(this));
    };

    CyberDojoUrlView.prototype.initialize = function(url, successCallback) {
      this.validUrlEnteredCallback = successCallback;
      this.panel = atom.workspace.addModalPanel({
        item: this,
        visible: false
      });
      this.miniEditor.setText(url);
      atom.commands.add(this.miniEditor.element, 'core:confirm', (function(_this) {
        return function() {
          return _this.confirm();
        };
      })(this));
      return atom.commands.add(this.miniEditor.element, 'core:cancel', (function(_this) {
        return function() {
          return _this.close();
        };
      })(this));
    };

    CyberDojoUrlView.prototype.toggle = function() {
      if (this.panel.isVisible()) {
        return this.close();
      } else {
        return this.open();
      }
    };

    CyberDojoUrlView.prototype.close = function() {
      var miniEditorFocused;
      if (!this.panel.isVisible()) {
        return;
      }
      miniEditorFocused = this.miniEditor.hasFocus();
      this.panel.hide();
      if (miniEditorFocused) {
        return this.restoreFocus();
      }
    };

    CyberDojoUrlView.prototype.confirm = function() {
      var kata, _ref1;
      kata = CyberDojoKata.forUrl(this.miniEditor.getText());
      if (kata) {
        this.validUrlEnteredCallback(kata);
      } else {
        if ((_ref1 = atom.notifications) != null) {
          _ref1.addError("Not a valid URL: '" + (this.miniEditor.getText()) + "'");
        }
      }
      return this.close();
    };

    CyberDojoUrlView.prototype.storeFocusedElement = function() {
      return this.previouslyFocusedElement = $(':focus');
    };

    CyberDojoUrlView.prototype.restoreFocus = function() {
      var _ref1;
      if ((_ref1 = this.previouslyFocusedElement) != null ? _ref1.isOnDom() : void 0) {
        return this.previouslyFocusedElement.focus();
      } else {
        return atom.views.getView(atom.workspace).focus();
      }
    };

    CyberDojoUrlView.prototype.open = function() {
      if (!this.panel.isVisible()) {
        this.storeFocusedElement();
        this.panel.show();
        this.message.text("Enter cyber-dojo kata URL");
        return this.miniEditor.focus();
      }
    };

    CyberDojoUrlView.prototype.destroy = function() {
      return this.element.remove();
    };

    return CyberDojoUrlView;

  })(View);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9jeWJlci1kb2pvL2xpYi9jeWJlci1kb2pvLXVybC12aWV3LmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSw4REFBQTtJQUFBO21TQUFBOztBQUFBLEVBQUEsT0FBNkIsT0FBQSxDQUFRLHNCQUFSLENBQTdCLEVBQUMsU0FBQSxDQUFELEVBQUksc0JBQUEsY0FBSixFQUFvQixZQUFBLElBQXBCLENBQUE7O0FBQUEsRUFDQSxhQUFBLEdBQWdCLE9BQUEsQ0FBUSwwQkFBUixDQURoQixDQUFBOztBQUFBLEVBR0EsTUFBTSxDQUFDLE9BQVAsR0FFTTtBQUVKLHVDQUFBLENBQUE7Ozs7S0FBQTs7QUFBQSxJQUFBLGdCQUFDLENBQUEsT0FBRCxHQUFVLFNBQUEsR0FBQTthQUNSLElBQUMsQ0FBQSxHQUFELENBQUs7QUFBQSxRQUFBLE9BQUEsRUFBTyxZQUFQO09BQUwsRUFBMEIsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtBQUN4QixVQUFBLEtBQUMsQ0FBQSxPQUFELENBQVMsWUFBVCxFQUEyQixJQUFBLGNBQUEsQ0FBZTtBQUFBLFlBQUEsSUFBQSxFQUFNLElBQU47V0FBZixDQUEzQixDQUFBLENBQUE7aUJBQ0EsS0FBQyxDQUFBLEdBQUQsQ0FBSztBQUFBLFlBQUEsT0FBQSxFQUFPLFNBQVA7QUFBQSxZQUFrQixNQUFBLEVBQVEsU0FBMUI7V0FBTCxFQUZ3QjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFCLEVBRFE7SUFBQSxDQUFWLENBQUE7O0FBQUEsK0JBS0EsVUFBQSxHQUFZLFNBQUMsR0FBRCxFQUFNLGVBQU4sR0FBQTtBQUNWLE1BQUEsSUFBQyxDQUFBLHVCQUFELEdBQTJCLGVBQTNCLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxLQUFELEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFmLENBQTZCO0FBQUEsUUFBQSxJQUFBLEVBQU0sSUFBTjtBQUFBLFFBQVksT0FBQSxFQUFTLEtBQXJCO09BQTdCLENBRFQsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLFVBQVUsQ0FBQyxPQUFaLENBQW9CLEdBQXBCLENBRkEsQ0FBQTtBQUFBLE1BT0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFkLENBQWtCLElBQUMsQ0FBQSxVQUFVLENBQUMsT0FBOUIsRUFBdUMsY0FBdkMsRUFBdUQsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtpQkFBRyxLQUFDLENBQUEsT0FBRCxDQUFBLEVBQUg7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF2RCxDQVBBLENBQUE7YUFRQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWQsQ0FBa0IsSUFBQyxDQUFBLFVBQVUsQ0FBQyxPQUE5QixFQUF1QyxhQUF2QyxFQUFzRCxDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQSxHQUFBO2lCQUFHLEtBQUMsQ0FBQSxLQUFELENBQUEsRUFBSDtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXRELEVBVFU7SUFBQSxDQUxaLENBQUE7O0FBQUEsK0JBZ0JBLE1BQUEsR0FBUSxTQUFBLEdBQUE7QUFDTixNQUFBLElBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxTQUFQLENBQUEsQ0FBSDtlQUEyQixJQUFDLENBQUEsS0FBRCxDQUFBLEVBQTNCO09BQUEsTUFBQTtlQUF5QyxJQUFDLENBQUEsSUFBRCxDQUFBLEVBQXpDO09BRE07SUFBQSxDQWhCUixDQUFBOztBQUFBLCtCQW1CQSxLQUFBLEdBQU8sU0FBQSxHQUFBO0FBQ0wsVUFBQSxpQkFBQTtBQUFBLE1BQUEsSUFBQSxDQUFBLElBQWUsQ0FBQSxLQUFLLENBQUMsU0FBUCxDQUFBLENBQWQ7QUFBQSxjQUFBLENBQUE7T0FBQTtBQUFBLE1BRUEsaUJBQUEsR0FBb0IsSUFBQyxDQUFBLFVBQVUsQ0FBQyxRQUFaLENBQUEsQ0FGcEIsQ0FBQTtBQUFBLE1BR0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQUEsQ0FIQSxDQUFBO0FBSUEsTUFBQSxJQUFtQixpQkFBbkI7ZUFBQSxJQUFDLENBQUEsWUFBRCxDQUFBLEVBQUE7T0FMSztJQUFBLENBbkJQLENBQUE7O0FBQUEsK0JBMEJBLE9BQUEsR0FBUyxTQUFBLEdBQUE7QUFDUCxVQUFBLFdBQUE7QUFBQSxNQUFBLElBQUEsR0FBTyxhQUFhLENBQUMsTUFBZCxDQUFxQixJQUFDLENBQUEsVUFBVSxDQUFDLE9BQVosQ0FBQSxDQUFyQixDQUFQLENBQUE7QUFDQSxNQUFBLElBQUcsSUFBSDtBQUNFLFFBQUEsSUFBQyxDQUFBLHVCQUFELENBQXlCLElBQXpCLENBQUEsQ0FERjtPQUFBLE1BQUE7O2VBR29CLENBQUUsUUFBcEIsQ0FBOEIsb0JBQUEsR0FBbUIsQ0FBQyxJQUFDLENBQUEsVUFBVSxDQUFDLE9BQVosQ0FBQSxDQUFELENBQW5CLEdBQTBDLEdBQXhFO1NBSEY7T0FEQTthQUtBLElBQUMsQ0FBQSxLQUFELENBQUEsRUFOTztJQUFBLENBMUJULENBQUE7O0FBQUEsK0JBa0NBLG1CQUFBLEdBQXFCLFNBQUEsR0FBQTthQUNuQixJQUFDLENBQUEsd0JBQUQsR0FBNEIsQ0FBQSxDQUFFLFFBQUYsRUFEVDtJQUFBLENBbENyQixDQUFBOztBQUFBLCtCQXFDQSxZQUFBLEdBQWMsU0FBQSxHQUFBO0FBQ1osVUFBQSxLQUFBO0FBQUEsTUFBQSwyREFBNEIsQ0FBRSxPQUEzQixDQUFBLFVBQUg7ZUFDRSxJQUFDLENBQUEsd0JBQXdCLENBQUMsS0FBMUIsQ0FBQSxFQURGO09BQUEsTUFBQTtlQUdFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBWCxDQUFtQixJQUFJLENBQUMsU0FBeEIsQ0FBa0MsQ0FBQyxLQUFuQyxDQUFBLEVBSEY7T0FEWTtJQUFBLENBckNkLENBQUE7O0FBQUEsK0JBMkNBLElBQUEsR0FBTSxTQUFBLEdBQUE7QUFDSixNQUFBLElBQUEsQ0FBQSxJQUFRLENBQUEsS0FBSyxDQUFDLFNBQVAsQ0FBQSxDQUFQO0FBQ0UsUUFBQSxJQUFDLENBQUEsbUJBQUQsQ0FBQSxDQUFBLENBQUE7QUFBQSxRQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFBLENBREEsQ0FBQTtBQUFBLFFBRUEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsMkJBQWQsQ0FGQSxDQUFBO2VBR0EsSUFBQyxDQUFBLFVBQVUsQ0FBQyxLQUFaLENBQUEsRUFKRjtPQURJO0lBQUEsQ0EzQ04sQ0FBQTs7QUFBQSwrQkFrREEsT0FBQSxHQUFTLFNBQUEsR0FBQTthQUNQLElBQUMsQ0FBQSxPQUFPLENBQUMsTUFBVCxDQUFBLEVBRE87SUFBQSxDQWxEVCxDQUFBOzs0QkFBQTs7S0FGNkIsS0FML0IsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/thilko/.atom/packages/cyber-dojo/lib/cyber-dojo-url-view.coffee
