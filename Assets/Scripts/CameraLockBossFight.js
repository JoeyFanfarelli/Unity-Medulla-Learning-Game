var dampTime : float = 0.3; //offset from the viewport center to fix damping
private var velocity = Vector3.zero;
var targetCamera : GameObject;
var cameraScript;
var lerpCamera : boolean;
var mainMusic : AudioClip;
var mc : GameObject;
var cb1 : GameObject;
var cb2 : GameObject;
var cb3 : GameObject;
var cb4 : GameObject;
var tm : GameObject;
public static var bl: GameObject;

var thorHappyMaterial : Material;
var thorNormalMaterial : Material;
var citizenHappyMaterial : Material;
var citizenSadMaterial : Material;


function Start (){
	targetCamera = GameObject.Find("Main Camera");
	bl = GameObject.Find("Blocker1");
	mc = GameObject.Find("Main Camera");
	cb1 = GameObject.Find("CitizenBack1");
	cb2 = GameObject.Find("CitizenBack2");
	cb3 = GameObject.Find("CitizenBack3");
	cb4 = GameObject.Find("CitizenBack4");
	tm = GameObject.Find("THOR");
	cameraScript = FindObjectOfType(typeof(CameraFollowSmoothDampBoss));
	lerpCamera = false;
}

function OnTriggerEnter (other: Collider) {
	if (other.tag=="Player"){
		lerpCamera = true;
		bl.collider.enabled = true;
		collider.enabled = false;
		PlayerHealth.startBossFightMidDialogue=true;
		
		
		if (PlayerHealth.MidBossFightChatProg == 0){
			var st:GameObject=GameObject.Find("SickText1");
			var textMesh:TextMesh = st.GetComponent(TextMesh);
			var tb:GameObject=GameObject.Find("TextBackground");
			var m:GameObject=GameObject.Find("MainChar");
			var tw = FindObjectOfType(typeof(TextWrap));
			PlayerHealth.textDisappear = false;
		
		
			PlayerHealth.countDownState = 0;
			m.GetComponent(CharController2D).enabled = false;
			m.GetComponent(AnimateTexture).enabled = false;
			m.GetComponent(PlayerAudio).enabled = false;
		
			tb.renderer.enabled = true;
			st.renderer.enabled = true;
		
		
			textMesh.text = "Oh. Hi there buddy! Remember me from Motor Cortex? I escaped. Come closer. I need your help.";
			tw.updateText();
		}
	}
	

	


}


function ClickToCure(){
	var ctcText:GameObject = GameObject.Find("ClickToCureText");
	ctcText.renderer.enabled = true;
	yield WaitForSeconds(5);
	ctcText.renderer.enabled = false;
}

