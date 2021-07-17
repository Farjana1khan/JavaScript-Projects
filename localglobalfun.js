let result1 = 390;   //global variable

function add (){
  
      let result = 210;   //local variable
console.log(result);
}

console.log(result1);
console.log(result);   //here show error
add()
