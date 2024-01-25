const figlet = require('figlet');
const chalk = require('chalk');
const { spawn } = require('child_process');
const readline = require('readline');

const text = 'WEALTH * SENDER';

figlet.text(text, {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

    const colors = [chalk.red, chalk.green, chalk.yellow, chalk.blue, chalk.magenta, chalk.cyan];
    const bgColor = chalk.bgBlack;
    let output = '';

    data.split('\n').forEach((line, index) => {
        const color = colors[index % colors.length];
        const coloredLine = color(line);
        const bgColoredLine = bgColor(coloredLine);
        output += bgColoredLine + '\n';
    });

    console.log(output);

    console.log(chalk.blue('============================================================='));
    console.log(chalk.green('              *Wealth Priv8 Tools*             '));
    console.log(chalk.yellow.bold("  <------ EMAIL SENDER / SMTP2SMS SENDER ------>   "));
    console.log(chalk.yellow.bold("  <------  Coder Telegram: XXXWEALTHXX ------>   "));
    console.log(chalk.yellow.bold("   	    Coder Skype: +19042902790    "));
    console.log(chalk.blue('=============================================================='));

    console.log(chalk.white('\nWelcome Back! Kindly Choose a Tool to Work On:'));
	
	console.log(chalk.red('*********7%'));
	console.log(chalk.yellow('************************65%'));
	console.log(chalk.green('****************************************100%'));
    
	console.log(chalk.white('1. SMS Sender'));
    console.log(chalk.white('2. Email Sender'));
	
	console.log(chalk.yellow('*'));

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(chalk.red('Enter your choice (1 or 2): '), (option) => {
        if (option === '1') {
            console.log(chalk.green('Running SMS Sender...'));
            const smsSender = spawn('node', ['SMSsender.js'], { stdio: 'inherit' });
            smsSender.on('close', (code) => {
                console.log(chalk.green('SMS Sender execution complete'));
                rl.close();
            });
        } else if (option === '2') {
            console.log(chalk.green('Running Email Sender...'));
            const emailSender = spawn('node', ['Emailsender.js'], { stdio: 'inherit' });
            emailSender.on('close', (code) => {
                console.log(chalk.green('Email Sender execution complete'));
                rl.close();
            });
        } else {
            console.log(chalk.red('Invalid option. Please choose either 1 or 2.'));
            rl.close();
        }
    });
});