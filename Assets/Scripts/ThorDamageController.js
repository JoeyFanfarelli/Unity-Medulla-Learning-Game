//public static var Health = 300; //EnemyHealth
public static var Health = 10;
public static var ThorDefeated = false;
var smokeEmitter:ParticleSystem;
var fireEmitter:ParticleSystem;
var thorScaredMaterial : Material;
var thorBonkMaterial : Material;
public static var black;


function Awake(){
	black = GameObject.Find("Black");
	black.renderer.enabled = true;
	black.renderer.material.color.a = 0;
	black.renderer.enabled = false;
}


function OnTriggerEnter (other: Collider) {
	if (other.tag=="Brainwave"){ //Brainwave is the projectile
		var bw:GameObject=GameObject.Find("playerProjectile");
		
		Health--; //Reduce health of enemy
		Destroy (other.gameObject); //Destroys projectile
		PlayerHealth.score = PlayerHealth.score + 116; //Increases score
		Debug.Log("Health: " + Health);
	}
	
}

function Update(){
	var st:GameObject=GameObject.Find("SickText1");
	var textMesh:TextMesh = st.GetComponent(TextMesh);
	var tb:GameObject=GameObject.Find("TextBackground");
	var m:GameObject=GameObject.Find("MainChar");
	var tp:GameObject = GameObject.Find("ThorPlatform");
	var t:GameObject = GameObject.Find("THOR");
	var tw = FindObjectOfType(typeof(TextWrap));

	
	
	if (t.transform.position.y > 3.0 && ThorDefeated){
		t.transform.Rotate(Vector3(0,2,0));
		t.transform.position.y = t.transform.position.y-0.07;
	} else if (t.transform.position.y <= 3.0){
		t.renderer.material = thorBonkMaterial;
		black.renderer.enabled = true;
		if (black.renderer.material.color.a < 2){
			black.renderer.material.color.a += 0.01;
		} else if (black.renderer.material.color.a >1){
			Debug.Log("done fading to black");
			Application.LoadLevel("EndGame");
		}
	}
	
	
	if (Health < 100){
		smokeEmitter.Play();
	}
	
	if (Health <=0){ //If enemy health is zero or less, destroy enemy
		PlayerHealth.startBossFightEndDialogue = true;
		PlayerHealth.BossFightStarted = false;
		if (PlayerHealth.EndBossFightChatProg == 0){
			
			PlayerHealth.textDisappear = false;
		
		
			PlayerHealth.countDownState = 0;
			m.GetComponent(CharController2D).enabled = false;
			m.GetComponent(AnimateTexture).enabled = false;
			m.GetComponent(PlayerAudio).enabled = false;
		
			tb.renderer.enabled = true;
			st.renderer.enabled = true;
		
		
			textMesh.text = "What is this!?";
			tw.updateText();
			PlayerHealth.EndBossFightChatProg = 1;
		}
		
		if (Input.GetButtonDown("Space")){
			if (PlayerHealth.startBossFightEndDialogue==true){
				if(PlayerHealth.EndBossFightChatProg==1){
					PlayerHealth.EndBossFightChatProg = 2;
					t.renderer.material = thorScaredMaterial;
					fireEmitter.Play();
					textMesh.text = "This isn't possible!";
					tw.updateText();
				} else if (PlayerHealth.EndBossFightChatProg ==2){
					PlayerHealth.EndBossFightChatProg = 3;
					ThorDefeated = true;
					smokeEmitter.Stop();
					fireEmitter.Stop();
					tp.renderer.enabled = false;
					//Rotate and fall thor
					textMesh.text = "NOOOOOOOOOOOOOOO!";
				} else if (PlayerHealth.EndBossFightChatProg ==3){
					tb.renderer.enabled = false;
					st.renderer.enabled = false;
				}
			}
		}
		
		/*if (PlayerHealth.EndBossFightChatProg ==3){
			black.renderer.enabled = true;
			if (black.renderer.material.color.a < 95){
				black.renderer.material.color.a += 0.1;
			} else if (black.renderer.material.a >=95){
				Debug.Log("done fading to black");
			}
		}*/
		
	}
}
