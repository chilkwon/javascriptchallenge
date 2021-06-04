
function clock(){
    const timeNode = document.querySelector('#clock');
    
    return setInterval(()=>{
        let date = new Date();
        let tick = date.toLocaleTimeString();
        timeNode.textContent = tick;
    });
    
}

clock();