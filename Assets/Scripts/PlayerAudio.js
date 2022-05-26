#pragma strict
var jump : AudioClip;
var fire : AudioClip;


function Update () {
	if(Input.GetKeyDown("space")){
			audio.clip = jump;
			audio.Play();
		
	}
	
	if(Input.GetButtonDown("Fire1")){
			audio.clip = fire;
			audio.Play();
	
	}


}

