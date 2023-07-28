// const fs = require("fs");
// fs.writeFileSync("file.txt","Hello, How are You?");

// const sh = require("superheroes");
const chalk = require("chalk");

const log = console.log;
// log(chalk.blue('Hello') + ' world' + chalk.red('!'));
// log(chalk.blue.bgRed.bold('Hello World!'));
log(chalk.blue('I am a blue line  '
    + chalk.white.underline.bold('with white string ') +
    ' that become green again!'));