function Update () {
	var st:GameObject=GameObject.Find("SickText1");
	var textMesh:TextMesh = st.GetComponent(TextMesh);
	var tb:GameObject=GameObject.Find("TextBackground");
	var tw = FindObjectOfType(typeof(TextWrap));
	var m:GameObject=GameObject.Find("MainChar");
	var pa:GameObject=GameObject.Find("Player Audio");
	var ctcText:GameObject = GameObject.Find("ClickToCureText");
	
	
	if (lerpCamera){
		cameraScript.enabled = false;
		targetCamera.transform.position.y = Mathf.Lerp(targetCamera.transform.position.y, 8.177689, 1.5f * Time.deltaTime);
		targetCamera.transform.position.x= Mathf.Lerp(targetCamera.transform.position.x, 118.8735, 1.5f * Time.deltaTime); //transform position of object this is dragged onto, on x-axis
	}
	

	
	
	if (Input.GetButtonDown("Space")){
		if (PlayerHealth.startBossFightMidDialogue==true){
			if(PlayerHealth.MidBossFightChatProg==0){
				PlayerHealth.MidBossFightChatProg =1;
				textMesh.text = "Oh nevermind. Who am I kidding? I can zap you from this distance! MWAHAHA!";
				tw.updateText();
			}else if(PlayerHealth.MidBossFightChatProg==1){
				PlayerHealth.MidBossFightChatProg =2;
				textMesh.text = "Oh, you thought I was captured by THOR?";
				tw.updateText();
			}else if(PlayerHealth.MidBossFightChatProg==2){
				PlayerHealth.MidBossFightChatProg = 3;
				tm.renderer.material = thorHappyMaterial;
				textMesh.text = "I AM THOR! Now come here so you can lose your life beside your friends.";
				tw.updateText();
				
				//bolt = true;
				//Start();//npc gets zapped
				
				
			}else if(PlayerHealth.MidBossFightChatProg==3){
				PlayerHealth.MidBossFightChatProg = 4;
				tm.renderer.material = thorNormalMaterial;
				cb1.renderer.material = citizenHappyMaterial;
				cb2.renderer.material = citizenHappyMaterial;
				cb3.renderer.material = citizenHappyMaterial;
				cb4.renderer.material = citizenHappyMaterial;
				textMesh.text = "(You don’t have to fight him alone! We’ll help. Just cure us if we get zapped.)";
				tw.updateText();	
				
				//npc.GetComponent(NPCMover).enabled = true; //NPC starts running away
				//(Enable charactercontroller. Let player run forward, then stop him and continue).
				//m.GetComponent(CharController2D).enabled = true;
				//m.GetComponent(AnimateTexture).enabled = true;
				
				
			}else if (PlayerHealth.MidBossFightChatProg==4){
				PlayerHealth.MidBossFightChatProg =5;
				tm.renderer.material = thorHappyMaterial;
				cb1.renderer.material = citizenSadMaterial;
				cb2.renderer.material = citizenSadMaterial;
				cb3.renderer.material = citizenSadMaterial;
				cb4.renderer.material = citizenSadMaterial;
				textMesh.text = "Let it begin!";
				tw.updateText();
				
				//npc.GetComponent(NPCMover).Start(); //resets the NPCs xpos so that the script will run again

						
			}else if (PlayerHealth.MidBossFightChatProg==5){
				PlayerHealth.MidBossFightChatProg =6;
				PlayerHealth.BossFightStarted = true;
				m.GetComponent(CharController2D).enabled = true;
				m.GetComponent(AnimateTexture).enabled = true;
				PlayerHealth.countDownState = 1;
				tb.renderer.enabled = false;
				st.renderer.enabled = false;
				PlayerHealth.textDisappear = true;
				m.GetComponent(PlayerAudio).enabled = true;	
				mc.audio.clip = mainMusic;
				mc.audio.volume = 0.55;
				mc.audio.Play();
				ClickToCure();
				//yield WaitForSeconds(5);
				//ctcText.renderer.enabled = false;
				//textMesh.text = "It's been nice knowing you...";
				//tw.updateText();
				//renderer.enabled = false; //remove from scene
				//textMesh.text = "Oh no, I can feel it starting again. Hurry!";
				//tw.updateText();
				
				//Player is allowed to run forward again before being stopped
				//npc.GetComponent(NPCMover).Start(); //resets the NPCs xpos so that the script will run again
			}					
				
			/*}else if(PlayerHealth.startMotorChatProg==8){
				m.GetComponent(CharController2D).enabled = true;
				m.GetComponent(AnimateTexture).enabled = true;
				PlayerHealth.countDownState = 1;
				tb.renderer.enabled = false;
				st.renderer.enabled = false;
				PlayerHealth.textDisappear = true;
				m.GetComponent(PlayerAudio).enabled = true;	
				//PlayerHealth.startMotorChatProg = 9;
				//textMesh.text = "You’d better get going then. Use your Occipital power to cure the vision of my people!";
				//tw.updateText();
			}
				
			}else if(PlayerHealth.startMotorChatProg==9){
				PlayerHealth.startMotorChatProg = 10;
				
				//mc.audio.clip = mainMusic;
				//mc.audio.volume = 0.55;
				//mc.audio.Play();
				
				
			}*/
				
				
		}
	}
}