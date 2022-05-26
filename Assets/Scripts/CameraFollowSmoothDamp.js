//This script makes something follow a target. In this case, this will be dragged onto a camera.

var dampTime : float = 0.3; //offset from the viewport center to fix damping
private var velocity = Vector3.zero;
var target : Transform;



//function Update () { //every frame, follow whoever we're targeting
//	transform.position.x=target.transform.position.x; //transform position of object this is dragged onto, on x-axis
//	transform.position.y=target.transform.position.y+2; //Comment/Uncomment to transform y axis also
	
//}




 
function Update() {
   // if(target) {
       // var point : Vector3 = camera.WorldToViewportPoint(target.position);
       // var delta : Vector3 = target.position -
        //            camera.ViewportToWorldPoint(Vector3(0.5, 0.5, point.z));
     //   var destination : Vector3 = transform.position + delta;
       // transform.position = Vector3.SmoothDamp(transform.position, destination, 
        //                                        velocity, dampTime);
		transform.position.y = Mathf.Lerp(transform.position.y, target.transform.position.y, 1.0f * Time.deltaTime);
		transform.position.x=target.transform.position.x; //transform position of object this is dragged onto, on x-axis

   // }
}




