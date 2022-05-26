//Left off - random illness is assigned and brain pops up. Need to seperate this from the usual illness curing process (so that nearest citizen doesn't happen, etc.)
var shootingCooldown= 1.0;
var sickDelay = 10.0;
var speed = 10;
var projectile : Rigidbody;
var allowfire : boolean = true;
var sickTimerLower : float = 1.0;
var sickTimerUpper : float = 20.0;
var sickTimer : float = 100.0;
var direction;

var lightningAudio : AudioClip;
var mainMusic : AudioClip;
var shockedMaterial : Material;
public static var lb : GameObject;
public static var th : GameObject;

public static var bossFightStart = 1; //bossFightStart is a boolean to state that the bossfight is happening
public static var bossCitizen: String; //Citizen name so I can assign which citizen is being cured during boss fight
public static var isIll : float = 0; //at least one citizen is ill


//Tells which citizen is ill
public static var isIll1 : float = 0;
public static var isIll2 : float = 0;
public static var isIll3 : float = 0;
public static var isIll4 : float = 0;

var illnessAssigned : boolean = false; //tells if ill citizen has been assigned a type of illness
var sadMaterial : Material;
var normalMaterial : Material;
var thorMaterial : Material;
var thorCastMaterial : Material;
public static var runStartOnce = true;

//Range from Player vars
var moveSpeed = 3;
var range : float=10f;
var myTransform : Transform; //current transform data of this enemy
var target : Transform;
private var thisTransform : Transform;
private var velocity : Vector2;

function Awake(){
	lb = GameObject.Find("LightningBolt2");
	th = GameObject.Find("THOR");
}

function Start(){
	thisTransform = transform;
	while (PlayerHealth.BossFightStarted){
		while (isIll == 0){
			Debug.Log("isIll = 0");
			illnessAssigned = false;
			yield(NotIll());
		}
		
		while (isIll == 1){
			yield(Bolt());
		}
		
		while (isIll == 2){ // all of this was added from Yesill
			Debug.Log("isIll = 1");
			yield(YesIll());
		}
	}
	
}


function NotIll(){
	Debug.Log("Not ill called");
	renderer.material = normalMaterial;
	sickTimer = Random.Range(sickTimerLower,sickTimerUpper);
	yield WaitForSeconds (sickTimer);
	Debug.Log("waited for 3 seconds inside of notIll");
	isIll = 1;

}



function YesIll(){
	renderer.material = sadMaterial;
	
	/*if (!illnessAssigned){
		//PlayerHealth.IllType = Random.Range(1,8); //enable after testing
		PlayerHealth.IllType = 3;
		renderer.material = sadMaterial;

		
		if (PlayerHealth.IllType == 1){
			PlayerHealth.IllType2 = 9;
		}
		
		//****Still need to do something with this to actually cure the right citizen
		if (PlayerHealth.bossCitizen == "citizenBack1"){
			isIll1 = 1;
		}else if (PlayerHealth.bossCitizen == "citizenBack2"){
			isIll2 = 1;
		}else if (PlayerHealth.bossCitizen == "citizenBack3"){
			isIll3 = 1;
		}else if (PlayerHealth.bossCitizen == "citizenBack4"){
			isIll4 = 1;
		}
		illnessAssigned = true;
	} */
	return null;


}

function Bolt(){
	if (PlayerHealth.BossFightStarted && !PlayerHealth.startBossFightEndDialogue){
		yield WaitForSeconds(1);
		th.renderer.material = thorCastMaterial;
		audio.clip = lightningAudio;
		audio.Play();
		yield WaitForSeconds(1);
		th.renderer.material = thorMaterial;
		renderer.material = shockedMaterial;
		lb.renderer.enabled = true;
		yield WaitForSeconds(0.4);
		lb.renderer.enabled = false;
		yield WaitForSeconds(0.3);
		renderer.material = normalMaterial;
		PlayerHealth.startMotorChatProg =5;
		isIll = 2;
	}
}

