public static var PlayerHealth = 2; 
public static var ResponseCount = 1;
public static var IllType = 0;
public static var IllType2 = 0;
public static var wernickeCured = 0;
public static var brocaCured = 0;
public static var IllText = " ";
public static var textState = 0;
public static var playerInvulnerable = 0;
public static var brainClickEnabled = false;
public static var bossFightCitizen = 99;
public static var BossFightStarted = false;
public static var currentBossClick : float = 0;
public static var bossCitizen: String; //Citizen name so I can assign which citizen is being cured during boss fight

//Chat Progression
public static var startMotorChatProg = 0;
public static var MidBossFightChatProg = 0;
public static var EndBossFightChatProg = 0;
public static var EndGameChatProg = 0;

public static var midMotorChatProg = 0;
public static var endMotorChatProg = 0;
public static var startMotorStartDialogue = false;
public static var startMotorMidDialogue = false;

public static var startMotorEndDialogue = false;
public static var startMedullaEndDialogue = false;
public static var startParietalEndDialogue = false;
public static var startTemporalEndDialogue = false;
public static var startPrefrontalCortexEndDialogue = false;
public static var startCerebellumEndDialogue = false;
public static var startBrocaEndDialogue = true;
public static var startBossFightStartDialogue = false;
public static var startBossFightMidDialogue = false;
public static var startBossFightEndDialogue = false;


public static var initialHurtTime = 0;
public static var pShooting;

public static var TotalCitizensCured : int;
public static var TotalCitizensFailed : int;


var debugText:GUIText;

public static var textDisappear = true; //text will not disappear when this is false


//Player Spawn Counter for Lab Level
public static var playerTargetCounter = 0;

//Scoring and timers
public static var score = 0;
public static var totalScore = 0;
public static var countDownState = 1;
var guiScore:GUIText;
public static var countDown = 300.0;
var guiTimer:GUIText;
public static var bonus = 0;

//brain, brain buttons, mainchar, and text
public static var b: GameObject;
public static var bb: GameObject;
public static var cb: GameObject;
public static var mb: GameObject;
public static var mcb: GameObject;
public static var olb: GameObject;
public static var plb: GameObject;
public static var pcb: GameObject;
public static var tlb: GameObject;
public static var wb: GameObject;
public static var bbb: GameObject;
public static var cbb: GameObject;
public static var mbb: GameObject;
public static var mcbb: GameObject;
public static var olbb: GameObject;
public static var plbb: GameObject;
public static var pcbb: GameObject;
public static var tlbb: GameObject;
public static var wbb: GameObject;
public static var m: GameObject;
public static var tb: GameObject;
public static var st: GameObject;

//Health GUI
public static var hs: GameObject;
public static var hl: GameObject;



function Awake(){
	b = GameObject.Find("Brain");
	bb = GameObject.Find("BrocaButton"); //1
	bbb = GameObject.Find("BrocaButtonBoss");
	cb = GameObject.Find("CerebellumButton"); //2
	cbb = GameObject.Find("CerebellumButtonBoss");
	mb = GameObject.Find("MedullaButton"); //3
	mbb = GameObject.Find("MedullaButtonBoss");
	mcb = GameObject.Find("MotorCortexButton"); //4
	mcbb = GameObject.Find("MotorCortexButtonBoss");
	olb = GameObject.Find("OccipitalLobeButton"); //5
	olbb = GameObject.Find("OccipitalLobeButtonBoss");
	plb = GameObject.Find("ParietalLobeButton"); //6
	plbb = GameObject.Find("ParietalLobeButtonBoss");
	pcb = GameObject.Find("PrefrontalCortexButton"); //7
	pcbb = GameObject.Find("PrefrontalCortexButtonBoss");
	tlb = GameObject.Find("TemporalLobeButton"); //8
	tlbb = GameObject.Find("TemporalLobeButtonBoss");
	wb = GameObject.Find("WernickeButton"); //9
	wbb = GameObject.Find("WernickeButtonBoss");
	m = GameObject.Find("MainChar");
	tb = GameObject.Find("TextBackground");
	st = GameObject.Find("SickText1");
	pShooting = FindObjectOfType(typeof(PlayerShootingJS));
	hs = GameObject.Find("GUITextureSmallHealth");
	hl = GameObject.Find("GUITextureLargeHealth");
	
	//Just added these for reload level
	PlayerHealth = 2; 
	ResponseCount = 1;
	IllType = 0;
	IllType2 = 0;
	wernickeCured = 0;
	brocaCured = 0;
	IllText = " ";
	textState = 0;
	playerInvulnerable = 0;
	brainClickEnabled = false;
	AchievementWatcher.CuredAllInLevel = true;
	AchievementWatcher.CitizensCuredInARow = 0;
	AchievementWatcher.DiedInLevel = false;
	AchievementWatcher.KilledEnemyInLevel = false;

	//Chat Progression
	startMotorChatProg = 0;
	midMotorChatProg = 0;
	endMotorChatProg = 0;
	startMotorStartDialogue = false;
	startMotorMidDialogue = false;
	startMotorEndDialogue = false;

	initialHurtTime = 0;


	//Player Spawn Counter for Lab Level
	playerTargetCounter = 0;

	//Scoring and timers
	score = 0;
	countDownState = 1;
	countDown = 300.0;
	bonus = 0;

}

