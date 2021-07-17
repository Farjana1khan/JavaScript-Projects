//function for loop
// function fortable(){
//       for(let i =1; i<=10; i++){
//        document.write(`2 x ${i} = ${2*i}`)
//      document.write('<br>')
// }
// document.write('<br>')
// }

// fortable();

// function for loop using num
// function fortable(num){
//       for(let i =1; i<=10; i++){
//        document.write(`${num} x ${i} = ${num * i}`)
//      document.write('<br>')
// }
// document.write('<br>')
// }

// fortable(4);

function add() {

  if (arguments.length == 0) {

    console.log(" no argument pass");
  } 
  else
   {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    console.log(sum);

  }

  }
 
let addition = add 

add(2, 5);
addition(4, 6, 8);
