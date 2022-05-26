function OnCollisionEnter (other: Collision) {
	if (other.tag=="Enemy"){
		Destroy(gameObject);
	}
}



