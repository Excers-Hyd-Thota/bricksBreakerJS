
var canvas_main=document.getElementById('mainCanvas');
var ctx_main = canvas_main.getContext("2d");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvas1 = document.getElementById("myCanvas1");
var ctx1 = canvas1.getContext("2d");
var image = new Image();
var count=0;
var inte;
var x = canvas.width/2;
var y = canvas.height-35;
var brickRowCount = 4;
var brickColumnCount = 8;
var brickWidth = 50;
var brickHeight = 35;
var brickPadding = 1;
var brickOffsetTop = 1;
var brickOffsetLeft = 1;
var times=1;
var times1=0;
var ndx=0;
var ndy=0;
var dx = 1;
var dy = -1;
var lives=3;
var y1=Math.floor((Math.random() * 3) + 1);
var x1= Math.floor((Math.random() * 7) + 1);
var y2=Math.floor((Math.random() * 3) + 1);
var x2= Math.floor((Math.random() * 7) + 1);
var y3=Math.floor((Math.random() * 3) + 1);
var x3= Math.floor((Math.random() * 7) + 1);
var ballRadius = 10;
var paddleHeight = 20;
var paddleWidth = 90;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var bricks = [];
function initializeBricks(){
for(c=0; c<brickRowCount; c++) {
    bricks[c] = []; 
    for(r=0; r<brickColumnCount; r++) {
       bricks[c][r]={x:15+(brickWidth+9)*r,y:10+(brickHeight-5)*c,status:1,mb:0};

    }
}}
initializeBricks();
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function restartGame()
{
        document.getElementById("back").style.display='none';
        document.getElementById("restart").style.display='none';
        x = canvas.width/2;
        y = canvas.height-35;
        count=0;
        lives=3;
        times=1;
        console.log('lives gameover '+lives);
        draw();drawlives(lives);drawscore(0);
        initializeBricks();loadBricks();
}
function viewCanvas() {
   document.getElementsByClassName('btn')[0].style.display='none';
   document.getElementsByClassName('btn')[1].style.display='none';
   document.getElementsByClassName('btn')[2].style.display='none';
   document.getElementsByClassName('btn')[3].style.display='none';
   document.getElementById('mainCanvas').style.display='none';  
   document.getElementById('myCanvas').style.display='block';
    document.getElementById('myCanvas1').style.display='block';  
    draw();
    drawlives(lives);
    drawscore(count);
}
function saveLevel(){
    var level=document.querySelector('input[name=radio]:checked').id;
    if(level=='radio1')
    {
        dx=1;
        dy=-1;
    }
    if(level=='radio2')
    {
        dx=1.5;
        dy=-1.5;
    }
    if(level=='radio3')
    {
        dx=2;
        dy=-2;
    }
    console.log(dx+''+dy+'');
document.getElementsByClassName('btn')[0].style.display='block';
   document.getElementsByClassName('btn')[1].style.display='block';
   document.getElementsByClassName('btn')[2].style.display='block';
   document.getElementsByClassName('btn')[3].style.display='block';
   document.getElementById('mainCanvas').style.display='block';  
   document.getElementById('levelCanvas').style.display='none'; 
   document.getElementsByClassName('btn')[4].style.display='none';
   document.getElementById('levelMenu').style.display='none;'; 
console.log('done canvas');
}
function keyDownHandler(e) {
    if(e.keyCode == 32) {
        console.log(times);
        console.log('space pressed');
    if(times==1){
    if(ndx!=0||ndy!=0)
    {
        dx=ndx;
        dy=ndy;
    }
    if(times1==0)
    {
    inte= setInterval(draw,5);
    times1=1;
    }
    times=0;}
    else if(times==0)
    {
        ndx=dx;ndy=dy;
        dx=0;dy=0;
        times=1;
    }
}
  if(e.keyCode == 39) {
    if(times==0)
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        if(times==0)
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        if(times==0)
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        if(times==0)
        leftPressed = false;
    }
}

