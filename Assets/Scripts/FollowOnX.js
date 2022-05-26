//This script makes something follow a target. In this case, this will be dragged onto a camera.

var target:GameObject;



function Update () { //every frame, follow whoever we're targeting
	transform.position.x=target.transform.position.x; //transform position of object this is dragged onto, on x-axis
	transform.position.y=target.transform.position.y+2; //Comment/Uncomment to transform y axis also
	
}


