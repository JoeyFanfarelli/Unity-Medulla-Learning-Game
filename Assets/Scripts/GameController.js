public static var startX:float=10;
public static var startY:float=5;




static function die(){ //When die.. grab character and move back to starting position
	var m:GameObject=GameObject.Find("MainChar"); //sets m to MainChar; Reference
	var st:GameObject=GameObject.Find("SickText1");
	var textMesh:TextMesh = st.GetComponent(TextMesh);
	var tb:GameObject=GameObject.Find("TextBackground");
	var pHealth = FindObjectOfType(typeof(PlayerHealth));
	var psScript = FindObjectOfType(typeof(PlayerShootingJS));
	//var hl:GameObject=GameObject.Find("HealthLarge");
	//var hs:GameObject=GameObject.Find("HealthSmall");

	
    AchievementWatcher.TimesDied = AchievementWatcher.TimesDied + 1;
    AchievementWatcher.DiedInLevel = true;
    if (AchievementWatcher.IsMinion == true && AchievementWatcher.Dedicated == false){
    	AchievementWatcher.Dedicated = true;
    	AchievementWatcher.CurrentAchievementText = "Dedicated";
		AchievementWatcher.notify = true;
    } 
    psScript.enabled = false;
	m.GetComponent(CharController2D).enabled = false;
	textMesh.text = "Noooooooooooooo!";
	tb.renderer.enabled = true;
	st.renderer.enabled = true;
	m.renderer.enabled = false;
	m.collider.enabled = false;
	pHealth.PlayerHealth = 100;
	yield WaitForSeconds (3.0);
	pHealth.PlayerHealth = 2;
	PlayerHealth.hl.guiTexture.enabled = true;
	PlayerHealth.hs.guiTexture.enabled = true;
	m.GetComponent(CharController2D).enabled = true;
	m.transform.position.x=startX;
	m.transform.position.y=startY;
	m.transform.position.z=-4;
	m.renderer.enabled = true;
	m.collider.enabled = true;
	tb.renderer.enabled = false;
	st.renderer.enabled = false;
	psScript.enabled = true;
	
	
	
	

}