var loadBricks=function(){
ctx.beginPath();
for(j=0;j<brickRowCount;j++){
for(i=0;i<brickColumnCount;i++){

   if(bricks[j][i].status!=0)
    {
if(bricks[j][i].status==2){
ctx.beginPath();    
var img1 = document.getElementById("mbbrick");
ctx.drawImage(img1, bricks[j][i].x,bricks[j][i].y);
ctx.closePath();   
}
else if(i==x1 && j==y1 || i==x2 && j==y2 || i==x3 && j==y3)
{
bricks[j][i].mb=1;
ctx.beginPath();    
var img1 = document.getElementById("mbrick");
ctx.drawImage(img1, bricks[j][i].x,bricks[j][i].y);
ctx.closePath();
}

else
{
ctx.beginPath();    
var img1 = document.getElementById("brick");
ctx.drawImage(img1, bricks[j][i].x,bricks[j][i].y);
ctx.closePath();
}}
}}

ctx.closePath();
//console.log(bricks[1][1]);
}
var drawlives=function(lives){
    ctx1.clearRect(0,0,100,40);
    ctx1.beginPath();
    ctx1.font = "16px Arial";
    ctx1.fillText("High Score: 500",0, 23);
    ctx1.clearRect(300,0,130,40);
    ctx1.closePath();
    ctx1.beginPath();
    ctx1.font = "16px Arial";
    ctx1.fillText("Level: 1", 210, 23);
    ctx1.closePath();
    ctx1.clearRect(400,0,500,40);
    console.log('drawing lives'+lives);
    //ctx1.filltext("Lives Remaining");
    for(i=lives-1;i>=0;i--){  
    ctx1.beginPath();                //For drawing lives
    ctx1.arc(490-(i*25), 15, ballRadius, 0, Math.PI*2);
    var grd1 = ctx1.createRadialGradient(490-(i*25)-3,15-6,ballRadius,490-(i*25)-2,15-4,0);
    //var grd1 = ctx.createRadialGradient(7,4,10,8,6,0);
    grd1.addColorStop(0.1,"#848484");
    grd1.addColorStop(1,"#F2F2F2");
    ctx1.fillStyle = grd1;
    ctx1.fill(); 
    ctx1.closePath();
}
}
var drawscore=function(count){
    ctx1.clearRect(300,0,130,40);
    ctx1.beginPath();
    ctx1.font = "16px Arial";
    ctx1.fillText("Score:"+count, 350, 23);
    ctx1.closePath();
}
function collisionDetection() {
    count=0;
    for(c=0; c<brickRowCount; c++) {
        for(r=0; r<brickColumnCount; r++) {
        var b = bricks[c][r];
        if(b.status!=0)
             {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight)
                    //x-ballRadius == b.x+brickWidth)&& (y-ballRadius==b.y||y+ballRadius==b.y+brickHeight)) 
                {
                    dy = -dy;
                    if(bricks[c][r].mb==1&&bricks[c][r].status==1)
                    {
                    bricks[c][r].status = 2;
                }
                else
                   {

                    bricks[c][r].status=0;
                    if(bricks[c][r].mb==1)
                    {
                     try{ if(bricks[c+1][r].mb!=1){bricks[c+1][r].status=0;}}  catch(e){}
                      try{if(bricks[c-1][r].mb!=1){bricks[c-1][r].status=0;}} catch(e){}
                      try{if(bricks[c][r+1].mb!=1){bricks[c][r+1].status=0;}} catch(e){}
                      try{if(bricks[c][r-1].mb!=1){bricks[c][r-1].status=0;}} catch(e){}
                    }

                   }
                  
                }
            }
        }
    }
     for(i=0;i<brickRowCount;i++){                    
        for(j=0;j<brickColumnCount;j++){

                        if(bricks[i][j].status==0)
                            count++;
                       
                    }}
                     drawscore(count);
                    if(count== brickRowCount*brickColumnCount) {
                     ctx.beginPath();
                    ctx.font = "40px Arial";
                    ctx.fillText("Congrats!! You Won", 100, 300);
                    ctx.closePath();
                    setTimeout(function(){window.location.reload();},3000);
                    }
}
var booster=function(){
    var img = document.getElementById("booster");
    ctx.drawImage(img, paddleX, canvas.height-paddleHeight-5);
}
function drawBall() {
     ctx.beginPath();
    var grd = ctx.createRadialGradient(x-3,y-6,ballRadius,x-2,y-4,0);
    //var grd = ctx.createRadialGradient(7,4,10,8,6,0);
    grd.addColorStop(0.1,"#848484");
    grd.addColorStop(1,"#F2F2F2");
    ctx.fillStyle = grd;
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();
   
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    loadBricks();
    //drawlives(lives);
    drawBall();
      booster();
      collisionDetection();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -(dx);
    }
    if(y + dy < ballRadius) {
        dy = -(dy);
    }
   
         else if(y+dy+(2*ballRadius) > canvas.height-(ballRadius)) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy=-dy;
        if(x>paddleX&&x<(paddleX+(paddleWidth/3)))//touching left side of booster
        {
            if(dx>0) dx=-dx;
        }
        if(x<paddleX+paddleWidth&&x>paddleX+paddleWidth-(paddleWidth/3))
        {
           if(dx<0) dx=-dx; 
        }
    }
    else if(y>=canvas.height-(ballRadius)){
     clearInterval(inte);
     x = canvas.width/2;
     y = canvas.height-35;
     paddleX=((canvas.width-paddleWidth)/2)
    lives--;
    drawlives(lives);
    if(lives<1)
    {
        ctx.fillText("Game Over", 150, 300);
        ctx.fillText("Total Score:"+count, 130, 350);
        clearInterval(inte);
        times=1;
        times1=0;
        document.getElementById("back").style.display='block';
        
        document.getElementById("restart").style.display='block';

    }
    else if(lives>=1)
    {
    
    ctx.beginPath();
    ctx.font = "40px Arial";
    ctx.fillText("Lost the ball!!", 130, 300);
    ctx.closePath();
    times=1;
    times1=0;
    setTimeout(function(){draw();},2000);
}
}
}
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 1;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 1;
    }
    x += dx;
    y += dy;
}


if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX +=2;
}
else if(leftPressed && paddleX > 0) {
    paddleX -= 2;
}
function home(){
 window.location.reload();
}
function restart()
{
    x = canvas.width/2;
        y = canvas.height-35;
        count=0;
        lives=3;
        times=1;
        console.log('lives gameover '+lives);
        setTimeout(function(){draw();drawlives(lives);drawscore(0);
        initializeBricks();loadBricks();},3000);
}