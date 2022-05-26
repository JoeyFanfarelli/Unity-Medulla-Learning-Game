﻿private var Xpos : float; //Animation
private var max : boolean; //Animation
//public static var npc : GameObject;
public static var st : GameObject;
public static var textMesh : TextMesh; 
public static var tb : GameObject;
public static var m : GameObject;
//public static var bolt : boolean;
//public static var lb : GameObject;
public static var mc : GameObject;
//var lightningAudio : AudioClip;
var mainMusic : AudioClip;
//var shockedMaterial : Material;
var normalMaterial : Material;

function Awake(){
	//bolt = false;
	//lb = GameObject.Find("LightningBolt");
	//npc = GameObject.Find("AnimatedStart");
	st  = GameObject.Find("SickText1");
	textMesh = st.GetComponent(TextMesh);
	tb = GameObject.Find("TextBackground");
	m = GameObject.Find("MainChar");
	mc = GameObject.Find("Main Camera");
	PlayerHealth.startMotorChatProg = 0;
}

function Start(){

/*	while (bolt){
	
		yield (Bolt());
	}	*/
}
	

/*function Bolt(){
	yield WaitForSeconds(1);
	audio.clip = lightningAudio;
	audio.Play();
	yield WaitForSeconds(1);
	renderer.material = shockedMaterial;
	lb.renderer.enabled = true;
	yield WaitForSeconds(0.4);
	lb.renderer.enabled = false;
	yield WaitForSeconds(0.3);
	renderer.material = normalMaterial;
	PlayerHealth.startMotorChatProg =5;
	bolt = false;
} */

function OnTriggerEnter (other: Collider) {
	
	
	if (other.tag=="Player"){
		if (PlayerHealth.startMotorChatProg == 0){
			//var st:GameObject=GameObject.Find("SickText1");
			//var textMesh:TextMesh = st.GetComponent(TextMesh);
			//var tb:GameObject=GameObject.Find("TextBackground");
			//var m:GameObject=GameObject.Find("MainChar");
			PlayerHealth.startMotorStartDialogue=true;
			PlayerHealth.textDisappear = false;
		
		
			PlayerHealth.countDownState = 0;
			m.GetComponent(CharController2D).enabled = false;
			m.GetComponent(AnimateTexture).enabled = false;
			m.GetComponent(PlayerAudio).enabled = false;
		
			tb.renderer.enabled = true;
			st.renderer.enabled = true;
		
		
			textMesh.text = "Hi There! (Hello!)";
		}
	}
	
}


function Update () {
	var st:GameObject=GameObject.Find("SickText1");
	var textMesh:TextMesh = st.GetComponent(TextMesh);
	var tb:GameObject=GameObject.Find("TextBackground");
	var tw = FindObjectOfType(typeof(TextWrap));
	var m:GameObject=GameObject.Find("MainChar");
	var pa:GameObject=GameObject.Find("Player Audio");
	
	
	if (Input.GetButtonDown("Space")){
		if (PlayerHealth.startMotorStartDialogue==true){
			if(PlayerHealth.startMotorChatProg ==0){
				PlayerHealth.startMotorChatProg =1;
				textMesh.text = "We’re the twins who run this place! (<color=red>Broca</color> and <color=red>Wernicke</color>!)";
				tw.updateText();
			}else if(PlayerHealth.startMotorChatProg==1){
				PlayerHealth.startMotorChatProg =2;
				textMesh.text = "Yes, as you can see, we’re a bit inseparable! Heh heh, I know you love that one, <color=red>Broca</color>! (That joke gets ‘em every time, <color=red>Wernicke</color>!)";
				tw.updateText();
			}else if(PlayerHealth.startMotorChatProg==2){
				PlayerHealth.startMotorChatProg =3;
				textMesh.text = "Oh yes, on to business. (You need to save our town!)";
				tw.updateText();
			}else if(PlayerHealth.startMotorChatProg==3){
				PlayerHealth.startMotorChatProg =4;
				textMesh.text = "Here are two powers, one named <color=red>Broca</color> and one named <color=red>Wernicke</color> (I wonder where they got those incredible names!)";
				tw.updateText();
			}else if(PlayerHealth.startMotorChatProg==4){
				PlayerHealth.startMotorChatProg = 5;
				textMesh.text = "You say all of the other powers are named after the city? You want to know the name of our city? (Why should he care?)";
				tw.updateText();
				
				//bolt = true;
				//Start();//npc gets zapped
				
				
			}else if(PlayerHealth.startMotorChatProg==5){
				PlayerHealth.startMotorChatProg = 6;
				textMesh.text = "None of that matters, young one! All that matters are the fantastic siblings <color=red>Broca</color>… (and <color=red>Wernicke</color>!)";
				tw.updateText();	
				
				//npc.GetComponent(NPCMover).enabled = true; //NPC starts running away
				//(Enable charactercontroller. Let player run forward, then stop him and continue).
				//m.GetComponent(CharController2D).enabled = true;
				//m.GetComponent(AnimateTexture).enabled = true;
				
				
			}else if (PlayerHealth.startMotorChatProg==6){
				PlayerHealth.startMotorChatProg =7;
				textMesh.text = "Now get on. You’ll need to <color=red>use both of the powers</color> to cure <color=red>speech</color> issues. If you hear somebody spouting garbledygook, you should use both powers in sequence (it doesn’t matter which order!)";
				tw.updateText();
				
				//npc.GetComponent(NPCMover).Start(); //resets the NPCs xpos so that the script will run again

						
			}else if (PlayerHealth.startMotorChatProg==7){
				PlayerHealth.startMotorChatProg =8;
				textMesh.text = "Thanks pal, and never forget the incredible powers of <color=red>Broca</color> and <color=red>Wernicke</color>!";
				tw.updateText();
				//renderer.enabled = false; //remove from scene
				//textMesh.text = "Oh no, I can feel it starting again. Hurry!";
				//tw.updateText();
				
				//Player is allowed to run forward again before being stopped
				//npc.GetComponent(NPCMover).Start(); //resets the NPCs xpos so that the script will run again
								
				
			}else if(PlayerHealth.startMotorChatProg==8){
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
				
			/*}else if(PlayerHealth.startMotorChatProg==9){
				PlayerHealth.startMotorChatProg = 10;
				
				//mc.audio.clip = mainMusic;
				//mc.audio.volume = 0.55;
				//mc.audio.Play();
				
				
			}*/
				
				
		}
	}
}