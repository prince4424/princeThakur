function namste(message) {
    return function(name){
         return name + ' ' + message;
    }
 }
 let sayHi = namste('Sir Namste');
 let sayHello = namste('sir namaskar');
 
 console.log(sayHi('Prince')); 
 console.log(sayHello('nitin')); 
 console.log(sayHi(' Arpit'));