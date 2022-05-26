#pragma strict

private var Xpos : float;
private var Ypos : float;
private var max : boolean;
var Vert : boolean;
var maxAmount : int;
var step : float;
var offset: float;





function Start () {
	Xpos = transform.position.x;
	Ypos = transform.position.y;
	transform.position.y = transform.position.y + offset;
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

		} else if(transform.position.x <= Xpos){
			max = false;

		}
	}
	//MOVING THE PLATFORM
	if(Vert){ // Vertical movement
		if(!max){
			//destination = transform.position.y + step;
			transform.position.y = Mathf.Lerp(transform.position.y, transform.position.y+step, 5.0f * Time.deltaTime);
		} else {
			//destination = transform.position.y - step;
			transform.position.y = Mathf.Lerp(transform.position.y, transform.position.y-step, 5.0f * Time.deltaTime);
		}
	} else { //Horizontal movement
		if(!max){ //If we haven't reached the max yet
			transform.position.x += step; //continue increasing distance on x axis, by step amount
		} else {
			transform.position.x -= step; //decrease distance on x axis, by step amount
		}
	}
}