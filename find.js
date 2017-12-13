var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
//var targetX = boxWidth / 2;
//var targetY = boxHeight / 2;

var targetX = Math.random()*boxWidth;
var targetY = Math.random()*boxHeight;

console.log(targetX+","+targetY);



console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  var dis = Math.sqrt(Math.pow((x1-x0),2)+Math.pow((y1-y0),2));
  return dis;
};



//Max Dist
var maxDist = function(){
	var upleft = distance(targetX,targetY,0,0);
	var upright = distance(targetX,targetY,0,boxWidth);
	var botleft = distance(targetX,targetY,boxHeight,0);
	var botright = distance(targetX,targetY,boxHeight,boxWidth);
	return Math.max(upleft,upright,botleft,botright);
};
var maxD = maxDist();
//console.log(maxD);




var findIt = function(e) {
	var xpos = e.clientX;
	var ypos = e.clientY;
	var dis = distance(targetX,targetY,xpos,ypos);

	var colorNumb = Math.floor((255/maxD)*(maxD-dis))

	//Red
	//box.style.backgroundColor="rgb("+colorNumb+",0,0"+")";
	//Greyscale
	//box.style.backgroundColor="rgb("+colorNumb+","+colorNumb+","+colorNumb+")";
	//Purple
	box.style.backgroundColor="rgb("+colorNumb+",0,"+colorNumb+")";
  

};

/*
your OTHER FXNS
*/



box.addEventListener("mousemove", findIt);

