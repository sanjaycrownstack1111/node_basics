
const sum = (num1,num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}

// module.exports = sum;

// module.exports.sum = sum;  //exporting individually
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

module.exports = {sum : sum, PI : PI, SomeMathObject : SomeMathObject }   //export object liteal