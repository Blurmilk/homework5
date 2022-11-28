// Add js here.
var myVideo = document.getElementById("videoplayer");
myVideo.loop = false;
myVideo.autoplay = false;

function playButton() {
    myVideo.play();
  }

function pauseButton() {
    myVideo.pause();
  }


// slow down
myVideo.addEventListener('click', slowDown);
function slowDown(){
    if (myVideo.playbackRate === 0.5){
        alert("Video is at slowest speed!");
 }
    else if (myVideo.playbackRate === 1){
        myVideo.playbackRate = 0.5;
}
    else if (myVideo.playbackRate === 2){
        myVideo.playbackRate = 1;
}
}

//speed up
myVideo.addEventListener('click', speedUp);
function speedUp(){
    if (myVideo.playbackRate === 2){
        alert("Video is at fastest speed!");
 }
    else if (myVideo.playbackRate === 1){
        myVideo.playbackRate = 2;
}
    else if (myVideo.playbackRate === 0.5){
        myVideo.playbackRate = 1;
}
}


/*skip 15 sec*/
function skip() {
    myVideo.currentTime = (myVideo.currentTime + 15);
  }

/*go back to the begin of the video*/
function goBack(){
    myVideo.currentTime = 0;

    /*if it is going back to the begin of the video and play again then turn on this line*/
    /*myVideo.play();*/
}

myVideo.addEventListener('ended', goBack);


/*mute/unmute*/
function mute(){
    if (myVideo.muted === false){
        myVideo.muted = true;
 }
    else {
        myVideo.muted = false;
}
};

var muteButton = document.getElementById('mute')
muteButton.onclick = mute

/*set volume*/
var volume = document.getElementById('slider')

var setVolume = function(){
    myVideo.volume = this.value / 100;
};

volume.addEventListener('change',setVolume);
volume.addEventListener('input',setVolume);


/*indicate volume number*/
myVideo.addEventListener("volumechange", volumeInfo);

function volumeInfo(){
    myVideo.volume
    let v = myVideo.volume; /*get volume value*/
    document.getElementById("volume").innerHTML = v; /*write volume value*/
}

myVideo.load();

