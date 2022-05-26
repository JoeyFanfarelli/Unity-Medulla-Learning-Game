function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		var tb:GameObject=GameObject.Find("TextBackground");
		var m:GameObject=GameObject.Find("MainChar");
		var tw = FindObjectOfType(typeof(TextWrap));
		
		
		PlayerHealth.startMotorEndDialogue = false;
		PlayerHealth.startTemporalEndDialogue = true;
		PlayerHealth.textDisappear = false;
		PlayerHealth.countDownState = 0;
		m.GetComponent(CharController2D).enabled = false;
		m.GetComponent(AnimateTexture).enabled = false;
		m.GetComponent(PlayerAudio).enabled = false;
	
		tb.renderer.enabled = true;
		st.renderer.enabled = true;
	
	
		textMesh.text = "Good day, young friend. You have saved our city. Did you call me sir? NOW THAT IS...";
		tw.updateText();
	}
	
}


function Update () {
	var st:GameObject=GameObject.Find("SickText1");
	var textMesh:TextMesh = st.GetComponent(TextMesh);
	var tb:GameObject=GameObject.Find("TextBackground");
	var m:GameObject=GameObject.Find("MainChar");
	var pa:GameObject=GameObject.Find("Player Audio");
	var tw = FindObjectOfType(typeof(TextWrap));
	
	if (Input.GetButtonDown("Space")){
		if (PlayerHealth.startTemporalEndDialogue==true){
			//if(PlayerHealth.endMotorChatProg ==0){
			//	PlayerHealth.endMotorChatProg =1;
			//	textMesh.text = "I’m sorry but our princess is in another cas… No, that’s not right.";
			//	tw.updateText();
			//}else if(PlayerHealth.endMotorChatProg==1){
			if (PlayerHealth.endMotorChatProg == 0){
				PlayerHealth.endMotorChatProg =1;
				textMesh.text = "witty.";
				tw.updateText();
			}else if(PlayerHealth.endMotorChatProg==1){
				PlayerHealth.endMotorChatProg =2;
				textMesh.text = "Is it my beard that confuses you? I have not a clue.";
				tw.updateText();
			}else if(PlayerHealth.endMotorChatProg==2){
				PlayerHealth.endMotorChatProg =3;
				textMesh.text = "I am a woman, though I’m less trimmed than you.";
				tw.updateText();
			}else if(PlayerHealth.endMotorChatProg==3){
				PlayerHealth.endMotorChatProg =4;
				textMesh.text = "Never mind all of that, it’s time for you to go. It seems you’re becoming quite the hero.";
				tw.updateText();
			}else if(PlayerHealth.endMotorChatProg==4){
				PlayerHealth.endMotorChatProg =5;
				textMesh.text = "Never forget <color=red>Temporal</color> is <color=red>hearing</color>.";
				tw.updateText();	
			}else if (PlayerHealth.endMotorChatProg==5){
				PlayerHealth.endMotorChatProg =6;
				textMesh.text = "It’s a phrase and a thought that is always worth bearing.";
				tw.updateText();	
			}else if(PlayerHealth.endMotorChatProg==6){
				PlayerHealth.countDownState = 1;
				this.collider.enabled = false;
				m.GetComponent(CharController2D).enabled = true;
				m.GetComponent(AnimateTexture).enabled = true;
				tb.renderer.enabled = false;
				st.renderer.enabled = false;
				PlayerHealth.endMotorChatProg = 7;
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