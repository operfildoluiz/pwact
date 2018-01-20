#! /usr/bin/env node
var conf = require("./src/conf")


if (!conf.args[0] || !conf.available_commands.includes(conf.args[0])) {

    console.log('[ERR]' , conf.args[0], ": Command not available")
    return false
}

else if (conf.args[0] == "help") {

    if (!conf.args[1]) {

        console.log('All available commands:\n');
        conf.help.forEach(function(com){
            let helplog = require('./src/commands/help')(com);

        })
    }

    else {

        var com = conf.help.filter( obj => obj.command == conf.args[1])[0];
        let helplog = require('./src/commands/help')(com);

    }

    return true;
}

else {

    let res = require("./src/commands/" + conf.args[0])
    return true
}
