var projectile : Rigidbody;
var speed = 10; //projectile speed
private var allowfire : boolean = true; //whether or not the player can shoot. Adds a cooldown between shots

function Update () {
	if ( Input.GetButton ("Fire1")&&(allowfire)) { //Press fire button, call Fire function
		Fire();
	}
}


function Fire(){
	var m:GameObject=GameObject.Find("MainChar"); //sets m to MainChar; Reference
	
			
	allowfire=false;	//Shooting cooldown
	var projectileStartPosition = m.transform.position; //Sets projectile start position
	projectileStartPosition.y += .4;

	clone = Instantiate(projectile, projectileStartPosition, m.transform.rotation); //creates new projectile

	
	if (m.transform.localScale.x > 0){ //Sets velocity and direction
		clone.velocity = new Vector3(speed,0,0);
		
	}else if(m.transform.localScale.x < 0){
		clone.velocity = new Vector3(-speed,0,0);
	
	}else{
		clone.velocity = new Vector3(speed,0,0);
	}
	
	Destroy (clone.gameObject, 0.3); //Removes the projectile from the scene
	yield WaitForSeconds(0.3); //Reduces firing speed
	allowfire=true; //Shooting enabled again

	
	
}