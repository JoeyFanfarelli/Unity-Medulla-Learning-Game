//Achievement Variables
public static var BeatLevelOne = false; //
public static var BeatLevelTwo = false; //
public static var BeatLevelThree = false; //
public static var BeatLevelFour = false; //
public static var BeatLevelFive = false; //
public static var BeatLevelSix = false; //
public static var BeatLevelSeven = false; //
public static var BeatLevelEight = false; //
public static var BeatGame = false;

public static var CureFirst = false; //
public static var CureAll = false; //
public static var CureThree = false; //
public static var CureTen = false; //
public static var CureOptional = false; //

public static var KillOne = false; // Kill first enemy
public static var KillTen = false; // Kill ten enemies
public static var KillFifty = false; // Kill fifty enemies

public static var Pacifist = false; // Killed no enemies in level
public static var Invincible = false; // No deaths 
public static var Dedicated = false; // Kill self while a minion
public static var Violent = false; // Tried to attack a helpful NPC
public static var TimeTraveler = false; // Defeated a level with more time than you started with
public static var MoonWalker = false; // Hold down both arrows at once to moonwalk.

//Stat variables
public static var EnemiesKilled : int; //Stat for kill achieves
public static var CitizensFailed : int;
public static var TimesDied : int;

public static var CitizensCuredInARow = 0; //Stat for cure achieves
public static var DiedInLevel = false; //Invincible
public static var CuredAllInLevel = true; //CureAll
public static var KilledEnemyInLevel = false; //Pacificst
public static var IsMinion = false; //Dedicated
public static var CureOptionalZone = false; //Player cures are eligible for CureOptional Achieve

//Achievement Notifier Variables
public static var CurrentAchievementText : String = "Empty";
public static var ant : GameObject; //achievement notifier text
public static var an : GameObject; //Achievement Notifier
public static var notify : boolean; 
public static var showNotification : boolean;
public static var antw;

//Box Mover Variables
var Xpos : float;
var Ypos : float;
var currentPos : float;
var max : boolean;
var maxAmount : int;
var step : float;
var offset: float;
public var textMesh:TextMesh;

function Awake () {
	ant = GameObject.Find("AchievementNotifierText");
	an = GameObject.Find("AchievementNotifier");
	textMesh = ant.GetComponent(TextMesh);
	notify = false;
	antw = FindObjectOfType(typeof(AchieveNotifierTextWrap));
	CureOptionalZone = false;
	Xpos = an.transform.position.x;
	Ypos = an.transform.position.y;
	maxAmount = 4;
	step = 0.1;
	an.renderer.material.color.a = 0;
	ant.renderer.material.color.a = 0;
}

function Start(){
	
	if (notify){
		showNotification = true;
		//currentPos = an.transform.position.y;
		notify = false;
	}

	//transform.position.y = transform.position.y + offset;
	while (showNotification){
	
		yield (AchievementNotifier());
		
	}
}

function Update () {
	if (notify == true){
		Start();
	}
	
			
}

function AchievementNotifier(){
	//Change text
	textMesh.text = CurrentAchievementText;
	antw.updateText();
	
	
	
	//an.renderer.enabled = true;
	//ant.renderer.enabled = true;
	//yield WaitForSeconds(2.0);
	//an.renderer.enabled = false;
	//ant.renderer.enabled = false;
	//Disappear box
	if(an.renderer.material.color.a >= .91){
		Debug.Log("max = true");
		max = true;
		yield WaitForSeconds(2.0);
	} else if(an.renderer.material.color.a <0){
		Debug.Log("max = false");
		max = false;
		showNotification = false;
	}
	if(!max){
			Debug.Log("increase");
			an.renderer.material.color.a += 0.1;
			ant.renderer.material.color.a += 0.1;
	} else {
			Debug.Log("decrease");
			yield WaitForSeconds(0.0125);
			an.renderer.material.color.a -= 0.1;
			ant.renderer.material.color.a -= 0.1;
	}
	yield;

}