const text= 'Write JavaScript code to control the speed of the text appearing on the screen. Write JavaScript code to control the speed of the text appearing on the screen.'
const change= document.getElementById('change');
const slate= document.getElementById('slate');

let index=0;
let timeoutId;

function changeSpeed(){
    if(index < text.length)
    {
        slate.innerHTML= slate.innerHTML+ text.charAt(index)
        index++;
    }

    let speed= change.value;

    clearTimeout(timeoutId); 
    //You may want to clear the timeout before setting a new one. 
    //This way, when the speed is changed, the previous timeouts won’t interfere with the new one.
    timeoutId= setTimeout(changeSpeed, 1000/speed);
    
}

change.addEventListener('change', changeSpeed)