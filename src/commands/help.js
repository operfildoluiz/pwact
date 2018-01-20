module.exports = (com) => {

    console.log('# pwact ' + com.command, ': ' + com.description);
    if (com.parameters.length > 0) {

        console.log('Parameters:');

        com.parameters.forEach(function(parameter) {

            console.log(
                '- ' + parameter.name,
                ': ' + parameter.description,
                );

            if (parameter.accepted && parameter.accepted.length > 0) console.log('Accepted values:', parameter.accepted);

            console.log('Example:' , parameter.example);

        })
    }

    console.log();

}
