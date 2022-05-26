
function OnTriggerEnter (other: Collider) {
	
	PlayerHealth.ResetResponseCount();
	if (other.tag=="Player"){
		var pHealth = FindObjectOfType(typeof(PlayerHealth));
		var textWrap = FindObjectOfType(typeof(TextWrap));
		var st:GameObject=GameObject.Find("SickText1");
		var textMesh:TextMesh = st.GetComponent(TextMesh);
		textMesh.text = "<color=red>aiszfgg. siiiytutkn asp qq i gka. ALDI!!!!.</color>";
		textWrap.updateText();
		
		pHealth.IllType = 1;
		pHealth.IllType2 = 9;
		pHealth.wernickeCured = 0;
		pHealth.brocaCured = 0;
		PlayerHealth.ShowBrain();
		PlayerHealth.countDownState = 0;
		PlayerHealth.textDisappear = false;
		collider.enabled = false;
		
	}
}