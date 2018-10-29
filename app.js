console.log("Plain Hello");
const chalk = require('chalk');
 /////////////////////////////////////////
console.log(chalk.blue('Blue Hello world!'));
/////////////////////////////////////////

const chalkAnimation = require('chalk-animation');

setTimeout(() => { chalkAnimation.rainbow('Hello World Rainbow', 0.5) }, 1000);

