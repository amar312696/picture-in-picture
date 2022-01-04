
const vedioElement =document.getElementById('video');

const button=document.getElementById("button");

// prompt to select media stream ,pass to vedio element,then play

async function selectMediaStream(){
  try {
    // screen capture api
    const mediaStream =await navigator.mediaDevices.getDisplayMedia();
    vedioElement.srcObject=mediaStream;
    vedioElement.onloadedmetadata=() =>{
      vedioElement.play();
    }
    
  } catch (error) {
    //catch error here
    console.log('whoops,error here:',error)
    
  }
}

button.addEventListener('click', async ()=> {

  // disable the buttom 
  button.disabled =true;
  //start piture in picture
  await vedioElement.requestPictureInPicture();
  //reset button
  button.disabled=false;


});
//on load 
selectMediaStream();



