var theEmitter: ParticleSystem;
var isEmitting : boolean = false;
var happyMaterial : Material;
public static var CureType = 1;



function OnMouseDown(){
	var pHealth = FindObjectOfType(typeof(PlayerHealth));
	var st:GameObject=GameObject.Find("SickText1");
	var textMesh:TextMesh = st.GetComponent(TextMesh);
	var tb:GameObject=GameObject.Find("TextBackground");
	var guiBonusTime:GameObject=GameObject.Find("GUIBonusTime");
	var bc:GameObject=GameObject.Find(PlayerHealth.bossCitizen);

	if (renderer.enabled == true){
		if (isEmitting){
			isEmitting = false;
			theEmitter.Play();
		} else {
			isEmitting = true;
			theEmitter.Play();
			
		}
	}

	if (CureType == pHealth.IllType){ //If the correct button is clicked, button matches illness
		
		
		if (pHealth.wernickeCured == 1){ 
			PlayerHealth.score = PlayerHealth.score + 1092;
			textMesh.text = "That's much better. Thank you!";
			PlayerHealth.HideBrainBoss();

			if (PlayerHealth.ResponseCount == 1){
				PlayerHealth.Increase();
			}
		
		
			PlayerHealth.textDisappear = true;
			guiBonusTime.renderer.enabled = true;
			PlayerHealth.countDown = PlayerHealth.countDown + 10;
			PlayerHealth.countDownState = 1;																				
			bc.renderer.material = happyMaterial;

			if (PlayerHealth.currentBossClick == 1){
				ShootAtMyelin1.isIll = 0;
			}else if (PlayerHealth.currentBossClick == 2){
				ShootAtMyelin2.isIll = 0;
			}else if (PlayerHealth.currentBossClick == 3){
				ShootAtMyelin3.isIll = 0;
			}else if (PlayerHealth.currentBossClick == 4){
				ShootAtMyelin4.isIll = 0;
			}	

			yield WaitForSeconds (3.0);
		
			if (PlayerHealth.textDisappear == true){
				st.renderer.enabled = false;
				tb.renderer.enabled = false;
			}
			guiBonusTime.renderer.enabled = false;

			PlayerHealth.ResetResponseCount(); 		//Reset count
		} else {
			textMesh.text = "That mhfgytd a little akjgy.";
			pHealth.brocaCured = 1;
			
		}	
			
			if (pHealth.ResponseCount == 0){
				PlayerHealth.ResetResponseCount();
				PlayerHealth.Increase();
			}else if (pHealth.ResponseCount == 1){
				PlayerHealth.ResetResponseCount();
			}
		
		
	}else if (pHealth.ResponseCount <= 1){ 		//First screwup
		PlayerHealth.IncreaseResponseCount();  	//Increase count
	}else if (pHealth.ResponseCount == 2){ 		//Second screwup
		var textWrap = FindObjectOfType(typeof(TextWrap));
		
		PlayerHealth.Decrease(); 				//Decrease health
		PlayerHealth.ResetResponseCount(); 		//Reset count
		PlayerHealth.HideBrain();		
		PlayerHealth.textDisappear = true;
				
		
		PlayerHealth.countDownState = 1;	
		

		textMesh.text = pHealth.IllText;
		textWrap.updateText();
		PlayerHealth.textDisappear = true;
		pHealth.IllType2 = 0;
		
		yield WaitForSeconds (3.0);
		if (PlayerHealth.textDisappear == true){
			st.renderer.enabled = false;
			tb.renderer.enabled = false;
		}
		
		
		
	}

}


