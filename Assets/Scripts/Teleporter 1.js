#pragma strict
var teleportX : float;
var teleportY : float;

function OnTriggerEnter (other: Collider) {

	if (other.tag=="Player"){
		PlayerHealth.m.transform.position.x=teleportX;
		PlayerHealth.m.transform.position.y=teleportY;
	}
}

function Update () {

}