var shootingCooldown= 1.0;
var speed = 10;
var projectile : Rigidbody;
var allowfire : boolean = true;
var direction;


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
			direction = transform.position.x - PlayerHealth.m.transform.position.x;
			EnemyFire();

		}
	}
}

function EnemyFire(){
	var projectileStartPosition = transform.position; //Sets projectile start position
	projectileStartPosition.y += .4;
		

	clone = Instantiate(projectile, projectileStartPosition, transform.rotation); //creates new projectile
	clone.transform.rotation = Quaternion.Euler(270,0,0);

	Debug.Log("direction " + direction);	
	if (direction < 0){
		clone.velocity = new Vector3(speed,0,0);
			
	}else if(direction > 0){
		clone.velocity = new Vector3(-speed,0,0);
		
	}else{
		clone.velocity = new Vector3(speed,0,0);
	}
		
	allowfire = false;
	Destroy (clone.gameObject, 2.0); //Removes the projectile from the scene
	yield WaitForSeconds(2.0); //Reduces firing speed
	allowfire=true; //Shooting enabled again
}