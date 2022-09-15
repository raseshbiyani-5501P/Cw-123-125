nx = 0;
ny = 0;
lwx = 0;
rwx = 0;
diff = 0;


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


function modelLoaded(){

console.log('Model has been loaded');

}
function gotPoses(results){

if(results.length > 0){

    console.log(results);
    nx = results[0].pose.nose.x;
    ny = results[0].pose.nose.y;
    lwx = results[0].pose.leftWrist.x;
    rwx = results[0].pose.rightWrist.x;
    diff = floor(lwx - rwx);
    console.log(diff);
    

}

}
function draw(){

    document.getElementById("wandh").innerHTML = diff + " px ";
    background("green");
    fill("#e5937d");
    stroke("grey");
    square(nx, ny, diff);
    
    
    }