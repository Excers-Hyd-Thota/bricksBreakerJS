function updateScoresList(currScore) {
brkBrkScoreObj = window.localStorage;
  var flag=false;
// Check browser support
if (typeof(brkBrkScoreObj) !== "undefined") {
  var index = 'none';
 
  if(localStorage.getItem("scoresList") == null){
    localStorage.setItem("scoresList",[]);
  }
  var scoreList = localStorage.getItem("scoresList");
  var scoreList = scoreList.split(",").map(Number);

   if(scoreList.length != 0) {
    for (var i = 0; i < scoreList.length; i++) {
    if(currScore == scoreList[i]){
      flag=true;
      break;
      }
      }
  } 
  if(flag ==false){
  if(scoreList.length != 0) {
    for (var i = 0; i < scoreList.length; i++) {
		if(currScore > scoreList[i]){
			index=i;
			break;
			}
    }
  if(index!='none'){scoreList.splice(index, 0,currScore);}
	}
//If No scores are added, add the new item to array
	else{ scoreList.push(currScore);}
}
   //If length of the scores array is more than 5 delete the last item from array	
	if(scoreList.length > 5) {
		scoreList.pop();
	}
    console.log("brick breaker contains ", scoreList);	
    localStorage.setItem("brickbreakerScore", scoreList);
  
  localStorage.setItem("scoresList",scoreList);
}
 else {
    document.getElementById("scoreList").innerHTML = "Sorry, not able to get the Scores. Suported Browsers are Google Chrome, Mozilla Firefox, IE 11";
     }
}