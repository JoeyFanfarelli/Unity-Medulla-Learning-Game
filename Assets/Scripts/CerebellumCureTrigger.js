#pragma strict

function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		var pHealth = FindObjectOfType(typeof(PlayerHealth));
		var textWrap = FindObjectOfType(typeof(TextWrap));
		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		textMesh.text = "<color=red>My balance isn't right</color>. Involuntary 'trust fall' incoming!";
		textWrap.updateText();
		
		pHealth.IllType = 2;
		PlayerHealth.ShowBrain();
		PlayerHealth.countDownState = 0;
		PlayerHealth.textDisappear = false;
		collider.enabled = false;

	}
}