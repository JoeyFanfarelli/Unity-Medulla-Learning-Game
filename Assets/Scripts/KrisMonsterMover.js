#pragma strict

//Mover vars
private var Xpos : float;
private var Ypos : float;
private var max : boolean;
var Vert : boolean;
var maxAmount : int;
var step : float;
var X : float;
var direction: float;

//Range from Player vars
var moveSpeed = 3; //move speed
//var rotationSpeed = 3; //speed of turning
var range : float=10f;
//var range2 : float=10f;
//var stop : float=0;
var myTransform : Transform; //current transform data of this enemy
var target : Transform;
//var smoothTime = 1;
private var thisTransform : Transform;
private var velocity : Vector2;




function Start () {
	Xpos = transform.position.x;
	Ypos = transform.position.y;
	X = transform.localScale.x;
	
	thisTransform = transform;
}


function Awake()
{
    myTransform = transform; //cache transform data for easy access/preformance
}



function Update () {
	
	direction = transform.position.x - PlayerHealth.m.transform.position.x;
	

	
	if (PlayerHealth.brainClickEnabled == false){
	    var distance = Vector3.Distance(myTransform.position, target.position);
	
		if(distance<=range){
		 	
		 	
		 	if (direction < 0){
				transform.localScale.x = -X;
			
			}else if(direction > 0){
				transform.localScale.x = X;
				
			}else{
				transform.localScale.x = -X;
			}
	    
	    }else{
	    
	    	
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
 	}
	
	
}


