
var canvas_main=document.getElementById('mainCanvas');
var ctx_main = canvas_main.getContext("2d");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var totscore=0;
var canvas1 = document.getElementById("myCanvas1");
var ctx1 = canvas1.getContext("2d");
var canvas3 = document.getElementById("myCanvas3");
var ctx3 = canvas3.getContext("2d");
var cl1,cl2;
var dcx=0;var dcy=0;var dcx1=0;var dcx2=0;var dcy1=0;var dcy2=0;
var coin=0;
var ctx2 = canvas1.getContext("2d");
var lc1=parseInt(localStorage.getItem("left"));
var lc2=parseInt(localStorage.getItem("right"));
var image = new Image();
var drawlayer=false;
brkBrkScoreObj = window.localStorage;
var scoreList=localStorage.getItem('scoresList');
var highScore=0;
if(scoreList != undefined){
var scoreList = scoreList.split(",").map(Number);
var highScore=scoreList[0];
}
var count=0;
var inte;
var x = canvas.width/2;
var y = canvas.height-35;
var brickRowCount=4;
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
var y1;
var totchecks=0;
var x1;
var y2;
var x2;
var y3;
var x3;
var firstLoad=1;
function setMbricks(){
y1=Math.floor((Math.random() * brickRowCount) + 1);
x1= Math.floor((Math.random() * brickColumnCount) + 1);
y2=Math.floor((Math.random() * brickRowCount) + 1);
x2= Math.floor((Math.random() * brickColumnCount) + 1);
y3=Math.floor((Math.random() * brickRowCount) + 1);
x3= Math.floor((Math.random() * brickColumnCount) + 1);
}
setMbricks();
var ballRadius = 10;
var paddleHeight = 20;
var paddleWidth = 90;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleOffset=1;
var rightPressed = false;
var leftPressed = false;
var bricks = [];
function initializeBricks(){
for(c=0; c<brickRowCount; c++) {
    bricks[c] = []; 
    for(r=0; r<brickColumnCount; r++) {
       bricks[c][r]={x:15+(brickWidth+9)*r,y:10+(brickHeight-5)*c,status:1,mb:0};
check=0;

    }
}}
initializeBricks();
function restartGame()
{        drawlayer=false;
        document.getElementById("back").style.display='none';
        document.getElementById("restart").style.display='none';
        setMbricks();
       scoreList=localStorage.getItem('scoresList');
if(scoreList != undefined){
scoreList = scoreList.split(",").map(Number);
highScore=scoreList[0];
}
        x = canvas.width/2;
        y = canvas.height-35;
        lives=3;
        times=1;
        status1=1;
        status2=1;
        status3=1;
         
         totscore=0;
         totchecks=0;
        check=0;
        dcx=0;dcy=0;dcx1=0;dcx2=0;dcy1=0;dcy2=0;
        coin=0;
      paddleX = (canvas.width-paddleWidth)/2;
      booster();
        draw();drawlives(lives);count=0;drawscore(0);
        initializeBricks();loadBricks();
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
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

function viewCanvas2() {
   document.getElementsByClassName('btn')[0].style.display='none';
   document.getElementsByClassName('btn')[1].style.display='none';
   document.getElementsByClassName('btn')[2].style.display='none';
   document.getElementsByClassName('btn')[3].style.display='none';
   document.getElementById('mainCanvas').style.display='none';
   document.getElementById('submit').style.display='block';   
   document.getElementById('myCanvas2').style.display='block'; 

   document.getElementById('myCanvas3').style.display='none'; 
   document.getElementById('left').style.display='block';
   document.getElementById('right').style.display='block';
   document.getElementById('ll1').style.display='block';
   document.getElementById('rl1').style.display='block';
   document.getElementById('backb').style.display='block';
   if(lc1!=null) 
   {
   var lcr1 = String.fromCharCode(lc1+32);
   document.getElementById('left').value=lcr1;
   }
   if( lc2!=null)
   {
   var lcr2 = String.fromCharCode(lc2+32);
   document.getElementById('right').value=lcr2;
   }
}
function viewCanvas4() {
   document.getElementsByClassName('btn')[0].style.display='none';
   document.getElementsByClassName('btn')[1].style.display='none';
   document.getElementsByClassName('btn')[2].style.display='none';
   document.getElementsByClassName('btn')[3].style.display='none';
   document.getElementById('title').style.display='none';
   document.getElementById('mainCanvas').style.display='none';
   document.getElementById('submit').style.display='none';   
   document.getElementById('myCanvas3').style.display='block'; 
   document.getElementById('backb').style.display='block';  
    ctx3.beginPath();
    ctx3.font = "15px Arial";
    ctx3.fillStyle = 'white';
    ctx3.fillText("*INSTRUCTIONS*", 170, 50);
    ctx3.fillText("CONTROLS:", 40, 70);
    ctx3.fillText("1. Use SPACE button to start moving the Ball which would hit Bricks.", 20, 100);
    ctx3.fillText("2. By Default you can use left/right arrows to move the Booster but you", 20, 120);
    ctx3.fillText("can also set your keys as your controls [ A to Z ].",35,140);
    ctx3.fillText("3. You get 3 chances per Game.", 20, 160);
    ctx3.fillText("4. Upon click on Start Game, you would be prompted to select the level", 20, 180);
    ctx3.fillText(" of the game(Easy/Medium/Hard).", 34, 200);
    ctx3.fillText("5. Speed of the moving Ball is in relation with game LEVEL Selection.", 20, 220);
    ctx3.fillText("POINTS:",40,270);
    ctx3.fillText("1. Hit a Brick would add 1 point to your score.",20,300);
    ctx3.fillText("2. Hit Magic Brick for the second time would score 1 point and ",20,320);
    ctx3.fillText("generates a moving golden coin for the first time.", 34, 340);
    ctx3.fillText("3. Hitting Magic brick for second time will break the other bricks ", 20, 360);
    ctx3.fillText("surrounding to it.", 35, 380);
    ctx3.fillText("4. Capturing the golden coin with booster would add 5 bonus",20,400);
    ctx3.fillText("points",35,420);
    ctx3.fillText("HAVE FUN!!",160,480);
    ctx3.closePath();
}
function savecontrol_left(event)
{
    CL1=event.keyCode;
}
function savecontrol_right(event)
{
    CL2=event.keyCode;
}
function savecontrol()
{
settings = window.localStorage;
localStorage.setItem("left",CL1);
localStorage.setItem("right",CL2);
document.getElementsByClassName('btn')[1].style.display='none';
}
function saveLevel(){
    document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
    var level=document.querySelector('input[name=radio]:checked').id;
    if(level=='radio1')
    {
        dx=1.2;
        dy=-1.2;
        paddleOffset=1;
        brickRowCount =4;
        initializeBricks();
    }
    if(level=='radio2')
    {
        dx=1.7;
        dy=-1.7;
        paddleOffset=2;
        brickRowCount = 5;
         initializeBricks();
    }
    if(level=='radio3')
    {
        dx=2.2;
        dy=-2.2;
        paddleOffset=3;
        brickRowCount = 6;
         initializeBricks();
    }
   document.getElementById('levelCanvas').style.display='none'; 
   document.getElementById('title').style.display='none';
   document.getElementsByClassName('btn')[4].style.display='none';
   document.getElementById('levelMenu').style.display='none';
 viewCanvas();
}
function keyDownHandler(e) {
    if(e.keyCode == 32) {
    if(times==1){
        drawlayer=false;
        document.getElementById("back").style.display='none';
        document.getElementById("restart").style.display='none';
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
        drawlayer=true;
        document.getElementById("back").style.display='block';
        document.getElementById("restart").style.display='block';
        ndx=dx;ndy=dy;
        dx=0;dy=0;
        times=1;
    }
}
  if(e.keyCode+32==lc2 ||e.keyCode == 39) {
    if(times==0)
        rightPressed = true;
    }
    else if(e.keyCode+32==lc1 || e.keyCode == 37) {
        if(times==0)
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode+32==lc2 ||e.keyCode == 39) {
        if(times==0)
        rightPressed = false;
    }
    else if(e.keyCode+32==lc1 || e.keyCode == 37) {
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
}
var drawlives=function(lives){
    ctx1.clearRect(0,0,500,40);
    ctx1.beginPath();
    ctx1.font = "16px Arial";
    ctx1.fillText("High Score:"+highScore,5, 23);
    //ctx1.clearRect(200,0,130,40);
    ctx1.closePath();
    ctx1.beginPath();
    ctx1.font = "16px Arial";
    ctx1.fillText("Level: "+paddleOffset, 210, 23);
    ctx1.closePath();
   // ctx1.clearRect(400,0,500,40);
    for(i=lives-1;i>=0;i--){  
    ctx1.beginPath();                //For drawing lives
    ctx1.arc(490-(i*25), 15, ballRadius, 0, Math.PI*2);
    var grd1 = ctx1.createRadialGradient(490-(i*25)-3,15-6,ballRadius,490-(i*25)-2,15-4,0);
    grd1.addColorStop(0.1,"#848484");
    grd1.addColorStop(1,"#F2F2F2");
    ctx1.fillStyle = grd1;
    ctx1.fill(); 
    ctx1.closePath();
}
}
function drawscore(count1){
    ctx1.clearRect(300,0,130,40);
    ctx1.beginPath();
    ctx1.font = "16px Arial";
     ctx1.fillStyle='red';
    ctx1.fillText("Score:"+(totscore+count), 350, 23);
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
                    if(coin==0){
                    dcx=bricks[c][r].x+15;
                    dcy=bricks[c][r].y;
                coin++;}
                   else if(coin==1){
                        dcx1=bricks[c][r].x+15;
                    dcy1=bricks[c][r].y
                    coin++;}
                   else if(coin==2){
                         dcx2=bricks[c][r].x+15;
                    dcy2=bricks[c][r].y
                                        coin++;}
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
                      totchecks=check+totchecks;
                      initializeBricks();
                      setMbricks();
                      totchecks=check+totchecks;
                      check=0;
                      totscore=totscore+(brickRowCount*brickColumnCount);
                      status1=1;
        status2=1;
        status3=1;
        count=0;
        coin=0;

                    /* ctx.beginPath();
                    ctx.font = "40px Arial";

                    ctx.fillText("Congrats!! You Won", 100, 300);
                    ctx.fillText("Bonus: "+(check*5), 170, 200);
                    updateScoresList(count);
                    ctx.closePath();
                    setTimeout(function(){clearInterval(inte);},1000);
                    setTimeout(function(){window.location.reload();},3000);*/
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
    if(dcx!=0||dcy!=0&&dcy+(ballRadius)!=canvas.height-paddleHeight+50&&status1==1)
      if(times==0 ){
    dropCoin(dcx,dcy++);
}
if(dcx1!=0||dcy1!=0&&dcy1+(ballRadius)!=canvas.height-paddleHeight+50&&status2==1)
    if(times==0)
dropCoin1(dcx1,dcy1++);
if(dcx2!=0||dcy2!=0&&dcy2+(ballRadius)!=canvas.height-paddleHeight+50&&status3==1)
 if(times==0) 
dropCoin2(dcx2,dcy2++);
    document.getElementById('backb').style.display='none';
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
    {   ctx.fillText("Score: "+(totscore+count), 170, 180);
        ctx.fillText("Game Over", 150, 280);
        ctx.fillText("Total Score:"+(totscore+count+((check+totchecks)*5)), 130, 330);
        ctx.fillText("Bonus: "+((check+totchecks)*5), 170, 230);
        updateScoresList(count+totscore);
        clearInterval(inte);
        document.removeEventListener("keydown", keyDownHandler, false);
        document.removeEventListener("keyup", keyUpHandler, false);
        times=1;
        times1=0;
        totchecks=0;
        totscore=0;
        count=0;
        check=0;
        dcx=0;dcy=0;dcx1=0;dcx2=0;dcy1=0;dcy2=0;
        coin=0;
        leftPressed = false;
        rightPressed = false;
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
    coinx=0;coiny=0;
    leftPressed = false;
    rightPressed = false;
    setTimeout(function(){draw();},2000);
}
}
}
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += paddleOffset;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= paddleOffset;
    }
    x += dx;
    y += dy;
    if(drawlayer==true)
    {
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 0, 500, 620);
    }
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
        leftPressed = false;
        rightPressed = false;
        setTimeout(function(){draw();drawlives(lives);drawscore(0);
        initializeBricks();loadBricks();},3000);
}
