var fs = require("fs")
var conf = require("../conf")
var project = JSON.parse(fs.readFileSync('pwact.json', 'utf8'));
var prompt = require('syncprompt')

var reset_cache = prompt('Reset cache files (set default paths to cache system)? (yes/no | default: no): ') || 'no'

if (reset_cache == "yes" || reset_cache == "y") {

    project.version = "0.1";
    project.files = [
        project.paths.manifest,
        project.paths.worker,
        project.paths.pwa
    ]
}

var create_index = prompt('Create new index.html (yes/no | default: no): ') || 'no'

if (create_index == "yes" || create_index == "y") {

    fs.readFile("./node_modules/pwact/src/dump/index.html.pwact", 'utf8', function (err,data) {

        if (err) {
            return console.log(err);
        }

        var result = data
                        .replace(/{{lang}}/g, project.lang)
                        .replace(/{{name}}/g, project.name)
                        .replace(/{{description}}/g, project.description)
                        .replace(/{{color}}/g, project.color)
                        .replace(/{{p_pwa}}/g, conf.paths.pwa)
                        .replace(/{{p_manifest}}/g, conf.paths.manifest)
                        .replace(/{{p_icon}}/g, conf.paths.icon)

        fs.writeFile("index.html", result, 'utf8', function (err) {

            if(err) {
                return console.log(err);
            }

            console.log("[PWAct]", "index.html set");
        });
    });
}

fs.readFile("./node_modules/pwact/src/dump/manifest.json.pwact", 'utf8', function (err,data) {

    if (err) {
        return console.log(err);
    }

    var result = data
                    .replace(/{{lang}}/g, project.lang)
                    .replace(/{{name}}/g, project.name)
                    .replace(/{{short_name}}/g, project.short_name)
                    .replace(/{{description}}/g, project.description)
                    .replace(/{{color}}/g, project.color)
                    .replace(/{{p_icon}}/g, conf.paths.icon)

    fs.writeFile(conf.paths.manifest, result, 'utf8', function (err) {

        if(err) {
            return console.log(err);
        }

        console.log("[PWAct]", conf.paths.manifest + " set");
    });
});



fs.readFile("./node_modules/pwact/src/dump/pwa.js.pwact", 'utf8', function (err,data) {

    if (err) {
        return console.log(err);
    }

    var result = data
                    .replace(/{{p_worker}}/g, conf.paths.worker)

    fs.writeFile(conf.paths.pwa, result, 'utf8', function (err) {

        if(err) {
            return console.log(err);
        }

        console.log("[PWAct]", conf.paths.pwa + " set");
    });
});

fs.readFile("./node_modules/pwact/src/dump/service-worker.js.pwact", 'utf8', function (err,data) {

    if (err) {
        return console.log(err);
    }

    var result = data
                    .replace(/{{files}}/g, JSON.stringify(project.files,null,2))
                    .replace(/{{package_version}}/g, project.package_name + "-v" + project.version)

    fs.writeFile(conf.paths.worker, result, 'utf8', function (err) {

        if(err) {
            return console.log(err);
        }

        console.log("[PWAct]", conf.paths.worker + " set");
    });
});

console.log("[PWAct]","Basic PWA started!");

module.exports = project
