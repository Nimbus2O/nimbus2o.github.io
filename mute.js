function toggleMute() {

  var video=document.getElementById("haku_video");

  if(video.muted){
    video.muted = false;
  } else {
    debugger;
    video.muted = true;
    video.play()
  }

}

$(document).ready(function(){
  setTimeout(toggleMute,3000);
})
