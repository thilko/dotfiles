(function() {
  var CompositeDisposable, ElixirCmdView, fs, path;

  ElixirCmdView = require('./elixir-cmd-view');

  CompositeDisposable = require('atom').CompositeDisposable;

  path = require('path');

  fs = require('fs');

  module.exports = {
    elixirCmdView: null,
    activate: function(state) {
      if (!fs.existsSync("" + (atom.project.getPaths()[0]) + "/mix.exs")) {
        return;
      }
      this.elixirCmdView = new ElixirCmdView(state.elixirCmdViewState);
      this.disposables = new CompositeDisposable;
      return this.disposables.add(atom.commands.add('atom-workspace', {
        'core:close': (function(_this) {
          return function() {
            var _ref;
            return (_ref = _this.elixirCmdView) != null ? _ref.close() : void 0;
          };
        })(this),
        'core:cancel': (function(_this) {
          return function() {
            var _ref;
            return (_ref = _this.elixirCmdView) != null ? _ref.close() : void 0;
          };
        })(this)
      }));
    },
    deactivate: function() {
      if (this.elixirCmdView) {
        this.elixirCmdView.destroy();
        return this.disposables.dispose();
      }
    },
    serialize: function() {
      var _ref;
      return {
        elixirCmdViewState: (_ref = this.elixirCmdView) != null ? _ref.serialize() : void 0
      };
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9lbGl4aXItY21kL2xpYi9lbGl4aXItY21kLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSw0Q0FBQTs7QUFBQSxFQUFBLGFBQUEsR0FBZ0IsT0FBQSxDQUFRLG1CQUFSLENBQWhCLENBQUE7O0FBQUEsRUFDQyxzQkFBdUIsT0FBQSxDQUFRLE1BQVIsRUFBdkIsbUJBREQsQ0FBQTs7QUFBQSxFQUVBLElBQUEsR0FBTyxPQUFBLENBQVEsTUFBUixDQUZQLENBQUE7O0FBQUEsRUFHQSxFQUFBLEdBQUssT0FBQSxDQUFRLElBQVIsQ0FITCxDQUFBOztBQUFBLEVBS0EsTUFBTSxDQUFDLE9BQVAsR0FDRTtBQUFBLElBQUEsYUFBQSxFQUFlLElBQWY7QUFBQSxJQUVBLFFBQUEsRUFBVSxTQUFDLEtBQUQsR0FBQTtBQUNSLE1BQUEsSUFBQSxDQUFBLEVBQWdCLENBQUMsVUFBSCxDQUFjLEVBQUEsR0FBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBYixDQUFBLENBQXdCLENBQUEsQ0FBQSxDQUF6QixDQUFGLEdBQThCLFVBQTVDLENBQWQ7QUFBQSxjQUFBLENBQUE7T0FBQTtBQUFBLE1BQ0EsSUFBQyxDQUFBLGFBQUQsR0FBcUIsSUFBQSxhQUFBLENBQWMsS0FBSyxDQUFDLGtCQUFwQixDQURyQixDQUFBO0FBQUEsTUFFQSxJQUFDLENBQUEsV0FBRCxHQUFlLEdBQUEsQ0FBQSxtQkFGZixDQUFBO2FBR0EsSUFBQyxDQUFBLFdBQVcsQ0FBQyxHQUFiLENBQWlCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBZCxDQUFrQixnQkFBbEIsRUFDZjtBQUFBLFFBQUEsWUFBQSxFQUFjLENBQUEsU0FBQSxLQUFBLEdBQUE7aUJBQUEsU0FBQSxHQUFBO0FBQUcsZ0JBQUEsSUFBQTs4REFBYyxDQUFFLEtBQWhCLENBQUEsV0FBSDtVQUFBLEVBQUE7UUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWQ7QUFBQSxRQUNBLGFBQUEsRUFBZSxDQUFBLFNBQUEsS0FBQSxHQUFBO2lCQUFBLFNBQUEsR0FBQTtBQUFHLGdCQUFBLElBQUE7OERBQWMsQ0FBRSxLQUFoQixDQUFBLFdBQUg7VUFBQSxFQUFBO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQURmO09BRGUsQ0FBakIsRUFKUTtJQUFBLENBRlY7QUFBQSxJQVVBLFVBQUEsRUFBWSxTQUFBLEdBQUE7QUFDVixNQUFBLElBQUcsSUFBQyxDQUFBLGFBQUo7QUFDRSxRQUFBLElBQUMsQ0FBQSxhQUFhLENBQUMsT0FBZixDQUFBLENBQUEsQ0FBQTtlQUNBLElBQUMsQ0FBQSxXQUFXLENBQUMsT0FBYixDQUFBLEVBRkY7T0FEVTtJQUFBLENBVlo7QUFBQSxJQWVBLFNBQUEsRUFBVyxTQUFBLEdBQUE7QUFDVCxVQUFBLElBQUE7YUFBQTtBQUFBLFFBQUEsa0JBQUEsNENBQWtDLENBQUUsU0FBaEIsQ0FBQSxVQUFwQjtRQURTO0lBQUEsQ0FmWDtHQU5GLENBQUE7QUFBQSIKfQ==

//# sourceURL=/Users/thilko/.atom/packages/elixir-cmd/lib/elixir-cmd.coffee
