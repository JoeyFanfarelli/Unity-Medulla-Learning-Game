#pragma strict

function OnTriggerEnter (other:Collider) {

	if (other.tag=="Player"){
		
			if (PlayerHealth.m.transform.localScale.x > 0){
				PlayerHealth.m.transform.position.x = PlayerHealth.m.transform.position.x - 3;
				collider.enabled = false;
		
			}else if(PlayerHealth.m.transform.localScale.x < 0){
				PlayerHealth.m.transform.position.x = PlayerHealth.m.transform.position.x + 3;
				collider.enabled = false;
	
			}else{
				PlayerHealth.m.transform.position.x = PlayerHealth.m.transform.position.x - 3;
				collider.enabled = false;
			}
			PlayerHealth.Invulnerable();
	}
}



