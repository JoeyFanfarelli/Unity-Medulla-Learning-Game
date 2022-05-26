#pragma strict

private var Xpos : float;
private var Ypos : float;
private var max : boolean;
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
	//SET THE MAX
	if(Vert){ //Vertical
		if(transform.position.y >= Ypos + maxAmount){
			max = true;
			
		} else if(transform.position.y <= Ypos){
			max = false;
		}	
	} else { //Horizontal
		if (transform.position.x >= Xpos + maxAmount){
			max = true;
			
			transform.localScale.x = X;

		} else if(transform.position.x <= Xpos){
			max = false;
			
			transform.localScale.x = -X;

		}
	}
	//MOVING THE PLATFORM
	if(Vert){ // Vertical movement
		if(!max){
			transform.position.y += step;
		} else {
			transform.position.y -= step;
		}
	} else { //Horizontal movement
		if(!max){ //If we haven't reached the max yet
			transform.position.x += step; //continue increasing distance on x axis, by step amount
		} else {
			transform.position.x -= step; //decrease distance on x axis, by step amount
		}
	}
}