static function Decrease(){
	//var hs:GameObject=GameObject.Find("HealthSmall"); //health indicator
	//var hs:GameObject=GameObject.Find("GUITextureSmallHealth");
	pShooting = FindObjectOfType(typeof(PlayerShootingJS)); //Shooting script
	
	
			
	if (playerInvulnerable == 0){	//Invulnerable = 0 means that the player is not invulnerable

		if (PlayerHealth < 10){ //Player knockback on damage
			if (m.transform.localScale.x > 0){
				m.transform.position.x = m.transform.position.x - 3;
		
			}else if(m.transform.localScale.x < 0){
				m.transform.position.x = m.transform.position.x + 3;
	
			}else{
				m.transform.position.x = m.transform.position.x - 3;
			}
			PlayerHealth--; //Reduce player health
		}
	
		//hs.renderer.enabled = false; //reduce health indicator
		hs.guiTexture.enabled = false;
		
		playerInvulnerable = 1;
		
		
		

	}
}

//Made this static to make PainScript work. Remove static if anything starts screwing up.
static function Invulnerable(){
		initialHurtTime = Time.time;
		playerInvulnerable = 1; //Sets player to invulnerable
		pShooting.enabled = false; //Disables player's ability to shoot
		m.renderer.enabled = false; //blink code starts here
		yield WaitForSeconds (0.1);
		m.renderer.enabled = true;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = false;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = true;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = false;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = true;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = false;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = true;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = false;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = true;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = false;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = true;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = false;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = true;
		yield WaitForSeconds (0.1);
		m.renderer.enabled = false;
		yield WaitForSeconds (0.2);
		m.renderer.enabled = true;
		yield WaitForSeconds (0.2);
		m.renderer.enabled = false;
		yield WaitForSeconds (0.2);
		m.renderer.enabled = true;
		yield WaitForSeconds (0.2);
		m.renderer.enabled = false;
		yield WaitForSeconds (0.2);
		m.renderer.enabled = false;
		yield WaitForSeconds (0.2);
		m.renderer.enabled = true;
		yield WaitForSeconds (0.2);
		m.renderer.enabled = false;
		yield WaitForSeconds (0.2);
		m.renderer.enabled = true; //Player is now fully visible, no more blinking
		playerInvulnerable = 0; //Removes invulnerability
		pShooting.enabled = true; //Player can shoot
}

static function HideBrain(){
	
	brainClickEnabled = false;
	m.GetComponent(CharController2D).enabled = true;
	m.GetComponent(AnimateTexture).enabled = true;
	b.renderer.enabled = false;
	bb.collider.enabled = false;
	cb.collider.enabled = false;
	mb.collider.enabled = false;
	mcb.collider.enabled = false;
	olb.collider.enabled = false;
	plb.collider.enabled = false;
	pcb.collider.enabled = false;
	tlb.collider.enabled = false;
	wb.collider.enabled = false;
	
	for (var obj : GameObject in GameObject.FindGameObjectsWithTag("BrainButton")){
 
    obj.gameObject.collider.enabled = false;
    

    }

}

static function HideBrainBoss(){
	
	brainClickEnabled = false;
	m.GetComponent(CharController2D).enabled = true;
	m.GetComponent(AnimateTexture).enabled = true;
	b.renderer.enabled = false;
	bbb.collider.enabled = false;
	cbb.collider.enabled = false;
	mbb.collider.enabled = false;
	mcbb.collider.enabled = false;
	olbb.collider.enabled = false;
	plbb.collider.enabled = false;
	pcbb.collider.enabled = false;
	tlbb.collider.enabled = false;
	wbb.collider.enabled = false;
	
	for (var obj : GameObject in GameObject.FindGameObjectsWithTag("BrainButton")){
 
    obj.gameObject.collider.enabled = false;
    

    }

}

