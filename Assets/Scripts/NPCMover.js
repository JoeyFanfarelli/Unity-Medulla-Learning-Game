#pragma strict

private var Xpos : float;
private var Ypos : float;
private var max : boolean;
var Vert : boolean;
var negative : boolean;
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
		if (!negative){
			if(transform.position.y >= Ypos + maxAmount){
				max = true;
			} else if(transform.position.y <= Ypos){
				max = false;
			}	
		} else if (negative){
			if(transform.position.y <= Ypos - maxAmount){
				max = true;
			} else if(transform.position.y >= Ypos){
				max = false;
			}	
		}
	} else { //Horizontal
		if (!negative){
			if (transform.position.x >= Xpos + maxAmount){
				max = true;

			} else if(transform.position.x <= Xpos){
				max = false;

			}
		} else if (negative){
			if (transform.position.x <= Xpos - maxAmount){
				max = true;

			} else if(transform.position.x >= Xpos){
				max = false;

			}
		}
		
	}
	//MOVING THE PLATFORM
	if(Vert){ // Vertical movement
		if (!negative){
			if (!max){
				//destination = transform.position.y + step;
				transform.position.y = Mathf.Lerp(transform.position.y, transform.position.y+step, 5.0f * Time.deltaTime);
			} 
		} else if (negative){
			//destination = transform.position.y - step;
			if (!max){
				transform.position.y = Mathf.Lerp(transform.position.y, transform.position.y-step, 5.0f * Time.deltaTime);
			}
		}
		
	} else { //Horizontal movement
		if (!negative){
			if (!max){
				//destination = transform.position.y + step;
				transform.position.x = Mathf.Lerp(transform.position.x, transform.position.x+step, 5.0f * Time.deltaTime);
			} 
		}else if (negative){
			//destination = transform.position.y - step;
			if (!max){
				transform.position.x = Mathf.Lerp(transform.position.x, transform.position.x-step, 5.0f * Time.deltaTime);
			}
		}
	}
}