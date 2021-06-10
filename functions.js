/*function sayHello() {
    console.log("Hello!")
};

sayHello();

let sayGoodbye = function() {
    console.log("Goodbye!")
}

sayGoodbye();

function sayHello (parameter1, parameter2, parameter3) {
    console.log(parameter1, parameter2, parameter3);
};

sayHello('HELLO', 'My name is','Prisca');*/


function saySomething(message, whisper) { 

    if (whisper) {
    
        console.log('whisper');
    } else {
      
        console.log(message);
    }
    console.log('AHHH')
}
saySomething('random', true);
