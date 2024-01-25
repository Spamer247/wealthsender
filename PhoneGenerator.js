const readline = require('readline');
const { spawn } = require('child_process');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(chalk.yellow('------------------------------------------'));
console.log(chalk.yellow('           Wealth Priv8 Tools             '));
console.log(chalk.yellow('------------------------------------------'));

console.log(chalk.green('Welcome Back! Kindly Choose a Tool to Work On:'));
console.log(chalk.cyan('1. SMS Sender'));
console.log(chalk.cyan('2. Email Sender'));
console.log(chalk.cyan('3. Phone Number Generator'));
console.log(chalk.cyan('4. Phone Number Validator'));

rl.question(chalk.yellow('Enter your choice (1, 2, 3, or 4): '), (option) => {
  if (option === '1') {
    console.log(chalk.yellow('Running SMS Sender...'));
    const smsSender = spawn('node', ['SMSsender.js'], { stdio: 'inherit' });
    smsSender.on('close', (code) => {
      console.log(chalk.green('SMS Sender execution complete'));
      rl.close();
    });
  } else if (option === '2') {
    console.log(chalk.yellow('Running Email Sender...'));
    const emailSender = spawn('node', ['Emailsender.js'], { stdio: 'inherit' });
    emailSender.on('close', (code) => {
      console.log(chalk.green('Email Sender execution complete'));
      rl.close();
    });
  } else if (option === '3') {
    console.log(chalk.yellow('Running Phone Number Generator...'));
    const phoneGenerator = spawn('node', ['PhoneGenerator.js'], { stdio: 'inherit' });
    phoneGenerator.on('close', (code) => {
      console.log(chalk.green('Phone Number Generator execution complete'));
      rl.close();
    });
  } else if (option === '4') {
    console.log(chalk.yellow('Running Phone Number Validator...'));
    const phoneValidator = spawn('node', ['PhoneValidator.js'], { stdio: 'inherit' });
    phoneValidator.on('close', (code) => {
      console.log(chalk.green('Phone Number Validator execution complete'));
      rl.close();
    });
  } else {
    console.log(chalk.red('Invalid option. Please choose either 1, 2, 3, or 4.'));
    rl.close();
  }
});