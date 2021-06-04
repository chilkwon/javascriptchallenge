

function coffeeDate(coffeeArr){
  
    let totalCoffee = coffeeArr.reduce(
        (totalcoffes, numCoffes)=> (totalcoffes += numCoffes)        
    );
    return `The total bill is $${totalCoffee*1.25}`;
}
console.log(coffeeDate([2,5,7,1,4]));