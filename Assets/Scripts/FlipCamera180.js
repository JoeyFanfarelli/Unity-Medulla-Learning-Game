#pragma strict

function OnTriggerEnter (other:Collider) {

	if (other.tag=="Player"){
		var cam:GameObject=GameObject.Find("Main Camera");
			if(cam.transform.rotation.eulerAngles.z > 170 && cam.transform.rotation.eulerAngles.z<190){
				cam.transform.eulerAngles = Vector3(0.0,0);
				collider.enabled = false;
			}else{
				cam.transform.eulerAngles = Vector3(0,0,180); //Comment/Uncomment to flip world
				collider.enabled = false;
			}
	}
}



