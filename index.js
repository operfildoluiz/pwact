#! /usr/bin/env node
var conf = require("./src/conf")


if (!conf.args[0] || !conf.available_commands.includes(conf.args[0])) {

    console.log('[ERR]' , conf.args[0], ": Command not available")
    return false
}


else if (conf.args[0] == "init") {

    let project = require("./src/commands/init")
    return true

}

else if (conf.args[0] == "start") {

    let start = require("./src/commands/start")
    return true

}

else if (conf.args[0] == "cache") {

    let cache = require("./src/commands/cache")
    return true

}
