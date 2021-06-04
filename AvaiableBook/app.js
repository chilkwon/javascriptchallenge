// function Book(title,author,ISBN,numCopies){
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }


// Book.prototype.getAvailability = function(){
//     if(this.numCopies == 0){
//         return 'out of stock';
//     }else if(this.numCopies < 10){
//         return 'Low Stock';
//     }
//     return 'In Stock';
// }

// Book.prototype.sell = function(numCopiesSold = 1){
//     this.numCopies -=numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStocked = 5){
//     this.numCopies +=numCopiesStocked;
// }

class Book{
 constructor(title,author,ISBN,numCopies){
     this.title = title;
     this.author = author;
     this.ISBN = ISBN;
     this.numCopies = numCopies;
 }
 get availability(){
     return this.getAvailability();
 }
 getAvailability(){
     if(this.numCopies === 0){
         return "Out of stock";
     }else if(this.numCopies < 10){
         return "Low Stock";
     }
     return "in Stock";

 }   
 sell(numCopiesSold = 1){
     this.numCopies -=numCopiesSold;
 }
 restock(numCopiesRestocked = 5){
     this.numCopies += numCopiesRestocked;
 }
}

const HungerGames = new Book("Hunger game","suzanne collins", 12345, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());

