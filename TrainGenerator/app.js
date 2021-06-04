function* getStop(){
   yield "Poughkeepsie";
   yield "Newburgh";
   yield "Peekskill";
   yield "Yonkers";
   yield "Bronx";
   yield "GrandCentral";
}

const nystop = getStop();
const nextStopButton = document.querySelector('#next-stop');
nextStopButton.addEventListener("click",()=>{
    let currentStop = nystop.next();
    if(currentStop.done){
        console.log("We made it");
        nextStopButton.setAttribute("disabled",true);
    }else{
        console.log(currentStop.value);
    }
})
