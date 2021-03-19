const AudioRecorder = require ('osx-audio');
const fs = require('fs');
 
function myFunc(input) {
input= new AudioRecorder.Input();
const writable = fs.createWriteStream('output.wav');
input.pipe(writable);
}

setTimeout(myFunc, 1500, 'time');