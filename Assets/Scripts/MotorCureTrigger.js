#pragma strict

function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		var pHealth = FindObjectOfType(typeof(PlayerHealth));

		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		textMesh.text = "You! Please help! <color=red>I can't control my body!</color>";
		
		pHealth.IllType = 4;
		PlayerHealth.ShowBrain();
		PlayerHealth.countDownState = 0;
		PlayerHealth.textDisappear = false;
		collider.enabled = false;

	}
}