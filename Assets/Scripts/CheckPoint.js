#pragma strict

function OnTriggerEnter (other: Collider) {
	
	if(other.tag == "Player") {
		var gameController = FindObjectOfType(typeof(GameController));
		gameController.startX = transform.position.x;
		gameController.startY = transform.position.y;
		collider.enabled = false; //Might need to be capital C
	}
}