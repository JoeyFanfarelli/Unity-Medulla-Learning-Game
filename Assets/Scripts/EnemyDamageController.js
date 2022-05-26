var Health = 10; //EnemyHealth

function OnTriggerEnter (other: Collider) {
	if (other.tag=="Brainwave"){ //Brainwave is the projectile
		var bw:GameObject=GameObject.Find("playerProjectile");
		
		Health--; //Reduce health of enemy
		Destroy (GameObject.FindWithTag("Brainwave")); //Destroys projectile
		PlayerHealth.score = PlayerHealth.score + 125; //Increases score
	}
	if (other.tag=="Player"){
		PlayerHealth.Decrease(); //Calls function that does damage to player and makes him invulnerable

	}
}

function Update(){
	if (Health <=0){ //If enemy health is zero or less, destroy enemy
		AchievementWatcher.KilledEnemyInLevel = true;
		AchievementWatcher.EnemiesKilled = AchievementWatcher.EnemiesKilled + 1;

		if (AchievementWatcher.EnemiesKilled == 1 && AchievementWatcher.KillOne == false){
			AchievementWatcher.KillOne = true;
			AchievementWatcher.CurrentAchievementText = "Lucky Shot";
			AchievementWatcher.notify = true;
		}else if (AchievementWatcher.EnemiesKilled == 10 && AchievementWatcher.KillTen == false){
			AchievementWatcher.KillTen = true;
			AchievementWatcher.CurrentAchievementText = "Warrior";
			AchievementWatcher.notify = true;
		}else if (AchievementWatcher.EnemiesKilled == 50 && AchievementWatcher.KillFifty == false){
			AchievementWatcher.KillFifty = true;
			AchievementWatcher.CurrentAchievementText = "Feared";
			AchievementWatcher.notify = true;
		}
		
		Destroy(gameObject);
	}
}
