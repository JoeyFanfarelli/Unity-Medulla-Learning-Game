var gravity : boolean;
var gravityModifier : float;
var speed : boolean;
var speedModifier : float;

function OnTriggerEnter (other: Collider) {
	if (other.tag=="Player"){
		if (gravity){
			CharController2D.gravity = gravityModifier;
		}
		if (speed){
			CharController2D.runSpeed = speedModifier;
		}
	}
}