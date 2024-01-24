const fs = require('fs');
const path = require('path');
const fullPath = path.join(__dirname, 'text.txt');

const { stdin, stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

stdout.write('This app writes a console input into a file. Please enter any text:\n');

rl.on('line', (data) => {
  if (data.toString().trim() === 'exit') {
    rl.close();
  }
  fs.appendFile(fullPath, data + '\n', (err) => {
    if (err) throw err;
  });
});

rl.on('close', () => {
  stdout.write(`\nYour input (if entered) has been written into 'text.txt'. Goodbye!\n`);
  process.exit();
});

rl.on('SIGINT', () => {
  stdout.write(`\n'Ctrl + C' has been pressed. Closing the session.\n`);
  process.exit();
  }
);