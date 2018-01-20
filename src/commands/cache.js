var fs = require("fs")
var conf = require("../conf")
var project = JSON.parse(fs.readFileSync('pwact.json', 'utf8'));

if(!conf.args[1]){
    console.log("[PWAct]", "You must pass a file to cache");
}

else {

    var file = conf.args[1]

    project.version = parseFloat(parseFloat(project.version) + 0.1).toFixed(1);

    if (!project.files.includes(file)) {

        project.files.push(file)
    }


    fs.writeFileSync("pwact.json", JSON.stringify(project, null, 2), function(err) {

        if(err) {

            return console.log(err);
        }

        console.log("[PWAct]","Configuration file updated!");
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

            console.log("[PWAct]", "service-worker.js updated!");
        });
    });


}



module.exports = project
