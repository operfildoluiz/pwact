#! /usr/bin/env node
var conf = require("./src/conf")


if (!conf.args[0] || !conf.available_commands.includes(conf.args[0])) {

    console.log('[ERR]' , conf.args[0], ": Command not available")
    return false
}

else {

    let res = require("./src/commands/" + conf.args[0])
    return true
}
