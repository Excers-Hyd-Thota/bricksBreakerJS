if(x<paddleWidth/2) dy = -10;
        if(x>paddleWidth/2) dy = 10;
        else dy=-dy;





         else if(y + dy > canvas.height-ballRadius) {
    	if(x > paddleX && x < paddleX + paddleWidth) {
        if(x<paddleWidth/2){dy = -(dy-1);}
        if(x>paddleWidth/2) {dy = -(dy+1);}
        console.log('bumped the paddle');
    }



     else if(y + dy > canvas.height-ballRadius) {
    	if(x > paddleX && x < paddleX + paddleWidth) {
        if(x<paddleWidth/2){
            if(dx>0) dy=-dy-1;
        }
        if(x>paddleWidth/2) {dy = -(dy+1);}
        console.log('bumped the paddle');
    }



     ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();




    ctx.beginPath();
ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
ctx.fillStyle='green';
ctx.fill();
ctx.closePath();



ctx.rect(bricks[j][i].x,bricks[j][i].y, brickWidth, brickHeight);      
ctx.fillStyle = "#FFFF00";
ctx.fill();