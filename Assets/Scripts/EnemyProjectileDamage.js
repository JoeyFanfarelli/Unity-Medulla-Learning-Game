#pragma strict

function OnTriggerEnter (other: Collider) {
	if (other.tag=="Player"){
		Destroy(gameObject);
		PlayerHealth.Decrease(); //Calls function that does damage to player and makes him invulnerable
		PlayerHealth.m.transform.rotation = Quaternion.Euler(90.0, 180.0, 0.0); //Lock player's rotation
	}
	if (other.tag=="Enemy" && other.gameObject.name != "KrisMonster"){
		Destroy(gameObject);
	}
}

function Update () {

}

