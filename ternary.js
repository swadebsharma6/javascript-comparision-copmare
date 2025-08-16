
const age = 10;

// if(age >= 18){
//       console.log('You can Vote')
// }
// else{
//       console.log('Basay jaw, ghumiye thako')
// }



// Ternary Operator
age >= 18 ? console.log('You can Vote'): console.log('Basay Jaw, gumaw');

// Question-2

let price = 500;
const isLeader = true;

// if(isLeader === true){
//       price = 0;
// }
// else{
//       price = price + 100
// }

// console.log('Restlt of Price', price);

price = isLeader === true ?  0 : price + 100;
console.log('ternary price', price)
