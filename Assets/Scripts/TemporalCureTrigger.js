#pragma strict

function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		var pHealth = FindObjectOfType(typeof(PlayerHealth));
		var textWrap = FindObjectOfType(typeof(TextWrap));
		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		textMesh.text = "<color=red>Are my ears working?</color> You want to shmelp me? What's shmelp? I don't like the sounds of that..";
		textWrap.updateText();
		
		pHealth.IllType = 8;
		PlayerHealth.ShowBrain();
		PlayerHealth.countDownState = 0;
		PlayerHealth.textDisappear = false;
		collider.enabled = false;
	}
}