var fs = require("fs")
var project = JSON.parse(fs.readFileSync('pwact.json', 'utf8'));

fs.readFile("./node_modules/pwact/src/dump/index.html.pwact", 'utf8', function (err,data) {

    if (err) {
        return console.log(err);
    }

    var result = data
                    .replace(/{{lang}}/g, project.lang)
                    .replace(/{{name}}/g, project.name)
                    .replace(/{{description}}/g, project.description)
                    .replace(/{{color}}/g, project.color)

    fs.writeFile("index.html", result, 'utf8', function (err) {

        if(err) {
            return console.log(err);
        }

        console.log("[PWAct]", "index.html set");
    });
});


fs.readFile("./node_modules/pwact/src/dump/pwa.js.pwact", 'utf8', function (err,data) {

    if (err) {
        return console.log(err);
    }

    fs.writeFile("pwa.js", data, 'utf8', function (err) {

        if(err) {
            return console.log(err);
        }

        console.log("[PWAct]", "pwa.js set");
    });
});

fs.readFile("./node_modules/pwact/src/dump/service-worker.js.pwact", 'utf8', function (err,data) {

    if (err) {
        return console.log(err);
    }

    var result = data
                    .replace(/{{files}}/g, JSON.stringify(project.files,null,2))
                    .replace(/{{package_version}}/g, project.package_name + "-v" + project.version)

    fs.writeFile("service-worker.js", result, 'utf8', function (err) {

        if(err) {
            return console.log(err);
        }

        console.log("[PWAct]", "service-worker.js set");
    });
});

console.log("[PWAct]","Basic PWA started!");

module.exports = project
