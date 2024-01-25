const fs = require('fs');
const nodemailer = require('nodemailer');
const chalk = require('chalk');


// Read setup configuration from setup.txt file
const setupConfig = fs.readFileSync('setup.txt', 'utf8');
const setupLines = setupConfig.split('\n').map(line => line.trim());
const smtpOptions = {
  host: setupLines[0],
  port: setupLines[1],
  secure: setupLines[2] === 'true',
  auth: {
    user: setupLines[3],
    pass: setupLines[4],
  },
};
const senderName = setupLines[5];
const senderEmail = setupLines[6];
const subject = setupLines[7];

// Create a transporter
const transporter = nodemailer.createTransport(smtpOptions);

// Read email addresses from leads.txt file
const leads = fs.readFileSync('leads.txt', 'utf8').split('\n').map(line => line.trim());

// Read message content from letter.txt or letter.html file
const messageContent = fs.readFileSync('letter.html', 'utf8'); // Change to 'letter.html'

// Function to send email
function sendEmail(to, subject, message) {
  const mailOptions = {
    from: `"${senderName}" <${senderEmail}>`,
    to: to,
    subject: subject,
    html: message, // Change to HTML format
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(chalk.red(`❌ Email sent to ${to} - Error: ${error}`));
      console.log(chalk.yellow(`┌───────────────────────┐`));
      console.log(chalk.red(`│ EMAIL SENT: Error ❌         │`));
      console.log(chalk.yellow(`│ FROM: ${senderName}   │`));
      console.log(chalk.yellow.bold(`│ CODER NAME: xxxwealthxx │`));
      console.log(chalk.yellow(`└───────────────────────┘`));
    } else {
      console.log(chalk.green(`✅ Email sent to ${to}`));
      console.log(chalk.yellow(`┌───────────────────────┐`));
      console.log(chalk.green(`│ EMAIL SENT: Successful ✅         │`));
      console.log(chalk.yellow(`│ FROM: ${senderName}   │`));
      console.log(chalk.yellow.bold(`│ CODER NAME: xxxwealthxx │`));
      console.log(chalk.yellow(`└───────────────────────┘`));
    }
  });
}

// Send email to all leads
console.log(chalk.yellow.bold('💌 Sending emails... 💌\n'));
leads.forEach((email, index) => {
  setTimeout(() => {
    const progressBar = `[${'='.repeat((index + 1) % 10)}>${' '.repeat(9 - (index + 1) % 10)}]`;
    
    sendEmail(email, subject, messageContent);
  }, (index + 1) * 1000); // Delay each email by 1 second for better visualization
});