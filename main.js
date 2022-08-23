function preload(){}


function setup(){

canvas = createCanvas(500, 450);
canvas.center();
video = createCapture(VIDEO);
video.position(20 ,150);
video.size(250 ,300);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);

}

function draw(){

background("sea-green")

}

function modelLoaded(){

console.log('Model has been loaded');

}
function gotPoses(results){

if(results.length > 0){

    console.log(results);

}

}