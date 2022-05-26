function OnTriggerEnter (other: Collider) {
	if (other.tag=="Player"){
		PlayerHealth.Decrease(); //Calls function that does damage to player and makes him invulnerable

	}
}

