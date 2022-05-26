public static var spawnPoint;
public static var pTarget2: GameObject;
public static var pTarget3: GameObject;
public static var pTarget4: GameObject;
public static var pTarget5: GameObject;

function Awake(){
	spawnPoint = GameObject.Find("PlayerTargetSpawnPoint");
	pTarget2 = GameObject.Find ("PlayerTarget2");
	pTarget3 = GameObject.Find ("PlayerTarget3");
	pTarget4 = GameObject.Find ("PlayerTarget4");
	pTarget5 = GameObject.Find ("PlayerTarget5");
}


function OnTriggerEnter (other: Collider) {
	if (other.tag=="Player"){ //Brainwave is the projectile
		Destroy(gameObject);
		PlayerHealth.score = PlayerHealth.score + 125; //Increases score
	}

}


function Update () {

}