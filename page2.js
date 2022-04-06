img="";
Status="";
objects=[];
function setup(){
 canvas= createCanvas(640,420);
 canvas.center();

 model=ml5.objectDetector("cocossd",modelLoaded);
 document.getElementById("status").innerHTML="Status- Detecting image..."
}
function modelLoaded(){
    console.log("Model loaded");
    Status=true;
     model.detect(img,gotResults);
}
function preload(){
    img=loadImage("bedroom.jpg");
}
function gotResults(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;
}
function draw(){
    image(img,0,0,640,420);
    if (Status !=""){
        for(var i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status- Object detected";
            fill('#021666');
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            textSize(15);
            noFill();
            stroke('#021666');
            strokeWeight(2);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            }
        }
    }
   

