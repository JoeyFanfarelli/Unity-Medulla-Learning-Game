var shootingCooldown= 1.0;
var speed = 10;
var projectile : Rigidbody;
var allowfire : boolean = true;
var direction;
var dropDelay : float;
var dropDestroyTime : float;
var redMaterial : Material;
var greenMaterial : Material;


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



function Start(){
	thisTransform = transform;
}


function Update(){
	var distance = Vector3.Distance(myTransform.position, target.position);
	
	if(distance<=range){		
	
		if (allowfire == true){
			EnemyFire();

		}
	}
}



function EnemyFire(){
	
	var projectileStartPosition = transform.position; //Sets projectile start position
	projectileStartPosition.y -= 1;
	

	
	renderer.material = greenMaterial;

	
	clone = Instantiate(projectile, projectileStartPosition, transform.rotation); //creates new projectile

	
	clone.velocity = new Vector3(0,-speed,0);
			
	

	
	allowfire = false;
	renderer.material = redMaterial;
	Destroy (clone.gameObject, dropDestroyTime); //Removes the projectile from the scene
	yield WaitForSeconds(dropDelay); //Reduces firing speed
	allowfire=true; //Shooting enabled again
}




