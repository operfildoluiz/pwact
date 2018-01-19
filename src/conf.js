var fs = require("fs")
var package = JSON.parse(fs.readFileSync('package.json', 'utf8'));

module.exports = {

    args: process.argv.slice(2),
    available_commands: [
        "init",
        "start",
        "cache",
        "icon"
    ],
    npm_name: package.name,
    npm_description: package.description || "Simple description"

}
