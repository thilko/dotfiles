(function() {
  var $$, AnsiFilter, BufferedProcess, ElixirCmdView, View, ansiFilter, elixirModule, elixirModuleFunction, escape, fileResolve, filelike, filesplit, fs, kernelFunction, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BufferedProcess = require('atom').BufferedProcess;

  _ref = require('atom-space-pen-views'), View = _ref.View, $$ = _ref.$$;

  AnsiFilter = require('ansi-to-html');

  ansiFilter = new AnsiFilter;

  fs = require('fs');

  elixirModule = /^((?:[A-Z][a-zA-Z0-9_-]*)(?:\.[A-Z][a-zA-Z0-9_-]*)*)$/;

  elixirModuleFunction = /^((?:[A-Z][a-zA-Z0-9_-]*)(?:\.[A-Z][a-zA-Z0-9_-]*)*)\.([a-z][a-zA-Z0-9_-]*)$/;

  kernelFunction = /^([a-z][a-zA-Z0-9_-]*)/;

  filelike = /((?:\w*\/)*\w*\.exs?(?::\d+))/;

  filesplit = /((?:\w*\/)*\w*\.exs?)(?::(\d+))/;

  escape = (function() {
    var escaping, k, reMatch, reString, reTest, replacer;
    escaping = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    };
    replacer = function(match) {
      return escaping[match];
    };
    reString = "(?:" + ((function() {
      var _results;
      _results = [];
      for (k in escaping) {
        _results.push(k);
      }
      return _results;
    })()).join("|") + ")";
    reTest = RegExp(reString);
    reMatch = RegExp(reString, "g");
    return function(string) {
      string = (string == null ? "" : "" + string);
      if (reTest.test(string)) {
        return string.replace(reMatch, replacer);
      } else {
        return string;
      }
    };
  })();

  fileResolve = function(filename) {
    var file, _ref1;
    file = (_ref1 = atom.project.getDirectories()[0]) != null ? _ref1.resolve(filename) : void 0;
    if (fs.existsSync(file)) {
      return file;
    }
  };

  module.exports = ElixirCmdView = (function(_super) {
    __extends(ElixirCmdView, _super);

    function ElixirCmdView() {
      return ElixirCmdView.__super__.constructor.apply(this, arguments);
    }

    ElixirCmdView.bufferedProcess = null;

    ElixirCmdView.content = function() {
      return this.div((function(_this) {
        return function() {
          var css;
          css = 'tool-panel panel panel-bottom padding elixir-cmd-view native-key-bindings';
          return _this.div({
            "class": css,
            outlet: 'script',
            tabindex: -1
          }, function() {
            return _this.div({
              click: 'gotoFile',
              "class": 'panel-body padded output',
              outlet: 'output'
            });
          });
        };
      })(this));
    };

    ElixirCmdView.prototype.initialize = function(serializeState, runOptions) {
      this.runOptions = runOptions;
      return atom.commands.add('atom-workspace', {
        'elixir-cmd:build': (function(_this) {
          return function() {
            return _this.buildProject();
          };
        })(this),
        'elixir-cmd:test': (function(_this) {
          return function() {
            return _this.testProject();
          };
        })(this),
        'elixir-cmd:doc': (function(_this) {
          return function() {
            return _this.keywordDocumentation();
          };
        })(this),
        'elixir-cmd:kill-process': (function(_this) {
          return function() {
            return _this.stop();
          };
        })(this)
      });
    };

    ElixirCmdView.prototype.gotoFile = function(_arg) {
      var file, target;
      target = _arg.target;
      if (!(file = target.getAttribute("file"))) {
        return;
      }
      return atom.workspace.open(file).then(function(editor) {
        var lineno;
        if (!(lineno = target.getAttribute("lineno"))) {
          return;
        }
        editor.moveToTop();
        return editor.moveDown(lineno - 1);
      });
    };

    ElixirCmdView.prototype.serialize = function() {};

    ElixirCmdView.prototype.buildProject = function() {
      this.resetView();
      this.saveAll();
      return this.run('mix', ['compile']);
    };

    ElixirCmdView.prototype.testProject = function() {
      this.resetView();
      this.saveAll();
      return this.run('mix', ['test']);
    };

    ElixirCmdView.prototype.keywordDocumentation = function() {
      var args, functionName, kw, matches, moduleName, _matching;
      if ((kw = this.keywordGet()) == null) {
        return;
      }
      args = ['-S', 'mix', 'run', '-e'];
      switch (false) {
        case !(matches = kw.match(elixirModule)):
          _matching = matches[0], moduleName = matches[1];
          this.resetView();
          args.push("require IEx\nApplication.put_env(:iex, :colors, [enabled: true])\nIEx.Introspection.h(" + moduleName + ")");
          break;
        case !(matches = kw.match(elixirModuleFunction)):
          _matching = matches[0], moduleName = matches[1], functionName = matches[2];
          this.resetView();
          args.push("require IEx\nApplication.put_env(:iex, :colors, [enabled: true])\nIEx.Introspection.h(" + moduleName + ", :" + functionName + ")");
          break;
        case !(matches = kw.match(kernelFunction)):
          _matching = matches[0], functionName = matches[1];
          this.resetView();
          args.push("require IEx\nApplication.put_env(:iex, :colors, [enabled: true])\nIEx.Introspection.h(Kernel, :" + functionName + ")");
          break;
        default:
          return;
      }
      return this.run('elixir', args);
    };

    ElixirCmdView.prototype.keywordGet = function() {
      var currentScope, editor, range, scopes, selection, start, text, validNameChars;
      editor = atom.workspace.getActiveEditor();
      selection = editor.getSelection().getText();
      if (selection) {
        return selection;
      }
      scopes = editor.getCursorScopes();
      currentScope = scopes[scopes.length - 1];
      if (scopes.length > 1 && !/^(?:comment|string|meta|markup)(?:\.|$)/.test(currentScope)) {
        range = editor.bufferRangeForScopeAtCursor(currentScope);
      } else {
        range = editor.getCursor().getCurrentWordBufferRange();
      }
      start = range.start.column;
      range.start.column = 0;
      text = editor.getTextInBufferRange(range);
      validNameChars = /[a-zA-Z]/;
      while (start > 1 && text.charAt(start - 1) === "." && validNameChars.test(text.charAt(start - 2))) {
        start -= 1;
        while (start > 0 && validNameChars.test(text.charAt(start - 1))) {
          start -= 1;
        }
      }
      return text.slice(start, range.end.column);
    };

    ElixirCmdView.prototype.keywordExtendLeft = function(range) {};

    ElixirCmdView.prototype.resetView = function(title) {
      if (title == null) {
        title = 'Loading...';
      }
      if (!this.hasParent()) {
        atom.workspace.addBottomPanel({
          item: this
        });
      }
      this.stop();
      return this.output.empty();
    };

    ElixirCmdView.prototype.saveAll = function() {
      return atom.project.buffers.forEach(function(buffer) {
        if (buffer.isModified() && (buffer.file != null)) {
          return buffer.save();
        }
      });
    };

    ElixirCmdView.prototype.close = function() {
      this.stop();
      if (this.hasParent()) {
        return this.detach();
      }
    };

    ElixirCmdView.prototype.handleError = function(err) {
      this.output.append(err);
      return this.stop();
    };

    ElixirCmdView.prototype.run = function(command, args, stdout) {
      var exit, options, stderr;
      if (stdout == null) {
        stdout = (function(_this) {
          return function(output) {
            return _this.display('stdout', output);
          };
        })(this);
      }
      options = {
        cwd: this.getCwd(),
        env: process.env
      };
      stderr = (function(_this) {
        return function(output) {
          return _this.display('stderr', output);
        };
      })(this);
      exit = (function(_this) {
        return function(returnCode) {
          return _this.output.append($$(function() {
            return this.small("-- exit " + returnCode + " --");
          }));
        };
      })(this);
      this.bufferedProcess = new BufferedProcess({
        command: command,
        args: args,
        options: options,
        stdout: stdout,
        stderr: stderr,
        exit: exit
      });
      return this.bufferedProcess.process.on('error', (function(_this) {
        return function(nodeError) {
          return _this.output.append($$(function() {
            this.h1('Unable to run');
            this.pre(escape(command));
            this.h2('Is it on your path?');
            return this.pre("PATH: " + (escape(process.env.PATH)));
          }));
        };
      })(this));
    };

    ElixirCmdView.prototype.getCwd = function() {
      return atom.project.getPaths()[0];
    };

    ElixirCmdView.prototype.stop = function() {
      if ((this.bufferedProcess != null) && (this.bufferedProcess.process != null)) {
        this.display('stdout', '^C');
        return this.bufferedProcess.kill();
      }
    };

    ElixirCmdView.prototype.display = function(css, line) {
      return this.output.append($$(function() {
        return this.pre({
          "class": "line " + css
        }, (function(_this) {
          return function() {
            var bit, bits, file, filename, lineno, matching, matchstring, _i, _len, _results;
            if (filelike.test(line)) {
              bits = line.split(filelike);
              _results = [];
              for (_i = 0, _len = bits.length; _i < _len; _i++) {
                bit = bits[_i];
                if (matching = bit.match(filesplit)) {
                  matchstring = matching[0], filename = matching[1], lineno = matching[2];
                  if (filename && (file = fileResolve(filename)) && fs.existsSync(file)) {
                    _results.push(_this.a({
                      style: 'color: #428bca;',
                      file: file,
                      lineno: lineno ? lineno : void 0
                    }, bit));
                  } else {
                    _results.push(_this.span(bit));
                  }
                } else {
                  _results.push(_this.span(bit));
                }
              }
              return _results;
            } else {
              line = escape(line);
              line = ansiFilter.toHtml(line);
              return _this.raw(line);
            }
          };
        })(this));
      }));
    };

    return ElixirCmdView;

  })(View);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3RoaWxrby8uYXRvbS9wYWNrYWdlcy9lbGl4aXItY21kL2xpYi9lbGl4aXItY21kLXZpZXcuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLHdLQUFBO0lBQUE7bVNBQUE7O0FBQUEsRUFBQyxrQkFBbUIsT0FBQSxDQUFRLE1BQVIsRUFBbkIsZUFBRCxDQUFBOztBQUFBLEVBQ0EsT0FBYSxPQUFBLENBQVEsc0JBQVIsQ0FBYixFQUFDLFlBQUEsSUFBRCxFQUFPLFVBQUEsRUFEUCxDQUFBOztBQUFBLEVBRUEsVUFBQSxHQUFhLE9BQUEsQ0FBUSxjQUFSLENBRmIsQ0FBQTs7QUFBQSxFQUdBLFVBQUEsR0FBYSxHQUFBLENBQUEsVUFIYixDQUFBOztBQUFBLEVBSUEsRUFBQSxHQUFLLE9BQUEsQ0FBUSxJQUFSLENBSkwsQ0FBQTs7QUFBQSxFQU1BLFlBQUEsR0FBZSx1REFOZixDQUFBOztBQUFBLEVBT0Esb0JBQUEsR0FBdUIsOEVBUHZCLENBQUE7O0FBQUEsRUFRQSxjQUFBLEdBQWlCLHdCQVJqQixDQUFBOztBQUFBLEVBVUEsUUFBQSxHQUFXLCtCQVZYLENBQUE7O0FBQUEsRUFXQSxTQUFBLEdBQVksaUNBWFosQ0FBQTs7QUFBQSxFQWVBLE1BQUEsR0FBUyxDQUFDLFNBQUEsR0FBQTtBQUNSLFFBQUEsZ0RBQUE7QUFBQSxJQUFBLFFBQUEsR0FDRTtBQUFBLE1BQUEsR0FBQSxFQUFLLE9BQUw7QUFBQSxNQUNBLEdBQUEsRUFBSyxNQURMO0FBQUEsTUFFQSxHQUFBLEVBQUssTUFGTDtBQUFBLE1BR0EsSUFBQSxFQUFNLFFBSE47QUFBQSxNQUlBLEdBQUEsRUFBSyxRQUpMO0FBQUEsTUFLQSxHQUFBLEVBQUssUUFMTDtLQURGLENBQUE7QUFBQSxJQU9BLFFBQUEsR0FBVSxTQUFDLEtBQUQsR0FBQTthQUFXLFFB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

//# sourceURL=/Users/thilko/.atom/packages/elixir-cmd/lib/elixir-cmd-view.coffee
