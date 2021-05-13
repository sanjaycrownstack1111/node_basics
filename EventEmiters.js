const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1 , num2) =>{            // listen
    console.log('event has occured succesfully');
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial',10,1);     // publish



class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}


let perdo = new Person('Pedro');
let sanjay = new Person('sanjay');

sanjay.on('name', () =>{
    console.log('my name is '+sanjay.name);
})

perdo.on('name', () =>{
    console.log('my name is '+perdo.name);
});

perdo.emit('name');
sanjay.emit('name');