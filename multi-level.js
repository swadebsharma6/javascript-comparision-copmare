//  Multi level Conditions

const price = 3000;

if(price >= 5000){
      // 10% discount
      const discount = price * 10 /100;
      const pay = price - discount
      console.log('discount', discount);
      console.log('pay', pay);
}
else if(price > 2500){
      // discount 5%
      const discount = price * 5 /100;
      const pay = price - discount;
      console.log('5% dis..pay', pay)
      console.log('5% dis..', discount)

}
else{
      console.log('pay', price)
}