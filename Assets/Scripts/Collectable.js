//Sets trigger to object it is dragged onto. Will create an explosion and remove the object from the scene

//var explosion:GameObject;
var collectorEmitter:ParticleSystem;


function OnTriggerEnter(theObject:Collider){
	if(theObject.gameObject.name=="MainChar"){ //Collides with main character
	
	PlayerHealth.score = PlayerHealth.score + 75;
	
	//var newExplosion:GameObject=Instantiate(explosion,transform.position,transform.rotation); //make new instance of object
	collectorEmitter.Play();
	Destroy(gameObject);
	
	}
	
}