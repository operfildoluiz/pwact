var prompt = require('syncprompt')
var fs = require("fs")

var project = {}

project.version = "1.0";
project.files = ["manifest.json","service-worker.js","pwa.js"];
project.package_name = prompt('Package name (e.g.: myproject): ')
project.name = prompt('Application name (e.g: My Project): ')
project.short_name = prompt('App Name (e.g: MyProject): ')
project.description = prompt('Application description (e.g.: My Project is just an example): ')
project.lang = prompt('Application language (e.g.: en): ')

var start = prompt('Start basic PWA? (yes/no): ')

fs.writeFileSync("pwact.json", JSON.stringify(project, null, 2), function(err) {

    if(err) {

        return console.log(err);
    }

    console.log("[PWAct]","Configuration file set!");
});

if (start == "yes" || start == "y") {

    let start = require("./start")

}

module.exports = project
