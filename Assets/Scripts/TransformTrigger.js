var variableMaterial : Material;

var shootingEnabled: boolean;


function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		PlayerHealth.m.renderer.material = variableMaterial;
		if (AchievementWatcher.IsMinion == true){
			AchievementWatcher.IsMinion = false;
		}else if (AchievementWatcher.IsMinion == false){
			AchievementWatcher.IsMinion = true;
		}
		
		if (shootingEnabled == false){
			PlayerHealth.pShooting.enabled = false;
		}
		if (shootingEnabled){
			PlayerHealth.pShooting.enabled = true;
		}
	}
	
	
}




