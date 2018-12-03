var socket = require('socket.io-client')('https://christmastreeserver-zjuuldfyoz.now.sh/');
const rpio = require('rpio');

rpio.open(16, rpio.OUTPUT, rpio.LOW); // make sure it is off

socket.on('connect', () => { console.log('connected' )});

socket.on('on', () => { 
  // console.log('on');
  rpio.write(16, rpio.HIGH);
});

socket.on('off', () => { 
  // console.log('off');
  rpio.write(16, rpio.LOW); 
});