static function ShowBrain(){
	brainClickEnabled = true;
	m.GetComponent(CharController2D).enabled = false;
	m.GetComponent(AnimateTexture).enabled = false;

	tb.renderer.enabled = true;
	st.renderer.enabled = true;
	yield WaitForSeconds (1.5);
	b.renderer.enabled = true;
	bb.collider.enabled = true;
	cb.collider.enabled = true;
	mb.collider.enabled = true;
	mcb.collider.enabled = true;
	olb.collider.enabled = true;
	plb.collider.enabled = true;
	pcb.collider.enabled = true;
	tlb.collider.enabled = true;
	wb.collider.enabled = true;
	

}


static function ShowBrainBossFight(){
	brainClickEnabled = true;
	m.GetComponent(CharController2D).enabled = false;
	m.GetComponent(AnimateTexture).enabled = false;
	tb.renderer.enabled = true;
	st.renderer.enabled = true;
	yield WaitForSeconds (1.5);
	b.renderer.enabled = true;
	bbb.collider.enabled = true;
	cbb.collider.enabled = true;
	mbb.collider.enabled = true;
	mcbb.collider.enabled = true;
	olbb.collider.enabled = true;
	plbb.collider.enabled = true;
	pcbb.collider.enabled = true;
	tlbb.collider.enabled = true;
	wbb.collider.enabled = true;

}


static function Increase(){
	//var hs:GameObject=GameObject.Find("HealthSmall");
	var gd:GameObject=GameObject.Find("GUIDanger");
	if (PlayerHealth < 2){
		PlayerHealth++;
		//hs.renderer.enabled = true;
		hs.guiTexture.enabled = true;
	}
}

static function IncreaseResponseCount(){
	ResponseCount++;
		
}

static function ResetResponseCount(){
	ResponseCount = 1;
}



function Update(){
	m.transform.position.z =-4; //Lock player on Z axis
	
	
	if (playerInvulnerable == 1){
		Invulnerable();
	}
	
	if (m.renderer.enabled == false){ //This is a fix to the disappearing on contact bug
		if (Time.time - initialHurtTime > 3){
			m.renderer.enabled = true;
			playerInvulnerable = 0;
			pShooting.enabled = true;
		}
	}
	
	if (countDownState == 1){
		countDown -=Time.deltaTime;
	}
	
	guiScore.text = " " + score;
	guiTimer.text = "" + countDown.ToString("f0");
	debugText.text = " " + playerInvulnerable;
	
	if (PlayerHealth <=0){
		
		hl.guiTexture.enabled = false;
		GameController.die();
	}
	
	if (IllType == 1){
		if (ShootAtMyelin.bossFightStarted == 0){
			IllText = "Broca and Wernicke";
		}else{
			IllText = "Speech = Broca + Wernicke";
		}
	}else if (IllType == 2){
		if (ShootAtMyelin.bossFightStarted == 0){
			IllText = "Cerebellum";
		}else{
			IllText = "Balance = Cerebellum";
		}
	}else if (IllType == 3){
		if (ShootAtMyelin.bossFightStarted == 0){
			IllText = "Medulla";
		}else{
			IllText = "Heartbeat = Medulla";
		}
	}else if (IllType == 4){
		if (ShootAtMyelin.bossFightStarted == 0){
			IllText = "Motor Cortex";
		}else{
			IllText = "Body Control = Motor Cortex";
		}
	}else if (IllType == 5){
		if (ShootAtMyelin.bossFightStarted == 0){
			IllText = "Occipital Lobe";
		}else{
			IllText = "Vision = Occipital";
		}
	}else if (IllType == 6){
		if (ShootAtMyelin.bossFightStarted == 0){
			IllText = "Parietal Lobe";
		}else{
			IllText = "Pain = Parietal";
		}
	}else if (IllType == 7){
		if (ShootAtMyelin.bossFightStarted == 0){
			IllText = "Prefrontal Cortex";
		}else{
			IllText = "Decision Making & Social Behavior = Prefrontal Cortex";
		}
	}else if (IllType == 8){
		if (ShootAtMyelin.bossFightStarted == 0){
			IllText = "Temporal Lobe";
		}else{
			IllText = "Hearing = Temporal Lobe";
		}
	}else{
		IllText = "Brain";
	}
	
}
