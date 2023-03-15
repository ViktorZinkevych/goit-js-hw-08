import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player);
player.on('timeupdate', throttle(function(data){
    localStorage.setItem('videoplayer-current-time', data.seconds);
},1000)
);

const saveTime = localStorage.getItem("videoplayer-current-time");
console.log(saveTime);
const timeStop = JSON.parse(saveTime);
console.log(timeStop);
player.setCurrentTime(timeStop)
.then(function(time){})
.catch(function(error){
    switch(error.name){
        case 'RangeError':
           
            break;

        default: break;
    }
});
