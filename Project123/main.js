noseX =0;
noseY = 0;
difference = 0;
RightWristX=0;
LeftWristX=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(550,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background("pink");
    document.getElementById('font_size').innerHTML = "Font Size is "+difference;
    textSize(noseY,noseX,difference);
    fill('red');
    stroke('blue');
    text('Akshat',100,300);
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX= "+noseX+" NoseY= "+noseY);
        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);
        console.log("Right Wrist = "+RightWristX+" Left Wrist = "+LeftWristX+" difference = "+difference);
    }
}