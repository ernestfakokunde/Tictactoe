//Array
 const myArray = [0,1,2,3];

//


//Advanced functions
// Another way to loopthrough an array

 

// we use the foreach method
// to use the for each method it takes a function 
// and a parameter where the value is going to be stored

//eg

['make diner','was dishes','watch youtube'].forEach(function(value){
console.log(value);
});

let arr = ['make diner','was dishes','watch youtube'];

arr.forEach(function(value){
  console.log(value)
})
//Advancedn functions

//review
function greeting(){
  console.log('hello')
}
//call the function
greeting();

// A function is also a value an can be stored in a variable
//eg
const myfunction = function(){
  console.log('My world')
}
// the function can be called by calling the variable name
//just like calling a normal function

myfunction();
// it prints 'my world'
// Note the function does not not have a name
//it is called an anonymous function

//A function can aso be stored in an objects 
//eg
const object1 = {
  num: 2,
  fun: function greet(){
    console.log('This is a fun')
  }
}
//to call the function above it can be called using the dot notation
object1.fun();
// since it contains a function we can put the curly braces
// from the function we also dont need the name since there is a way  to access it

//values can aslo be passed into a function
//eg
function display(param){
  console.log(param)
};
//passing the value
display(34);
//it logs 34 to the console

// we can pass a function into another function
//eg

function run(param){
// the parameter param can be calleed because it contains a function
param()
}
//caling the function
run(function myfunc(){
  console.log('it works')
});

// Now the function we just passed is 
// called a callback function

//Settimeout : it allows run a function in the future

//eg

setTimeout(function(){
  console.log('timeout')
}, 5000)

//Setinterval: it is another built in function and takes in two paprameters
// the first is a function we want to run
//the second is the time to keep running the function

//eg
setInterval(function(){
  console.log('Hello world')
},3000)

//it runs the function above every 3 seconds

//note that setintarval always return a value. its like  id
