

function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		PlayerHealth.endMotorChatProg = 0;
		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		var tb:GameObject=GameObject.Find("TextBackground");
		var m:GameObject=GameObject.Find("MainChar");
		
		
		PlayerHealth.startMotorEndDialogue = false;
		PlayerHealth.startMedullaEndDialogue = true;
		PlayerHealth.textDisappear = false;
		PlayerHealth.countDownState = 0;
		m.GetComponent(CharController2D).enabled = false;
		m.GetComponent(AnimateTexture).enabled = false;
		m.GetComponent(PlayerAudio).enabled = false;
	
		tb.renderer.enabled = true;
		st.renderer.enabled = true;
	
	
		textMesh.text = "They’re all gone? <color=red>Medulla</color> is safe? ..perhaps my <color=red>heart</color> can return to normal..";
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
		if (PlayerHealth.startMedullaEndDialogue==true){
			//if(PlayerHealth.endMotorChatProg ==0){
			//	PlayerHealth.endMotorChatProg =1;
			//	textMesh.text = "I’m sorry but our princess is in another cas… No, that’s not right.";
			//	tw.updateText();
			//}else if(PlayerHealth.endMotorChatProg==1){
			if (PlayerHealth.endMotorChatProg == 0){
				PlayerHealth.endMotorChatProg =1;
				textMesh.text = "I think I’ll just take it slow…";
				tw.updateText();
			}else if(PlayerHealth.endMotorChatProg==1){
				PlayerHealth.endMotorChatProg =2;
				textMesh.text = "I guess you should go help Parietal now… or you could say ‘screw that’ and be our personal 24 hour guardian. I’d really be ok with that.";
				tw.updateText();
			}else if(PlayerHealth.endMotorChatProg==2){
				PlayerHealth.endMotorChatProg =3;
				textMesh.text = "No? You’d prefer to go and die a gruesome death? Alright, but don’t forget about your <color=red>Medulla</color> power and its ability to fix <color=red>heartbeats</color>.";
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