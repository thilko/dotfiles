(function() {
  var ProgressElement,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ProgressElement = (function(_super) {
    __extends(ProgressElement, _super);

    ProgressElement.TEXT_SNIPPETS = {
      sync: {
        progress: 'Syncing with server\u2026',
        success: 'Synchronized successful with server',
        failure: 'Synchronization error with server'
      },
      runTests: {
        progress: 'Running tests/specs\u2026',
        success: 'Tests/Specs success',
        failure: 'Tests/Specs could not be executed with server'
      }
    };

    function ProgressElement() {
      this.progress = null;
      this.success = null;
      this.failure = null;
    }

    ProgressElement.prototype.setType = function(type) {
      this.progress = ProgressElement.TEXT_SNIPPETS[type]['progress'];
      this.success = ProgressElement.TEXT_SNIPPETS[type]['success'];
      return this.failure = ProgressElement.TEXT_SNIPPETS[type]['failure'];
    };

    ProgressElement.prototype.setDestroy = function(destroy) {
      return this.destroy = destroy;
    };

    ProgressElement.prototype.destroy = function() {
      return this.destroy();
    };

    ProgressElement.prototype.createdCallback = function() {
      return this.tabIndex = -1;
    };

    ProgressElement.prototype.displayLoading = function() {
      return this.innerHTML = "<span class=\"loading loading-spinner-small inline-block\"></span>\n<span>\n  " + this.progress + "\n</span>";
    };

    ProgressElement.prototype.displaySuccess = function() {
      return this.innerHTML = "<span class=\"text-success\">\n  " + this.success + "\n</span>";
    };

    ProgressElement.prototype.displayFailure = function() {
      return this.innerHTML = "<span class=\"text-error\">\n  " + this.failure + "\n</span>";
    };

    return ProgressElement;

  })(HTMLDivElement);

  module.exports = document.registerElement("cyber-dojo-progress", {
    prototype: ProgressElement.prototype,
    "extends": "div"
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9jeWJlci1kb2pvL2xpYi9wcm9ncmVzcy1lbGVtZW50LmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUNBO0FBQUEsTUFBQSxlQUFBO0lBQUE7bVNBQUE7O0FBQUEsRUFBTTtBQUNKLHNDQUFBLENBQUE7O0FBQUEsSUFBQSxlQUFDLENBQUEsYUFBRCxHQUFpQjtBQUFBLE1BQ2YsSUFBQSxFQUFNO0FBQUEsUUFDSixRQUFBLEVBQVUsMkJBRE47QUFBQSxRQUVKLE9BQUEsRUFBUyxxQ0FGTDtBQUFBLFFBR0osT0FBQSxFQUFTLG1DQUhMO09BRFM7QUFBQSxNQU1mLFFBQUEsRUFBVTtBQUFBLFFBQ1IsUUFBQSxFQUFVLDJCQURGO0FBQUEsUUFFUixPQUFBLEVBQVMscUJBRkQ7QUFBQSxRQUdSLE9BQUEsRUFBUywrQ0FIRDtPQU5LO0tBQWpCLENBQUE7O0FBYWEsSUFBQSx5QkFBQSxHQUFBO0FBQ1gsTUFBQSxJQUFDLENBQUEsUUFBRCxHQUFZLElBQVosQ0FBQTtBQUFBLE1BQ0EsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQURYLENBQUE7QUFBQSxNQUVBLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFGWCxDQURXO0lBQUEsQ0FiYjs7QUFBQSw4QkFrQkEsT0FBQSxHQUFTLFNBQUMsSUFBRCxHQUFBO0FBQ1AsTUFBQSxJQUFDLENBQUEsUUFBRCxHQUFZLGVBQWUsQ0FBQyxhQUFjLENBQUEsSUFBQSxDQUFNLENBQUEsVUFBQSxDQUFoRCxDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsT0FBRCxHQUFXLGVBQWUsQ0FBQyxhQUFjLENBQUEsSUFBQSxDQUFNLENBQUEsU0FBQSxDQUQvQyxDQUFBO2FBRUEsSUFBQyxDQUFBLE9BQUQsR0FBVyxlQUFlLENBQUMsYUFBYyxDQUFBLElBQUEsQ0FBTSxDQUFBLFNBQUEsRUFIeEM7SUFBQSxDQWxCVCxDQUFBOztBQUFBLDhCQXVCQSxVQUFBLEdBQVksU0FBQyxPQUFELEdBQUE7YUFDVixJQUFDLENBQUEsT0FBRCxHQUFXLFFBREQ7SUFBQSxDQXZCWixDQUFBOztBQUFBLDhCQTBCQSxPQUFBLEdBQVMsU0FBQSxHQUFBO2FBQ1AsSUFBQyxDQUFBLE9BQUQsQ0FBQSxFQURPO0lBQUEsQ0ExQlQsQ0FBQTs7QUFBQSw4QkE2QkEsZUFBQSxHQUFpQixTQUFBLEdBQUE7YUFDZixJQUFDLENBQUEsUUFBRCxHQUFZLENBQUEsRUFERztJQUFBLENBN0JqQixDQUFBOztBQUFBLDhCQWdDQSxjQUFBLEdBQWdCLFNBQUEsR0FBQTthQUNkLElBQUMsQ0FBQSxTQUFELEdBQ0osZ0ZBQUEsR0FDSyxJQUFDLENBQUEsUUFETixHQUVFLFlBSmdCO0lBQUEsQ0FoQ2hCLENBQUE7O0FBQUEsOEJBd0NBLGNBQUEsR0FBZ0IsU0FBQSxHQUFBO2FBQ2QsSUFBQyxDQUFBLFNBQUQsR0FDSixtQ0FBQSxHQUFnQyxJQUFDLENBQUEsT0FBakMsR0FDTyxZQUhXO0lBQUEsQ0F4Q2hCLENBQUE7O0FBQUEsOEJBK0NBLGNBQUEsR0FBZ0IsU0FBQSxHQUFBO2FBQ2QsSUFBQyxDQUFBLFNBQUQsR0FDSixpQ0FBQSxHQUE4QixJQUFDLENBQUEsT0FBL0IsR0FDTyxZQUhXO0lBQUEsQ0EvQ2hCLENBQUE7OzJCQUFBOztLQUQ0QixlQUE5QixDQUFBOztBQUFBLEVBdURBLE1BQU0sQ0FBQyxPQUFQLEdBQ0EsUUFBUSxDQUFDLGVBQVQsQ0FBeUIscUJBQXpCLEVBQ0U7QUFBQSxJQUFBLFNBQUEsRUFBVyxlQUFlLENBQUMsU0FBM0I7QUFBQSxJQUNBLFNBQUEsRUFBUyxLQURUO0dBREYsQ0F4REEsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/thilko/.atom/packages/cyber-dojo/lib/progress-element.coffee
