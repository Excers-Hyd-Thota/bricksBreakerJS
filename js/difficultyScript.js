var coinx=0;
var coiny=0;
var status1=1;
var status2=1;
var status3=1;
var coinScore=0;
var check=0;
	var img = document.getElementById("coin");
function viewCanvas3(){
	document.getElementsByClassName('btn')[0].style.display='none';
   document.getElementsByClassName('btn')[1].style.display='none';
   document.getElementsByClassName('btn')[2].style.display='none';
   document.getElementsByClassName('btn')[3].style.display='none';
   document.getElementById('title').style.display='none';
   document.getElementsByClassName('btn')[4].style.display='block';
   document.getElementById('mainCanvas').style.display='none';  
   document.getElementById('myCanvas3').style.display='none';
   document.getElementById('myCanvas2').style.display='none';
   document.getElementById('levelCanvas').style.display='block';
   document.getElementById('levelMenu').style.display='block'; 
   document.getElementById('backb').style.display='block';
}
function dropCoin(coinx,coiny){
	if(status1==1){
    ctx.drawImage(img, coinx, coiny+50);
    console.log(count+ 'count before if');
    if((coinx>paddleX&&coinx<paddleX+paddleWidth)&&(coiny+(ballRadius)==canvas.height-paddleHeight+50))
    	{status1=0;check++;}}

}
function dropCoin1(coinx,coiny){
	if(status2==1){
    ctx.drawImage(img, coinx, coiny+50);
    if((coinx>paddleX&&coinx<paddleX+paddleWidth)&&(coiny+ballRadius==canvas.height-paddleHeight+50)){
    status2=0;check++;}}

}
function dropCoin2(coinx,coiny){
	if(status3==1){
    ctx.drawImage(img, coinx, coiny+50);
    if((coinx>paddleX&&coinx<paddleX+paddleWidth)&&(coiny+ballRadius==canvas.height-paddleHeight+50))
   { status3=0;check++;}}

}