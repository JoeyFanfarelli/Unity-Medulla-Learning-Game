public static var black;
public static var red;
var increasing: boolean;
var modifyRed: boolean;
var removeRed: boolean;
var FadeIn: boolean;
var FadeOut: boolean;
var FadeText: boolean;
var catHealed: boolean;
var lerpCamera: boolean;
var heartbeatSound: AudioClip;
var mainMusic : AudioClip;
var cameraScript;
var targetCamera;
public static var mc : GameObject;
public static var npc : GameObject;
public static var sick : GameObject;
public static var happy : GameObject;


function Awake(){
	var st:GameObject=GameObject.Find("SickText1");
	var textMesh:TextMesh = st.GetComponent(TextMesh);
	var tb:GameObject=GameObject.Find("TextBackground");
	var m:GameObject=GameObject.Find("MainChar");
	//var t:GameObject = GameObject.Find("THOR");
	var tw = FindObjectOfType(typeof(TextWrap));
	mc = GameObject.Find("Main Camera");
	npc = GameObject.Find("THOR");
	sick = GameObject.Find("SickCat");
	happy = GameObject.Find("HappyCat");
	black = GameObject.Find("Black");
	red = GameObject.Find("Red");
	targetCamera = GameObject.Find("Main Camera");
	cameraScript = FindObjectOfType(typeof(CameraFollowSmoothDampBoss));
	lerpCamera = false;
	modifyRed = false;
	removeRed = false;
	FadeIn = false;
	FadeOut = false;
	FadeText = false;
	decreaseBlack = false;
	catHealed = false;
	red.renderer.enabled = true;
	red.renderer.material.color.a = 0;
	red.renderer.enabled = false;
	happy.renderer.material.color.a = 0;
	
	m.GetComponent(CharController2D).enabled = false;
	m.GetComponent(AnimateTexture).enabled = false;
	m.GetComponent(PlayerAudio).enabled = false;
	
	st.renderer.enabled = true;
	tb.renderer.enabled = true;
	textMesh.text = "It is clear in my mind, to this day.";
	PlayerHealth.EndGameChatProg = 1;
	
}

function WaitASecond(){
	var st:GameObject=GameObject.Find("SickText1");
	var textMesh:TextMesh = st.GetComponent(TextMesh);
	var tw = FindObjectOfType(typeof(TextWrap));
	yield WaitForSeconds (2.0);
	textMesh.text = "And let me know if you ever need my services. My rates are very affordable.";
	tw.updateText();
	yield WaitForSeconds (4.0);
	//st.renderer.enabled = false;
	//textMesh.renderer.enabled = false;
	FadeText = true;
}

