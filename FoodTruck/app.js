
function  selectedMenu(menuArray){
    const menu = menuArray.flat();
    const combinedMenu = new Set();
 
    menu.forEach(item =>{
        combinedMenu.add(item);
    });
    console.log(combinedMenu);
    const menuNode = document.querySelector('#combined-menu');
    for(let item of combinedMenu){
        let foodNode = document.createElement('li');
        foodNode.innerHTML = item;
        menuNode.appendChild(foodNode);

    }

}

selectedMenu([["pizza","burger"],["pizza","spagetti","burger"],["jabchae","ricesoup"]]);

