const ora = require('ora');

const spinner = ora();

spinner.spinner = {
    "interval": 80,
    "frames": [
        "⠋",
        "⠙",
        "⠹",
        "⠸",
        "⠼",
        "⠴",
        "⠦",
        "⠧",
        "⠇",
        "⠏"
    ]
};

spinner.color = 'green';

spinner.text = 'Loading';

module.exports = spinner;