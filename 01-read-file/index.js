const path = require('path');
const fs = require('fs');

const fullPath = path.join(__dirname, 'text.txt');
const readableStream = fs.createReadStream(fullPath, 'utf-8');

readableStream.on('readable', () => {
  let data = readableStream.read();
  if (data !== null) {
    console.log(data);
  }
});