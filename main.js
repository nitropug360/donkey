var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

var roverx= 20;
var rovery=20;
var rh=70;
var rw=100;
var roveri="rover.png";
var bg="mars.jpg";

function ADD_images(){
ni= new Image();
ni.onload=uploadbg;
ni.src=bg;

ri= new Image();
ri.onload=uploadrover;
ri.src=roveri;

}
function uploadbg(){
    ctx.drawImage(ni,0,0,800,600);
}

function uploadrover(){
    ctx.drawImage(ri,roverx,rovery,rw,rh);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    var kp = e.keyCode;

    if (kp=="37"){
        left();
    }

    if (kp=="38"){
        up()
    }

    if (kp=="39"){
         right()
    }

    if (kp=="40"){
        down()
    }
    
}
function left(){
    if (roverx>0){
        roverx=roverx-10;
        uploadbg();
        uploadrover();  
    }
    
}
function right(){
    if (roverx<700){
        roverx=roverx+10;
        uploadbg();
        uploadrover();  
    }
    
}
function up(){
    if (rovery>0){
        rovery=rovery-10;
        uploadbg();
        uploadrover();  
    }
    
}function down(){
    if (rovery<530){
        rovery=rovery+10;
        uploadbg();
        uploadrover();  
    }
    
}