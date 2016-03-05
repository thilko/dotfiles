Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.provideBuilder = provideBuilder;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

'use babel';

function provideBuilder() {
  return (function () {
    function ElixirBuildProvider(cwd) {
      _classCallCheck(this, ElixirBuildProvider);

      this.cwd = cwd;
    }

    _createClass(ElixirBuildProvider, [{
      key: 'getNiceName',
      value: function getNiceName() {
        return 'Elixir';
      }
    }, {
      key: 'isEligible',
      value: function isEligible() {
        return _fs2['default'].existsSync(this.cwd + '/mix.exs');
      }
    }, {
      key: 'settings',
      value: function settings() {
        var exec = /^win/.test(process.platform) ? 'mix.bat' : 'mix';
        return [{
          name: 'Elixir: mix compile',
          exec: exec,
          args: ['compile'],
          sh: false,
          errorMatch: ['\\*\\*\\s{1}\\((?<errorType>[a-zA-Z]+)\\)\\s{1}(?<file>[\\/0-9a-zA-Z\\\\._-]+).*\\s{1}starting at line\\s{1}(?<line>\\d+)', '\\*\\*\\s{1}\\((?<errorType>[a-zA-Z]+)\\)\\s{1}(?<file>[\\/0-9a-zA-Z\\\\._-]+):(?<line>\\d+)']
        }, {
          name: 'Elixir: mix compile --warnings-as-errors',
          exec: exec,
          args: ['compile', '--warnings-as-errors'],
          sh: false,
          errorMatch: ['\\*\\*\\s{1}\\((?<errorType>[a-zA-Z]+)\\)\\s{1}(?<file>[\\/0-9a-zA-Z\\\\._-]+).*\\s{1}starting at line\\s{1}(?<line>\\d+)', '\\*\\*\\s{1}\\((?<errorType>[a-zA-Z]+)\\)\\s{1}(?<file>[\\/0-9a-zA-Z\\\\._-]+):(?<line>\\d+)', '(?<file>[\\/0-9a-zA-Z\\\\._-]+):(?<line>\\d+):\\s{1}warning:\\s{1}(?<warningReason>.*)']
        }, {
          name: 'Elixir: mix test',
          exec: exec,
          args: ['test'],
          sh: false,
          errorMatch: ['(?<file>[\\/0-9a-zA-Z\\\\._-]+):(?<line>\\d+)']
        }, {
          name: 'Elixir: mix clean',
          exec: exec,
          args: ['clean'],
          sh: false,
          keymap: 'cmd-alt-k'
        }, {
          name: 'Elixir: mix dialyzer',
          exec: exec,
          args: ['dialyzer', '--fullpath'],
          sh: false,
          errorMatch: ['(?<file>[\\/0-9a-zA-Z\\\\._-]+):(?<line>\\d+):\\s{1}(?<info>.*)']
        }];
      }
    }]);

    return ElixirBuildProvider;
  })();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGlsa28vLmF0b20vcGFja2FnZXMvYnVpbGQtZWxpeGlyL2xpYi9lbGl4aXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2tCQUVlLElBQUk7Ozs7QUFGbkIsV0FBVyxDQUFDOztBQUlMLFNBQVMsY0FBYyxHQUFHO0FBQy9CO0FBQ2EsYUFEQSxtQkFBbUIsQ0FDbEIsR0FBRyxFQUFFOzRCQUROLG1CQUFtQjs7QUFFNUIsVUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDaEI7O2lCQUhVLG1CQUFtQjs7YUFLbkIsdUJBQUc7QUFDWixlQUFPLFFBQVEsQ0FBQztPQUNqQjs7O2FBRVMsc0JBQUc7QUFDWCxlQUFPLGdCQUFHLFVBQVUsQ0FBSSxJQUFJLENBQUMsR0FBRyxjQUFXLENBQUM7T0FDN0M7OzthQUVPLG9CQUFHO0FBQ1QsWUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUMvRCxlQUFPLENBQUU7QUFDUCxjQUFJLEVBQUUscUJBQXFCO0FBQzNCLGNBQUksRUFBRSxJQUFJO0FBQ1YsY0FBSSxFQUFFLENBQUUsU0FBUyxDQUFFO0FBQ25CLFlBQUUsRUFBRSxLQUFLO0FBQ1Qsb0JBQVUsRUFBRSxDQUFFLDJIQUEySCxFQUMzSCw4RkFBOEYsQ0FBRTtTQUMvRyxFQUNEO0FBQ0UsY0FBSSxFQUFFLDBDQUEwQztBQUNoRCxjQUFJLEVBQUUsSUFBSTtBQUNWLGNBQUksRUFBRSxDQUFFLFNBQVMsRUFBRSxzQkFBc0IsQ0FBRTtBQUMzQyxZQUFFLEVBQUUsS0FBSztBQUNULG9CQUFVLEVBQUUsQ0FBRSwySEFBMkgsRUFDM0gsOEZBQThGLEVBQzlGLHdGQUF3RixDQUFFO1NBQ3pHLEVBQ0Q7QUFDRSxjQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLGNBQUksRUFBRSxJQUFJO0FBQ1YsY0FBSSxFQUFFLENBQUUsTUFBTSxDQUFFO0FBQ2hCLFlBQUUsRUFBRSxLQUFLO0FBQ1Qsb0JBQVUsRUFBRSxDQUFFLCtDQUErQyxDQUFFO1NBQ2hFLEVBQ0Q7QUFDRSxjQUFJLEVBQUUsbUJBQW1CO0FBQ3pCLGNBQUksRUFBRSxJQUFJO0FBQ1YsY0FBSSxFQUFFLENBQUUsT0FBTyxDQUFFO0FBQ2pCLFlBQUUsRUFBRSxLQUFLO0FBQ1QsZ0JBQU0sRUFBRSxXQUFXO1NBQ3BCLEVBQ0Q7QUFDRSxjQUFJLEVBQUUsc0JBQXNCO0FBQzVCLGNBQUksRUFBRSxJQUFJO0FBQ1YsY0FBSSxFQUFFLENBQUUsVUFBVSxFQUFFLFlBQVksQ0FBRTtBQUNsQyxZQUFFLEVBQUUsS0FBSztBQUNULG9CQUFVLEVBQUUsQ0FBRSxpRUFBaUUsQ0FBRTtTQUNsRixDQUFFLENBQUM7T0FDTDs7O1dBckRVLG1CQUFtQjtPQXNEOUI7Q0FDSCIsImZpbGUiOiIvVXNlcnMvdGhpbGtvLy5hdG9tL3BhY2thZ2VzL2J1aWxkLWVsaXhpci9saWIvZWxpeGlyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQnVpbGRlcigpIHtcbiAgcmV0dXJuIGNsYXNzIEVsaXhpckJ1aWxkUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKGN3ZCkge1xuICAgICAgdGhpcy5jd2QgPSBjd2Q7XG4gICAgfVxuXG4gICAgZ2V0TmljZU5hbWUoKSB7XG4gICAgICByZXR1cm4gJ0VsaXhpcic7XG4gICAgfVxuXG4gICAgaXNFbGlnaWJsZSgpIHtcbiAgICAgIHJldHVybiBmcy5leGlzdHNTeW5jKGAke3RoaXMuY3dkfS9taXguZXhzYCk7XG4gICAgfVxuXG4gICAgc2V0dGluZ3MoKSB7XG4gICAgICBjb25zdCBleGVjID0gL153aW4vLnRlc3QocHJvY2Vzcy5wbGF0Zm9ybSkgPyAnbWl4LmJhdCcgOiAnbWl4JztcbiAgICAgIHJldHVybiBbIHtcbiAgICAgICAgbmFtZTogJ0VsaXhpcjogbWl4IGNvbXBpbGUnLFxuICAgICAgICBleGVjOiBleGVjLFxuICAgICAgICBhcmdzOiBbICdjb21waWxlJyBdLFxuICAgICAgICBzaDogZmFsc2UsXG4gICAgICAgIGVycm9yTWF0Y2g6IFsgJ1xcXFwqXFxcXCpcXFxcc3sxfVxcXFwoKD88ZXJyb3JUeXBlPlthLXpBLVpdKylcXFxcKVxcXFxzezF9KD88ZmlsZT5bXFxcXC8wLTlhLXpBLVpcXFxcXFxcXC5fLV0rKS4qXFxcXHN7MX1zdGFydGluZyBhdCBsaW5lXFxcXHN7MX0oPzxsaW5lPlxcXFxkKyknLFxuICAgICAgICAgICAgICAgICAgICAgICdcXFxcKlxcXFwqXFxcXHN7MX1cXFxcKCg/PGVycm9yVHlwZT5bYS16QS1aXSspXFxcXClcXFxcc3sxfSg/PGZpbGU+W1xcXFwvMC05YS16QS1aXFxcXFxcXFwuXy1dKyk6KD88bGluZT5cXFxcZCspJyBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRWxpeGlyOiBtaXggY29tcGlsZSAtLXdhcm5pbmdzLWFzLWVycm9ycycsXG4gICAgICAgIGV4ZWM6IGV4ZWMsXG4gICAgICAgIGFyZ3M6IFsgJ2NvbXBpbGUnLCAnLS13YXJuaW5ncy1hcy1lcnJvcnMnIF0sXG4gICAgICAgIHNoOiBmYWxzZSxcbiAgICAgICAgZXJyb3JNYXRjaDogWyAnXFxcXCpcXFxcKlxcXFxzezF9XFxcXCgoPzxlcnJvclR5cGU+W2EtekEtWl0rKVxcXFwpXFxcXHN7MX0oPzxmaWxlPltcXFxcLzAtOWEtekEtWlxcXFxcXFxcLl8tXSspLipcXFxcc3sxfXN0YXJ0aW5nIGF0IGxpbmVcXFxcc3sxfSg/PGxpbmU+XFxcXGQrKScsXG4gICAgICAgICAgICAgICAgICAgICAgJ1xcXFwqXFxcXCpcXFxcc3sxfVxcXFwoKD88ZXJyb3JUeXBlPlthLXpBLVpdKylcXFxcKVxcXFxzezF9KD88ZmlsZT5bXFxcXC8wLTlhLXpBLVpcXFxcXFxcXC5fLV0rKTooPzxsaW5lPlxcXFxkKyknLFxuICAgICAgICAgICAgICAgICAgICAgICcoPzxmaWxlPltcXFxcLzAtOWEtekEtWlxcXFxcXFxcLl8tXSspOig/PGxpbmU+XFxcXGQrKTpcXFxcc3sxfXdhcm5pbmc6XFxcXHN7MX0oPzx3YXJuaW5nUmVhc29uPi4qKScgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0VsaXhpcjogbWl4IHRlc3QnLFxuICAgICAgICBleGVjOiBleGVjLFxuICAgICAgICBhcmdzOiBbICd0ZXN0JyBdLFxuICAgICAgICBzaDogZmFsc2UsXG4gICAgICAgIGVycm9yTWF0Y2g6IFsgJyg/PGZpbGU+W1xcXFwvMC05YS16QS1aXFxcXFxcXFwuXy1dKyk6KD88bGluZT5cXFxcZCspJyBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRWxpeGlyOiBtaXggY2xlYW4nLFxuICAgICAgICBleGVjOiBleGVjLFxuICAgICAgICBhcmdzOiBbICdjbGVhbicgXSxcbiAgICAgICAgc2g6IGZhbHNlLFxuICAgICAgICBrZXltYXA6ICdjbWQtYWx0LWsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRWxpeGlyOiBtaXggZGlhbHl6ZXInLFxuICAgICAgICBleGVjOiBleGVjLFxuICAgICAgICBhcmdzOiBbICdkaWFseXplcicsICctLWZ1bGxwYXRoJyBdLFxuICAgICAgICBzaDogZmFsc2UsXG4gICAgICAgIGVycm9yTWF0Y2g6IFsgJyg/PGZpbGU+W1xcXFwvMC05YS16QS1aXFxcXFxcXFwuXy1dKyk6KD88bGluZT5cXFxcZCspOlxcXFxzezF9KD88aW5mbz4uKiknIF1cbiAgICAgIH0gXTtcbiAgICB9XG4gIH07XG59XG4iXX0=
//# sourceURL=/Users/thilko/.atom/packages/build-elixir/lib/elixir.js
