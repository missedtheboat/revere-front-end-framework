var fs = require('fs');
var RSVP = require('rsvp');
var sass = require('node-sass');
var CleanCSS = require('clean-css');

var CompileSass = (function() {

  var files = {
    input: 'stylesheets/framework.scss',
    output: 'public/stylesheets/framework.css'
  };

  function log(message) {
    console.log('[Framework:compileSass.js] ', message);
  }

  function writeFile(css) {
    fs.writeFile(files.output, css, function(err) {
      if (!!err) {
        log('Write File Error: ' + err);
        return false;
      }

      log('Wrote framework.css to ' + files.output);
    });
  }

  function compileSass(sourceMap) {
    sourceMap = sourceMap || false;
    
    return new RSVP.Promise(function(resolve, reject) {
      sass.render({
        sourceMap: sourceMap,
        file: files.input,
        outFile: files.output
      }, function(error, result) {
        console.log('res', result);
        if (!!error) {
          log('Compile Sass Error: ' + error);
          reject(false);
        }

        resolve(result.css);
      });
    });
  }

  function minifyCSS(css) {
    return new CleanCSS().minify(css).styles;
  }

  return {
    development: function() {
      compileSass().then(function(css) {
        if (!!css) {
          writeFile(css);
        }
      });
    },
    production: function() {
      compileSass().then(function(css) {
        if (!!css) {
          css = minifyCSS(css);
          writeFile(css);
        }
      });
    },
    staging: function() {
      var sourceMap = true;
      compileSass(sourceMap).then(function(css) {
        if (!!css) {
          css = minifyCSS(css);
          writeFile(css);          
        }
      });
    }
  };
})();

module.exports = CompileSass;