function Update () {
	var st:GameObject=GameObject.Find("SickText1");
	var textMesh:TextMesh = st.GetComponent(TextMesh);
	var tb:GameObject=GameObject.Find("TextBackground");
	var m:GameObject=GameObject.Find("MainChar");
	//var t:GameObject = GameObject.Find("THOR");
	var tw = FindObjectOfType(typeof(TextWrap));

	
	if (Input.GetButtonDown("Space")){
				if(PlayerHealth.EndGameChatProg==1){
					PlayerHealth.EndGameChatProg = 2;
					//t.renderer.material = thorScaredMaterial;
					//fireEmitter.Play();
					textMesh.text = "It was the first day of my life. Obviously I speak in metaphor. Nobody remembers the first day of their life, but it feels like the truth.";
					tw.updateText();
				} else if (PlayerHealth.EndGameChatProg ==2){
					PlayerHealth.EndGameChatProg = 3;
					//ThorDefeated = true;
					//smokeEmitter.Stop();
					//fireEmitter.Stop();
					//tp.renderer.enabled = false;
					//Rotate and fall thor
					textMesh.text = "It was 5 years ago.";
				} else if (PlayerHealth.EndGameChatProg ==3){
					PlayerHealth.EndGameChatProg = 4;
					textMesh.text = "I woke up with a stabbing pain at the top of my head.";
					tw.updateText();
					audio.clip = heartbeatSound;
					audio.Play();
					red.renderer.enabled = true;
					modifyRed = true;
					//Play heartbeat noise

					
				} else if (PlayerHealth.EndGameChatProg ==4){
					PlayerHealth.EndGameChatProg = 5;
					textMesh.text = "There was no recollection of why it had hurt.";
					tw.updateText();
				} else if (PlayerHealth.EndGameChatProg ==5){
					textMesh.text = "There was no recollection of anything.";
					tw.updateText();
					modifyRed = false;
					removeRed = true;
					audio.Stop();
					PlayerHealth.EndGameChatProg = 6;
				} else if (PlayerHealth.EndGameChatProg ==6){
					PlayerHealth.EndGameChatProg = 7;
					textMesh.text = "Who was I? I wore the body of an adult, yet I couldn’t remember a moment of its evolution.";
					tw.updateText();
				} else if (PlayerHealth.EndGameChatProg ==7){
					PlayerHealth.EndGameChatProg = 8;
					textMesh.text = "They told me my name was Terry Milton. I can’t say I liked it, but what was I to do?";
					tw.updateText();
				} else if (PlayerHealth.EndGameChatProg ==8){
					PlayerHealth.EndGameChatProg = 9;
					textMesh.text = "I moved on. I decided I would do whatever I could to recollect my memories. ";
					tw.updateText();
				} else if (PlayerHealth.EndGameChatProg ==9){
					PlayerHealth.EndGameChatProg = 10;
					textMesh.text = "That drive has faded with time. I found a passion - a love for something greater than my former identity - my life’s work.";
					tw.updateText();
				} else if (PlayerHealth.EndGameChatProg ==10){
					PlayerHealth.EndGameChatProg = 11;
					textMesh.text = "I found a dream.";
					audio.volume = 0.059;
					audio.clip = mainMusic;
					audio.Play();
					tw.updateText();
				} else if (PlayerHealth.EndGameChatProg ==11){
					PlayerHealth.EndGameChatProg = 12;
					textMesh.text = "I am Dr. Terry, Head Veterinarian of Motor Cortex.";
					tw.updateText();
					FadeIn = true;
					//npc.GetComponent(PlayerAudio).enabled = false;
					//fade in scene of Terry with animals
				} else if (PlayerHealth.EndGameChatProg ==12 && catHealed){
					//PlayerHealth.EndGameChatProg = 13;
					//npc.GetComponent(NPCMover).enabled = true;
					//textMesh.text = "I was brought here by a friend. It’s his home town.";
					//tw.updateText();
				} else if (PlayerHealth.EndGameChatProg ==13){
					PlayerHealth.EndGameChatProg = 14;
					textMesh.text = "He helped me establish myself. I could never repay him.";
					tw.updateText();
				}else if (PlayerHealth.EndGameChatProg ==14){
					PlayerHealth.EndGameChatProg = 15;
					textMesh.text = "Now it is time for me to continue my journey. Farewell. Stay in touch.";
					tw.updateText();
					FadeOut = true;
					//lerpCamera = true;
				}else if (PlayerHealth.EndGameChatProg == 15){

				}
			
								
					
					//tb.renderer.enabled = false;
					//st.renderer.enabled = false;
				
	}
		
	if (modifyRed){
		if (red.renderer.material.color.a < 0.02){
			increasing = true;
		} else if (red.renderer.material.color.a >.4){
			increasing = false;
		}
		if (increasing){
			red.renderer.material.color.a += 0.01;
			//Debug.Log ("increasing alpha: " + red.renderer.material.color.a);
		} else if (!increasing){
			red.renderer.material.color.a -= 0.01;
			//Debug.Log ("decreasing alpha: " + red.renderer.material.color.a);
		}		
	}
	
	if (removeRed){
		red.renderer.material.color.a -= 0.01;
		if (red.renderer.material.color.a < 0.02){
			red.renderer.enabled = false;
			removeRed = false;
		}
	}
		
	if (FadeIn)
		if (black.renderer.material.color.a > 0.02){
			black.renderer.material.color.a -= 0.01;
			//Debug.Log ("decreasing alpha: " + black.renderer.material.color.a);
		}else{
			Debug.Log("FadeIn set to false");
			npc.GetComponent(NPCMover).enabled = true;
			FadeIn = false;	
		}
	
	if (npc.transform.position.x > 16 && happy.renderer.material.color.a < 1){
		sick.renderer.material.color.a -= 0.006;
		happy.renderer.material.color.a += 0.006;
		
	}else if (npc.transform.position.x > 16 && happy.renderer.material.color.a >=1 && catHealed == false){
		catHealed = true;
		PlayerHealth.EndGameChatProg = 13;
		//npc.GetComponent(NPCMover).enabled = true;
		textMesh.text = "I was brought here by a friend. It’s his home town.";
		tw.updateText();
	}
	
	if (FadeOut){
		if (black.renderer.material.color.a < 1.00){
			black.renderer.material.color.a += 0.004;
			//Debug.Log ("decreasing alpha: " + black.renderer.material.color.a);
		}else{
			Debug.Log("FadeOut set to false" + black.renderer.material.color.a);
			FadeOut = false;
			WaitASecond();
			
		}
	}
	
	if (FadeText){
		if (textMesh.renderer.material.color.a > 0.02){
			textMesh.renderer.material.color.a -= 0.01;
			//Debug.Log ("decreasing alpha: " + black.renderer.material.color.a);
		}else{
			Debug.Log("FadeText set to false");
			npc.GetComponent(NPCMover).enabled = true;
			//Load up title menu
			FadeText = false;	
		}
	}
	
	if (lerpCamera){
		cameraScript.enabled = false;
		if (targetCamera.camera.orthographicSize < 20){
			targetCamera.camera.orthographicSize += 0.01;
		}else{
			lerpCamera = false;
		}
		
	}
			
}