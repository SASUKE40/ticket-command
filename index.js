const inquirer = require('inquirer');
const {generateSeat} = require('./src/index');

let sections = generateSeat();
console.log('====================================');
console.log('%j', sections);
console.log('====================================');
inquirer
  .prompt({name: 'ticketNumber', message: '请输入票数：'})
  .then(answer => {
    const {ticketNumber} = answer;
    console.log('====================================');
    console.log(ticketNumber);
    console.log('====================================');
  });
