
function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
	
		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		var tb:GameObject=GameObject.Find("TextBackground");
		var m:GameObject=GameObject.Find("MainChar");
		PlayerHealth.startMotorStartDialogue=true;
		PlayerHealth.textDisappear = false;
	
	
		PlayerHealth.countDownState = 0;
		m.GetComponent(CharController2D).enabled = false;
		m.GetComponent(AnimateTexture).enabled = false;
		m.GetComponent(PlayerAudio).enabled = false;
	
		tb.renderer.enabled = true;
		st.renderer.enabled = true;
	
	
		textMesh.text = "Hey! You with the crazy hair - Come here!";
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
				textMesh.text = "You look like a local, but I’m not up to taking any chances.";
			}else if(PlayerHealth.startMotorChatProg==1){
				PlayerHealth.startMotorChatProg =2;
				textMesh.text = "This is the town of “Motor Cortex.” Weird name, right?";
			}else if(PlayerHealth.startMotorChatProg==2){
				PlayerHealth.startMotorChatProg =3;
				textMesh.text = "Don’t look at me like that. I didn’t name it. Enough with your distractions - We’re in trouble!";
				tw.updateText();
			}else if(PlayerHealth.startMotorChatProg==3){
				PlayerHealth.startMotorChatProg =4;
				textMesh.text = "The evil King Myelin is wreaking havoc on our town. He’s afflicting the citizens with a weird sickness. So are you, or aren’t you a local?";
				tw.updateText();
			}else if(PlayerHealth.startMotorChatProg==4){
				PlayerHealth.startMotorChatProg =5;
				textMesh.text = "You are? Great! So then you have the Motor Cortex ability?";
				tw.updateText();
			}else if(PlayerHealth.startMotorChatProg==5){
				PlayerHealth.startMotorChatProg =6;
				textMesh.text = "Good, when you see a citizen who can't control their body movement, I’ve heard that you can use it to help by clicking the “Motor Cortex” button";
				tw.updateText();	
			}else if (PlayerHealth.startMotorChatProg==6){
				PlayerHealth.startMotorChatProg =7;
				textMesh.text = "What is “click” and what’s a “button?” Beats me.";
			}else if (PlayerHealth.startMotorChatProg==7){
				PlayerHealth.startMotorChatProg =8;
				textMesh.text = "Someone else told me you can press the “Ctrl” button to shoot brainwaves from your head, and that you can run left and right with the “a” and “d” keys.";
				tw.updateText();
			}else if(PlayerHealth.startMotorChatProg==8){
				PlayerHealth.startMotorChatProg = 9;
				textMesh.text = "Oh yea, you can also jump using the “spacebar.”";
			}else if (PlayerHealth.startMotorChatProg==9){
				PlayerHealth.startMotorChatProg = 10;
				textMesh.text = "I don’t really know what all that means, but it’s your problem now, buddy.";
				tw.updateText();
			}else if(PlayerHealth.startMotorChatProg==10){
				PlayerHealth.startMotorChatProg = 11;
				textMesh.text = "Quite frankly, I’m tired of you bugging me. Now make yourself handy and save our city.";
				tw.updateText();
			}else if(PlayerHealth.startMotorChatProg==11){
				PlayerHealth.countDownState = 1;
				this.collider.enabled = false;
				m.GetComponent(CharController2D).enabled = true;
				m.GetComponent(AnimateTexture).enabled = true;
	
				tb.renderer.enabled = false;
				st.renderer.enabled = false;
				PlayerHealth.startMotorChatProg = 12;
				PlayerHealth.startMotorStartDialogue = false;
				PlayerHealth.textDisappear = true;
				m.GetComponent(PlayerAudio).enabled = true;
			}
				
				
		}
	}
}