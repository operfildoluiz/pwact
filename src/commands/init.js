var prompt = require('syncprompt')
var fs = require("fs")

var project = {
    name: null,
    short_name: null,
    package_name: null
}

project.name = prompt('Application name (e.g: My Project): ')
project.short_name = prompt('Short Name (e.g: MyProject): ')
project.package_name = prompt('Package name (e.g.: myproject): ')


fs.writeFile("pwact.json", JSON.stringify(project, null, 2), function(err) {

    if(err) {

        return console.log(err);
    }

    console.log("[PWAct]","Configuration file set!");
});

module.exports = project
