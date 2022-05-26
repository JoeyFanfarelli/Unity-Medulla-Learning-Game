#pragma strict

private var Xpos : float;
private var Ypos : float;
var Vert : boolean;
var maxAmount : int;
var step : float;
var left : boolean;
var X : float;




function Start () {
	Xpos = transform.position.x;
	Ypos = transform.position.y;
	X = transform.localScale.x;
}


function Update () {
	if (left){
		transform.position.x += step; //continue increasing distance on x axis, by step amount
	}else if (!left){
		transform.position.x -= step; //continue increasing distance on x axis, by step amount
	}
	
	
}


