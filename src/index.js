const argv = require('./config/yargs').argv;
const chalk = require('chalk');
const spinner = require('./config/spinner');

const { getCoordinates, getTemperature } = require('./places');

const getInfo = async () => {
    spinner.start();
    const city = argv.city || undefined;
    const coordinates = await getCoordinates(city);
    spinner.succeed(chalk.green('OK!'));
    spinner.start();
    const temperature = await getTemperature(coordinates.lat, coordinates.lon, coordinates.name);
    spinner.succeed(chalk.green('OK!'));
    return chalk.bold.yellow(`The current temperature in ${city} is: ${temperature}°C`)
}

getInfo()
    .then(res => console.log(res))
    .catch(err => {
        spinner.fail(chalk.red('Fail :('));
        console.log(chalk.red(err))
    });