/*var fs = require('fs');
var rs = fs.createReadStream('C:/Users/ahmed.kotb/VSCodeProjects/NodeJS_Training_Project/public/index.html');
rs.on('open', function () {
  console.log('The file is open');
});*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create scream event handler:
var screamEventHandler = function () {
  console.log('I hear a scream!');
}

//Create sing event handler:
var singEventHandler = function () {
    console.log('I hear a song!');
  }

//Assign the scream event handler to scream event:
eventEmitter.on('scream', screamEventHandler);

//Assign the sing event handler to sing event:
eventEmitter.on('sing', singEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

//Fire the 'sing' event:
eventEmitter.emit('sing');