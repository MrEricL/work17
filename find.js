var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


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
  console.log(dis)
  if (dis==0){
  	box.style.backgroundColor="#FF0000";
  }
  

};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);
