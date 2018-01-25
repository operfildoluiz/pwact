var conf = require("../conf")
var fs = require("fs")
var sharp = require('sharp')
var mkdirp = require('mkdirp');
var project = JSON.parse(fs.readFileSync('pwact.json', 'utf8'));

if (!conf.args[1]) {

    console.log("[PWAct]", "You must pass a image_path to resize.");
}

else {

    if (!fs.existsSync(conf.paths.icon)){
        mkdirp(conf.paths.icon, function (err) {

        if (err)
            console.log('[PWAct]', err);

        else
            console.log('[PWAct]', 'Icon path created: ' + conf.paths.icon)

        });
    }


    let base = "./"
    var file = base + conf.args[1]

    let ranges = ["72","96","128","144","152","192","384","512"];

    ranges.forEach(function(dimension){

        sharp(file)
        .resize(parseInt(dimension), parseInt(dimension))
        .toFile(conf.paths.icon + '/icon-'+dimension+'x'+dimension+'.png', function(err) {

            if (err != null)
                console.log('[PWAct]', err);
            else
                console.log('[PWAct]', 'Icon '+dimension+'px created');
        });

    })


}


module.exports = project
