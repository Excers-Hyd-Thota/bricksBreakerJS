var getScoresList = function() {
  document.getElementsByClassName('btn')[0].style.display='none';
   document.getElementsByClassName('btn')[1].style.display='none';
   document.getElementsByClassName('btn')[2].style.display='none';
   document.getElementsByClassName('btn')[3].style.display='none';
   document.getElementById("mainCanvas").style.display='none';

   document.getElementById("dispScoreCanvas").style.display='block';
   document.getElementById('backb').style.display='block';

 brkBrkScoreObj = window.localStorage;
// Check browser support
if (typeof(brkBrkScoreObj) !== "undefined") {
   //Get the current scores from Array
  var scoreList = localStorage.getItem("scoresList");
  if(scoreList == null){
    var dispCanvas=document.getElementById("dispScoreCanvas");
    var dispScoreCanvas=dispCanvas.getContext("2d");    
    dispScoreCanvas.beginPath();
    dispScoreCanvas.font = "20px Arial";
    dispScoreCanvas.fillStyle = 'white';
    dispScoreCanvas.textAlign = "center";
    dispScoreCanvas.fillText("Scores are not available, start playing!", 250, 300);
    dispScoreCanvas.closePath();}
 if(scoreList != null){  
  var scoreList = scoreList.split(",").map(Number);
    // Retrieve
    var scoreHtml = "<table border='2' height='100px' width=300px id='score_table'><th>High Scores</th>";
    for (var i = 0; i < scoreList.length; i++) {
        scoreHtml+="<tr>";
        scoreHtml+="<td>"+scoreList[i]+"</td>";
        scoreHtml+="</tr>";
    }
    scoreHtml+="</table>";
document.getElementById("scoreList").innerHTML = scoreHtml;
   }
} else {
    var dispCanvas=document.getElementById("dispScoreCanvas");
    var dispScoreCanvas=dispCanvas.getContext("2d");    
    dispScoreCanvas.beginPath();
    dispScoreCanvas.font = "20px Arial";
    dispScoreCanvas.fillStyle = 'white';
    dispScoreCanvas.textAlign = "center";
    dispScoreCanvas.fillText("Not able to get the Scores. Suported Browsers are Google Chrome, Mozilla Firefox, IE 11", 250, 300);
    dispScoreCanvas.closePath();
  }
}