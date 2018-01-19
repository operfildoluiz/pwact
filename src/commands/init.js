var prompt = require('syncprompt')
var fs = require("fs")
var conf = require("../conf")

var project = {}

project.version = "0.1"
project.package_name = prompt('Package name (e.g.: ' + conf.npm_name + '): ') || conf.npm_name
project.name = prompt('Project Name (e.g: My Project): ') || conf.npm_name
project.short_name = prompt('App Name (e.g: MyProject): ') || conf.npm_name
project.description = prompt('Application description (e.g.: ' + conf.npm_description + '): ') || conf.npm_description
project.lang = prompt('Application language (e.g.: en): ') || 'en'
project.color = prompt('Application color (e.g.: #DADADA): ') || '#DDD'
project.files = ["manifest.json","service-worker.js","pwa.js"]

var start = prompt('Start basic PWA? (yes/no): ') || 'no'

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
