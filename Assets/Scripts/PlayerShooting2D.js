var projectile : Rigidbody;
var speed = 10;
private var allowfire : boolean = true;

function Update () {
	if ( Input.GetButton ("Fire1")&&(allowfire)) {
		Fire();
	}
}


function Fire(){
		
	allowfire=false;	
	var projectileStartPosition = transform.position;
	projectileStartPosition.y +=1.8;

	clone = Instantiate(projectile, projectileStartPosition, transform.rotation);
	clone.velocity = transform.TransformDirection( Vector3 (0, 0, speed));
	Destroy (clone.gameObject, 0.3); //Removes the projectile from the scene
	yield WaitForSeconds(0.3); //Reduces firing speed
	allowfire=true;

	
	
}