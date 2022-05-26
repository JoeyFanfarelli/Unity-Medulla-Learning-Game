

function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		var tb:GameObject=GameObject.Find("TextBackground");
		var m:GameObject=GameObject.Find("MainChar");
		var tw = FindObjectOfType(typeof(TextWrap));
		
		PlayerHealth.startMotorEndDialogue = false;
		PlayerHealth.startPrefrontalCortexEndDialogue = true;
		PlayerHealth.textDisappear = false;
		PlayerHealth.countDownState = 0;
		m.GetComponent(CharController2D).enabled = false;
		m.GetComponent(AnimateTexture).enabled = false;
		m.GetComponent(PlayerAudio).enabled = false;
	
		tb.renderer.enabled = true;
		st.renderer.enabled = true;
	
	
		textMesh.text = "Thaaank you, my friend. Destroying this research facility is a maaajor step toward saving the planet of Medulla.";
		tw.updateText();
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
		if (PlayerHealth.startPrefrontalCortexEndDialogue==true){
			//if(PlayerHealth.endMotorChatProg ==0){
			//	PlayerHealth.endMotorChatProg =1;
			//	textMesh.text = "I’m sorry but our princess is in another cas… No, that’s not right.";
			//	tw.updateText();
			//}else if(PlayerHealth.endMotorChatProg==1){
			if (PlayerHealth.endMotorChatProg == 0){
				PlayerHealth.endMotorChatProg =1;
				textMesh.text = "Onward now. Do not forgeeet the <color=red>Prefrontal Cortex</color> power and its ability to promote <color=red>social behavior</color> and <color=red>decision making</color>.";
				tw.updateText();
			}else if(PlayerHealth.endMotorChatProg==1){
				PlayerHealth.endMotorChatProg =2;
				textMesh.text = "Also, do not forgeeet to bring me tiny little bunny rabbit with soft soft fur.";
				tw.updateText();
			}else if(PlayerHealth.endMotorChatProg==2){
				PlayerHealth.endMotorChatProg =3;
				textMesh.text = "Hisss…";
				tw.updateText();
			}else if(PlayerHealth.endMotorChatProg==3){
				PlayerHealth.countDownState = 1;
				this.collider.enabled = false;
				m.GetComponent(CharController2D).enabled = true;
				m.GetComponent(AnimateTexture).enabled = true;
	
				tb.renderer.enabled = false;
				st.renderer.enabled = false;
				PlayerHealth.endMotorChatProg = 4;
				PlayerHealth.startMotorEndDialogue = false;
				PlayerHealth.textDisappear = true;
				m.GetComponent(PlayerAudio).enabled = true;
			}
			/*}else if(PlayerHealth.endMotorChatProg==4){
				PlayerHealth.endMotorChatProg =5;
				textMesh.text = "Ahem.. the evil 'SIR THOR THE DESTROYER(TM)' was sighted heading toward the town of Occipital, and who knows where he’ll go next.";
				tw.updateText();	
			}else if (PlayerHealth.endMotorChatProg==5){
				PlayerHealth.endMotorChatProg =6;
				textMesh.text = "...Seriously? You don't know who he is? He's the guy who is making everyone sick! You're not a very educated hero... but you'll have to do, I suppose.";
				tw.updateText();
			}else if(PlayerHealth.endMotorChatProg==6){
				PlayerHealth.endMotorChatProg = 7;
				textMesh.text = "Don't just stand there! GET GOING!";
			}else if(PlayerHealth.endMotorChatProg==7){
				PlayerHealth.countDownState = 1;
				this.collider.enabled = false;
				m.GetComponent(CharController2D).enabled = true;
				m.GetComponent(AnimateTexture).enabled = true;
	
				tb.renderer.enabled = false;
				st.renderer.enabled = false;
				PlayerHealth.endMotorChatProg = 8;
				PlayerHealth.startMotorEndDialogue = false;
				PlayerHealth.textDisappear = true;
				m.GetComponent(PlayerAudio).enabled = true;
			}*/
				
				
		}
	}
}