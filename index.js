let randomNumber = Math.random();
let results = '';

if(randomNumber >=0 && randomNumber < 0.5){
  results = 'heads';
}else if(randomNumber >= 0.5 && randomNumber < 1){
  results = 'tails'
}

let guess = results ;
if(results === 'heads'){
   console.log('You win')
} else{
  console.log('You lose')
}

//lessson 7 functions


// Document object models

// we can also make specific keyboards key perform some functions
//eg
// we can say if event.key === 'Enter it should
//perform some some task

// tp ake sure youre getting a value out of an input 
// we should make sure we are using Number() an then the value in the brackets

// type corceion
// if a string only contains a number and subsstracts multiply and divide it would convert that string into a number and perform the math operation
// But if the math operation  is a + and a string is added to  a number it would convert the number into a string and then concatenate it or merge it together
// best practices is to do maths using numbers not strings