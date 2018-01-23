var fs = require("fs")
var conf = require("../conf")
var prompt = require('syncprompt')
var manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));

var prefer = prompt('Prefer related apps? (yes/no): ') || manifest.prefer_related_apps || false
var prefer_related_apps = false;


if (prefer == "yes" && prefer == "y") {

    prefer_related_apps = true;

}

var apps = manifest.related_apps || []

var ask = true
do {

    var app = {}

    app.platform = prompt('Platform (e.g.: play): ');
    app.url = prompt('URL (e.g.: https://play.google.com/store/apps/details?id=com.example.app1): ');
    app.id = prompt('ID of the app  (e.g.: com.example.app1): ');

    if (app.platform && app.url && app.id)
        apps.push(app)


    let add = prompt("Add another app? (yes/no) - Default: no") || 'no'
    if (add == "no")
        ask = false;

} while (ask == true)


manifest.prefer_related_apps = prefer_related_apps
manifest.related_apps = apps

fs.writeFile("manifest.json", JSON.stringify(manifest, null, 2), 'utf8', function (err) {

    if(err) {
        return console.log(err);
    }

    console.log("[PWAct]", "manifest.json updated");
});


module.exports = manifest
