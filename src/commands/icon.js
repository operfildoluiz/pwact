var conf = require("../conf")
var fs = require("fs")
var sharp = require('sharp')
var project = JSON.parse(fs.readFileSync('pwact.json', 'utf8'));

if (!conf.args[1]) {

    console.log("[PWAct]", "You must pass a image_path to resize.");
}

else {

    if (!fs.existsSync('assets')){
        fs.mkdirSync('assets');
    }

    if (!fs.existsSync('assets/images')){
        fs.mkdirSync('assets/images');
    }

    if (!fs.existsSync('assets/images/icons')){
        fs.mkdirSync('assets/images/icons');
    }


    let base = "./"
    var file = base + conf.args[1]

    let ranges = ["72","96","128","144","152","192","384","512"];

    ranges.forEach(function(dimension){

        sharp(file)
        .resize(parseInt(dimension), parseInt(dimension))
        .toFile('assets/images/icons/icon-'+dimension+'x'+dimension+'.png', function(err) {

            if (err != null)
                console.log('[PWAct]', err);
            else
                console.log('[PWAct]', 'Icon '+dimension+'px created');
        });

    })


}


module.exports = project
