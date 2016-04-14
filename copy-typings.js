var mk = require('safe-mkdir');

mk.mkdir('./typings/modules');

var gc = require('glob-copy');

gc('./node_modules/aurelia-*/dist/system/*.d.ts', './typings/modules',
    function(err, files)
    { console.log("copied " + files.length + " files to ./typings/modules");}
);