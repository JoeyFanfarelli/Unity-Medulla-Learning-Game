#pragma strict

private var allowSpike : boolean = true; //variable to check wait time on spike
private var atBottom : boolean = true; //variable to check if spike is fully retracted
private var Xpos : float;
private var Ypos : float;
private var max : boolean;
var Vert : boolean;
var maxAmount : int;
var step : float;



function Start () {
	Xpos = transform.position.x;
	Ypos = transform.position.y;
	
}

function Update () {
	
	if (allowSpike){
		SpikeChecker();
	}
		
}

function SpikeChecker(){

	
		//SET THE MAX
		if(Vert){ //Vertical
			if(transform.position.y >= Ypos + maxAmount){ //checks to see if it has reached max y distance
				max = true;
			} else if(transform.position.y <= Ypos){
				max = false;
				atBottom = true;
			}	
		} else { //Horizontal
			if (transform.position.x >= Xpos + maxAmount){ //checks to see if it has reached max x distance
				max = true;
			} else if(transform.position.x <= Xpos){
				max = false;
				atBottom = true;
			}
		}
		//MOVING THE PLATFORM
		if(Vert){ // Vertical movement
			if(!max){
				transform.position.y += step; //not at max, keep going 
			} else {
				transform.position.y -= step; //at max, reverse direction
			}
		} else { //Horizontal movement
			if(!max){ //If we haven't reached the max yet
				transform.position.x += step; //continue increasing distance on x axis, by step amount
			} else {
				transform.position.x -= step; //decrease distance on x axis, by step amount
			}
		}
		
		if (atBottom){
			atBottom = false;
			allowSpike = false;
			yield WaitForSeconds(1.5); //waits
			allowSpike = true;
		}

}


