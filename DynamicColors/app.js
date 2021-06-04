
// function makeBodyBlue(){
//     document.body.style.background="blue";
// }

// function makeBodyPink(){
//     document.body.style.background="pink";
// }

// function makeBodyGreen(){
//     document.body.style.background="green";
// }

function changeBackGroudColor(color){
    document.body.style.background = color;
}

function changeColor(color){
    return ()=>  document.body.style.background = color;
   
}
const blueColor = changeColor("blue");
const pinkColor = changeColor("pink");
const greenColor = changeColor("green");

// document.querySelector("#blue").addEventListener('click', ()=>changeBackGroudColor("blue"));
// document.querySelector("#pink").addEventListener('click', ()=>changeBackGroudColor("pink"));
// document.querySelector("#green").addEventListener('click', ()=>changeBackGroudColor("green"));


document.querySelector("#blue").addEventListener('click', blueColor);
document.querySelector("#pink").addEventListener('click', pinkColor);
document.querySelector("#green").addEventListener('click', greenColor);
