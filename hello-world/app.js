console.log(`Starting app.js`);

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

// let user = os.userInfo();
// fs.appendFileSync('greeting.txt', `Hello ${user.username}. Your age is ${notes.age}`);

// var res = notes.addNote();
// console.log(res);

console.log('Result: ', notes.add(6,9));

