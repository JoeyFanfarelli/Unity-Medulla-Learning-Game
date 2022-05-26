#pragma strict

private var Xpos : float;
private var Ypos : float;
var Vert : boolean;
var maxAmount : int;
var step : float;
var X : float;




function Start () {
	Xpos = transform.position.x;
	Ypos = transform.position.y;
	X = transform.localScale.x;
}


function Update () {

			transform.position.x -= step; //continue increasing distance on x axis, by step amount

}


