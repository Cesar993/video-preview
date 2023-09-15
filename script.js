
function over(element) {
    element.muted = true;
    element.currentTime = 6;
    element.play();
    element.addEventListener('timeupdate', function(){
        var time = element.currentTime;
        
         if (element.currentTime >= 10) {
             element.currentTime = 6; 
         } 
    })
}

function out(element){
    element.pause();
    element.load();
}
