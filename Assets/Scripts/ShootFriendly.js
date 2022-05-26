function OnTriggerEnter (other: Collider) {
	if (other.tag=="Brainwave"){ //Brainwave is the projectile
		var bw:GameObject=GameObject.Find("playerProjectile");
		
		if (AchievementWatcher.Violent == false){
			AchievementWatcher.Violent = true;
			AchievementWatcher.CurrentAchievementText = "Violent";
			AchievementWatcher.notify = true;
		}
		Destroy (GameObject.FindWithTag("Brainwave")); //Destroys projectile

	}

}