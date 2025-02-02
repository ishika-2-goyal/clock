const secondHand=document.querySelector(".seconnd-hand");
const minHand=document.querySelector(".min-hand");
const hourHand=document.querySelector(".hour-hand");
function setDate(){
    const currentTime=new Date();
    
    const seconds=current.getSeconds();
    const secondDeg=((seconds/60)*360)+90;
    secondHand.Style.transform=`rotate(${secondDeg}deg);`

    const mins=current.getMinutes();
    const minsDeg=((mins/60)*360)+90;
    minHand.Style.transform=`rotate(${minsDeg}deg);`

    const hours=current.getHours();
    const hoursDeg=((hours/12)*360)+90;
    hourHand.Style.transform=`rotate(${hoursDeg}deg);`

    if(seconds==0){
        secondHand.Style.transitionDuration='0s';
        minHand.Style.transitionDuration='0s';
        hourHand.Style.transitionDuration='0s';
    }
    else{
        secondHand.Style.transitionDuration='0.05s';
        minHand.Style.transitionDuration='0.05s';
        hourHand.Style.transitionDuration='0.05s';
    }
    requestAnimationFrame(setDate);
}
setDate();