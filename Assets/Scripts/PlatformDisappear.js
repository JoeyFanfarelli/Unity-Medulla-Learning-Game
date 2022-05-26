var disappearInterval = 100;
var disappearTimer = 100;

function Start () {
disappearTimer = 100;
Time.timeScale = 1.0f;

}

function Update () {

	disappearTimer -= Time.deltaTime;
	if (disappearTimer < 1){
		PlatformDisappear();
	}
}

function PlatformDisappear(){
	renderer.enabled = false;
	yield WaitForSeconds(disappearTimer);
	renderer.enabled = true;
	disappearTimer = 100;
}