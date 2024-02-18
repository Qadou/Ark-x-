const EventEmitter = require('events');

// Create an event emitter instance
const eventEmitter = new EventEmitter();

// // Register the event handler for the custom event
// eventEmitter.on('abdou',  (data) => {
//     console.log('Event occurred:', data);
//   });

// // Simulate an event occurrence
// eventEmitter.emit('abdou', 'Event data');

// eventEmitter.on("ark x",() =>{
//     console.log('hello arkadian');
// })
// eventEmitter.emit('ark x');


eventEmitter.on("test", (a,b)=>{
  console.log('this is the result : ',a+b);

});
eventEmitter.emit('test',4,3);