
function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		var tb:GameObject=GameObject.Find("TextBackground");
		var m:GameObject=GameObject.Find("MainChar");
		
		PlayerHealth.startMotorMidDialogue = true;
		PlayerHealth.textDisappear = false;
		PlayerHealth.countDownState = 0;
		m.GetComponent(CharController2D).enabled = false;
		m.GetComponent(AnimateTexture).enabled = false;
		m.GetComponent(PlayerAudio).enabled = false;
	
		tb.renderer.enabled = true;
		st.renderer.enabled = true;
	
	
		textMesh.text = "(Something feels strange)";
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
		if (PlayerHealth.startMotorMidDialogue==true){
			if(PlayerHealth.midMotorChatProg ==0){
				PlayerHealth.midMotorChatProg =1;
				textMesh.text = "(You start to feel disoriented)";
			}else if(PlayerHealth.midMotorChatProg==1){
				PlayerHealth.midMotorChatProg =2;
				textMesh.text = "(Your body begins to feel out of your control)";
			}else if(PlayerHealth.midMotorChatProg==2){
				PlayerHealth.midMotorChatProg =3;
				textMesh.text = "Oh no...";
				tw.updateText();
			}else if(PlayerHealth.midMotorChatProg==3){
				PlayerHealth.midMotorChatProg =4;
				textMesh.text = "Myelin is trying to control YOU!";
				tw.updateText();
			}else if(PlayerHealth.midMotorChatProg==4){
				PlayerHealth.midMotorChatProg =5;
				textMesh.text = "Fight it!";
				tw.updateText();
			}else if(PlayerHealth.midMotorChatProg==5){
				PlayerHealth.midMotorChatProg =6;
				textMesh.text = "You are Medulla's only hope.";
				tw.updateText();	
			}else if (PlayerHealth.midMotorChatProg==6){
				PlayerHealth.midMotorChatProg =7;
				textMesh.text = "Do. Not. Give. In.";
			}else if(PlayerHealth.midMotorChatProg==7){
				PlayerHealth.countDownState = 1;
				this.collider.enabled = false;
				m.GetComponent(CharController2D).enabled = true;
				m.GetComponent(AnimateTexture).enabled = true;
	
				tb.renderer.enabled = false;
				st.renderer.enabled = false;
				PlayerHealth.midMotorChatProg = 8;
				PlayerHealth.startMotorMidDialogue = false;
				PlayerHealth.textDisappear = true;
				m.GetComponent(PlayerAudio).enabled = true;
			}
				
				
		}
	}
}