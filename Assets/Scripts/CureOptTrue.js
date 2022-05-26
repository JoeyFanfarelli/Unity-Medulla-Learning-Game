function OnTriggerEnter(other: Collider){
	if (other.tag=="Player"){
		AchievementWatcher.CureOptionalZone = true;
	}
}