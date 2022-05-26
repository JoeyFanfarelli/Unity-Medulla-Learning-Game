#pragma strict

function OnTriggerEnter (other:Collider) {

	if (other.tag=="Player"){
		var transFilter:GameObject=GameObject.Find("TransparencyFilter");
			if(transFilter.renderer.enabled == true){
				transFilter.renderer.enabled = false;
				collider.enabled = false;
			}else{
				transFilter.renderer.enabled = true;
				collider.enabled = false;
			}
	}
}



