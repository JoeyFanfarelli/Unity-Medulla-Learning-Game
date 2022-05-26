#pragma strict

var GUIEndBonus:GUIText;


function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		
		AchievementWatcher.BeatLevelOne = true;
		AchievementWatcher.CurrentAchievementText = "Savior of Motor Cortex";
		AchievementWatcher.notify = true;
		if (PlayerHealth.countDown > 300 && AchievementWatcher.TimeTraveler == false){
			AchievementWatcher.TimeTraveler = true;
			AchievementWatcher.CurrentAchievementText = "Time Traveler";
			AchievementWatcher.notify = true;
		}
		if (AchievementWatcher.CuredAllInLevel == true && AchievementWatcher.CureAll == false){
			AchievementWatcher.CureAll = true;
			AchievementWatcher.CurrentAchievementText = "Caring";
			AchievementWatcher.notify = true;
		}
		if (AchievementWatcher.DiedInLevel == false && AchievementWatcher.Invincible == false){
			AchievementWatcher.Invincible = true;
			AchievementWatcher.CurrentAchievementText = "Invincible";
			AchievementWatcher.notify = true;
		}
		if (AchievementWatcher.KilledEnemyInLevel == false && AchievementWatcher.Pacifist === false){
			AchievementWatcher.Pacifist = true;
			AchievementWatcher.CurrentAchievementText = "Pacifist";
			AchievementWatcher.notify = true;
		}
		
		var m:GameObject=GameObject.Find("MainChar");
		collider.enabled = false;
		m.GetComponent(CharController2D).enabled = false;
		m.GetComponent(AnimateTexture).enabled = false;
		PlayerHealth.countDownState = 0;
		PlayerHealth.bonus = (PlayerHealth.countDown * 10);
		PlayerHealth.score = PlayerHealth.score + (PlayerHealth.bonus);
		PlayerHealth.totalScore = PlayerHealth.totalScore + PlayerHealth.score;
	
		GUIEndBonus.enabled = true;
		GUIEndBonus.text = "Time Bonus: " + PlayerHealth.bonus;
		
		yield WaitForSeconds(10);
		
		Application.LoadLevel("LevelTwo2D");
		PlayerHealth.countDownState = 1;
		PlayerHealth.score = 0;
		m.GetComponent(CharController2D).enabled = true;
		m.GetComponent(AnimateTexture).enabled = true;
	}
	
}