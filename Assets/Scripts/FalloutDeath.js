function OnTriggerEnter(theOther:Collider){
	if(theOther.gameObject.name=="MainChar"){
	
	GameController.die(); //call die  in game controller, if it is the mainchar
	}


}