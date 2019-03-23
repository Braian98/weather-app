const argv = require('yargs')
            .options({
                city: {
                    demand: true,
                    alias: 'c',
                    default: ''
                }
            })
            .help()
            .argv;

module.exports = {
    argv
}