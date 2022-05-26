var theEmitter: ParticleSystem;
var isEmitting : boolean = false;
var happyMaterial : Material;
var CureType = 9;
private var nearestCitizen;


function OnMouseDown(){
	var pHealth = FindObjectOfType(typeof(PlayerHealth));
	var st:GameObject=GameObject.Find("SickText1");
	var textMesh:TextMesh = st.GetComponent(TextMesh);
	var tb:GameObject=GameObject.Find("TextBackground");
	var guiBonusTime:GameObject=GameObject.Find("GUIBonusTime");

	if (renderer.enabled == true){
		if (isEmitting){
			isEmitting = false;
			theEmitter.Play();
		} else {
			isEmitting = true;
			theEmitter.Play();
			
		}
	}

	if (CureType == pHealth.IllType2){ //If the correct button is clicked, button matches illness
		
		
		if (pHealth.brocaCured == 1){
			PlayerHealth.score = PlayerHealth.score + 1092;
			textMesh.text = "That's much better. Thank you!";
			
		PlayerHealth.TotalCitizensCured = PlayerHealth.TotalCitizensCured + 1;
		AchievementWatcher.CitizensCuredInARow = AchievementWatcher.CitizensCuredInARow + 1;
		
		if (AchievementWatcher.CureFirst == false){
			AchievementWatcher.CureFirst = true;
			AchievementWatcher.CurrentAchievementText = "Helpful";
			AchievementWatcher.notify = true;
		}
		
		if (AchievementWatcher.CitizensCuredInARow == 3 && AchievementWatcher.CureThree == false){
			AchievementWatcher.CureThree = true;
			AchievementWatcher.CurrentAchievementText = "Kind";
			AchievementWatcher.notify = true;
		} else if (AchievementWatcher.CitizensCuredInARow == 10 && AchievementWatcher.CureTen == false){
			AchievementWatcher.CureTen = true;
			AchievementWatcher.CurrentAchievementText = "Benevolent";
			AchievementWatcher.notify = true;
		}
			
			PlayerHealth.HideBrain();

			if (PlayerHealth.ResponseCount == 1){
				PlayerHealth.Increase();
			}
		
		
			PlayerHealth.textDisappear = true;
			guiBonusTime.renderer.enabled = true;
			PlayerHealth.countDown = PlayerHealth.countDown + 10;
			PlayerHealth.countDownState = 1;																				
			
			nearestCitizen = GetNearestTaggedObject();
			nearestCitizen.renderer.material = happyMaterial;
			
			yield WaitForSeconds (3.0);
		
			if (PlayerHealth.textDisappear == true){
				st.renderer.enabled = false;
				tb.renderer.enabled = false;
			}
			guiBonusTime.renderer.enabled = false;

			PlayerHealth.ResetResponseCount(); 		//Reset count
			pHealth.IllType2 = 0;
			
			
		} else {
			textMesh.text = "That mhfgytd a little akjgy.";
			pHealth.wernickeCured = 1;
			
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

		AchievementWatcher.CitizensCuredInARow = 0;
		AchievementWatcher.CuredAllInLevel = false;
				
		PlayerHealth.Decrease(); 				//Decrease health
		PlayerHealth.ResetResponseCount(); 		//Reset count
		PlayerHealth.HideBrain();		
		PlayerHealth.textDisappear = true;
		PlayerHealth.TotalCitizensFailed = PlayerHealth.TotalCitizensFailed + 1;
				
		
		PlayerHealth.countDownState = 1;	
		

		textMesh.text = "(you hear a soft voice in the distance) Step aside mortal. This is a simple " + pHealth.IllText + " issue. I'll take care of it this time, but this failure will not go unpunished. SHAZAM!";
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

function GetNearestTaggedObject() : Transform {
    // and finally the actual process for finding the nearest object:
 
    var nearestDistanceSqr = Mathf.Infinity;
    var taggedGameObjects = GameObject.FindGameObjectsWithTag("citizen"); 
    var nearestObj : Transform = null;
 	
 	
    // loop through each tagged object, remembering nearest one found
    for (var obj : GameObject in taggedGameObjects) {
 
        var objectPos = obj.transform.position;
        var distanceSqr = (objectPos - transform.position).sqrMagnitude;
 
        if (distanceSqr < nearestDistanceSqr) {
            nearestObj = obj.transform;
            nearestDistanceSqr = distanceSqr;
        }
    }
 
    return nearestObj;
}