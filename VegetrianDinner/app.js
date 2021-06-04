



// console.log(vegeterainDish);

function vegetarianMenu(menu){
    const menuNode = document.querySelector('#menu');
    const vegeterainDish = menu.filter((data) => data.vegetarian == true);
    vegeterainDish.forEach((item)=>{
        let dish = document.createElement('li');
        dish.textContent = item.name;
               
        menuNode.appendChild(dish);
    });

}
const menu =[
    {
        name:"Eggplant Parmesan",
        vegetarian:true
    },
    {
        name:"Spaghetti&Meatballs",
        vegetarian:false
    
    },
    {
       name:"bean",
       vegetarian:true
    }
];
vegetarianMenu(menu);