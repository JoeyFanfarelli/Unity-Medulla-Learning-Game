public static var pTarget1: GameObject;
public static var pTarget2: GameObject;
public static var pTarget3: GameObject;
public static var tFinal: GameObject;
public static var w1: GameObject;
public static var w2: GameObject;


function Awake(){
	pTarget1 = GameObject.Find ("PlayerTarget1");
	pTarget2 = GameObject.Find ("PlayerTarget2");
	pTarget3 = GameObject.Find ("PlayerTarget3");
	tFinal = GameObject.Find ("TeleporterFinal");
	w1 = GameObject.Find ("Wall1");
	w2 = GameObject.Find ("Wall2");

}

function OnTriggerEnter (other: Collider) {


	if (other.tag=="Brainwave"){

		
		if (pTarget1 != null){
			Destroy (pTarget1);
			Destroy (w1);
			
			
		} else if (pTarget2 != null){
			Destroy (pTarget2);
			Destroy (w2);

		} else if (pTarget3 != null){
			Destroy (pTarget3);
			tFinal.renderer.enabled = true;
			tFinal.collider.enabled = true;
			

		
		} else{
		
		}
		
	
		
		
		
		
		PlayerHealth.score = PlayerHealth.score + 125; //Increases score
	}
}

function Update () {

}