#pragma strict

function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		var pHealth = FindObjectOfType(typeof(PlayerHealth));
		var textWrap = FindObjectOfType(typeof(TextWrap));
		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		textMesh.text = "Despite that oddly large head of yours, you're really lacking in brains. What? <color=red>That's inappropriate behavior?</color> Sorry, I'm having a hard time <color=red>making good decisions.</color>";
		textWrap.updateText();
		
		pHealth.IllType = 7;
		PlayerHealth.ShowBrain();
		PlayerHealth.countDownState = 0;
		PlayerHealth.textDisappear = false;
		collider.enabled = false;
		
	}
}