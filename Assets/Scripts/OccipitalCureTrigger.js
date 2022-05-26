#pragma strict

function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		var pHealth = FindObjectOfType(typeof(PlayerHealth));

		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		textMesh.text = "<color=red>I can't see</color>. Everything has gone dark. Is anyone there?";
		
		pHealth.IllType = 5;
		PlayerHealth.ShowBrain();
		PlayerHealth.countDownState = 0;
		PlayerHealth.textDisappear = false;
		collider.enabled = false;
		
		
		

	}
}