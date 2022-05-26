#pragma strict

function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		var pHealth = FindObjectOfType(typeof(PlayerHealth));
		var textWrap = FindObjectOfType(typeof(TextWrap));
		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		textMesh.text = "What? I'm being bitten by a spider? On my ear? Haha, yea right, good one. I think I'd notice the <color=red>pain.</color>";
		textWrap.updateText();
		
		pHealth.IllType = 6;
		PlayerHealth.ShowBrain();
		PlayerHealth.countDownState = 0;
		PlayerHealth.textDisappear = false;
		collider.enabled = false;
	}
}