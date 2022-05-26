var moveSpeed = 3; //move speed
var rotationSpeed = 3; //speed of turning
var range : float=10f;
var range2 : float=10f;
var stop : float=0;
var myTransform : Transform; //current transform data of this enemy
var target : Transform;
var smoothTime = 1;
private var thisTransform : Transform;
private var velocity : Vector2;

function Awake()
{
    myTransform = transform; //cache transform data for easy access/preformance
}
 
function Start()
{
     
     thisTransform = transform;
 
}
 
function Update () {
   
   if (PlayerHealth.brainClickEnabled == false){
	    var distance = Vector3.Distance(myTransform.position, target.position);
	   
	 
	 
	    if(distance<=range){
	 		thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, 
			target.position.x, velocity.x, smoothTime);
			thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, 
			target.position.y, velocity.y, smoothTime);
	    
	    }
 	}
 
}