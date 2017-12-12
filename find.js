var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;
2

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  var dis = Math.sqrt(Math.pow((x1-x0),2)+Math.pow((y1-y0),2));
  return dis;
};


var findIt = function(e) {
  /* YOUR IMPLEMENTATION */
  var xpos = e.clientX;
  var ypos = e.clientY;
  var dis = distance(targetX,targetY,xpos,ypos);
  //console.log(xpos+","+ypos);
  if (dis==0){
  	box.style.backgroundColor="#FF0000";
  }
  

};

/*
your OTHER FXNS
*/

var maxDist = function(){
	var upleft = distance(targetX,targetY,0,0);
	var upright = distance(targetX,targetY,0,boxWidth);
	var botleft = distance(targetX,targetY,boxHeight,0);
	var botright = distance(targetX,targetY,boxHeight,boxWidth);
	return max(upleft,upright,botleft,botright);
};

box.addEventListener("mousemove", findIt);