function Update(){
	//var distance = Vector3.Distance(myTransform.position, target.position); //Swap this for boolean that says when to start shooting (after dialogue and fight begins)
	
	if (bossFightStart == 1){
		if(isIll == 0){		
		
			if (allowfire == true && PlayerHealth.BossFightStarted == true){
				direction = transform.position.x - PlayerHealth.m.transform.position.x;
				Shoot();

			}
		}
	}
	
	if (PlayerHealth.BossFightStarted && runStartOnce){
		runStartOnce = false;
		Start();
	}
}

function Shoot(){
	var projectileStartPosition = transform.position; //Sets projectile start position
	projectileStartPosition.y += 1;
		
	if (isIll == 0){
		clone = Instantiate(projectile, projectileStartPosition, transform.rotation); //creates new projectile
		clone.velocity = new Vector3(0,speed,0);
		
		allowfire = false;
		Destroy (clone.gameObject, 2.0); //Removes the projectile from the scene
		yield WaitForSeconds(shootingCooldown); //Reduces firing speed
		allowfire=true; //Shooting enabled again
	}
}


function OnMouseDown(){
	PlayerHealth.currentBossClick = 2;
	PlayerHealth.bossCitizen = transform.name;
	
	if (!illnessAssigned){
		PlayerHealth.IllType = Random.Range(1,8); //enable after testing
		//PlayerHealth.IllType = 8; //For testing only
				

		
		if (PlayerHealth.IllType == 1){
			PlayerHealth.IllType2 = 9;
		}
		
		//****Still need to do something with this to actually cure the right citizen
		if (PlayerHealth.bossCitizen == "citizenBack1"){
			isIll1 = 1;
		}else if (PlayerHealth.bossCitizen == "citizenBack2"){
			isIll2 = 1;
		}else if (PlayerHealth.bossCitizen == "citizenBack3"){
			isIll3 = 1;
		}else if (PlayerHealth.bossCitizen == "citizenBack4"){
			isIll4 = 1;
		}
		illnessAssigned = true;
	}
	
	if (isIll == 2){
		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		var textWrap = FindObjectOfType(typeof(TextWrap));
		
		switch (PlayerHealth.IllType){
			case 8:
				textMesh.text = "<color=red>Are my ears working?</color> You want to shmelp me? What's shmelp? I don't like the sounds of that..";
				break;
			case 7:
				textMesh.text = "Despite that oddly large head of yours, you're really lacking in brains. What? <color=red>That's inappropriate behavior?</color> Sorry, I'm having a hard time <color=red>making good decisions.</color>";
				break;
			case 6:
				textMesh.text = "What? I'm being bitten by a spider? On my ear? Haha, yea right, good one. I think I'd notice the <color=red>pain.</color>";
				break;
			case 5:
				textMesh.text = "<color=red>I can't see</color>. Everything has gone dark. Is anyone there?";
				break;
			case 4:
				textMesh.text = "You! Please help! <color=red>I can't control my body!</color>";
				break;
			case 3:
				textMesh.text = "Are you listening to Dubstep? No? Oh, then I guess its my <color=red>heartbeat</color>. That can't be healthy.";
				break;
			case 2:
				textMesh.text = "<color=red>My balance isn't right</color>. Involuntary 'trust fall' incoming!";
				break;
			case 1:
				textMesh.text = "<color=red>aiszfgg. siiiytutkn asp qq i gka. ALDI!!!!.</color>";
				break;
			default:
				print ("Something is wrong with IllType");
				break;
			
		
		}
		textWrap.updateText();
		PlayerHealth.ResetResponseCount();
		PlayerHealth.countDownState = 0;
		PlayerHealth.textDisappear = false;
		PlayerHealth.ShowBrainBossFight();
		PlayerHealth.brocaCured = 0;
		PlayerHealth.wernickeCured = 0;
	}
	
}