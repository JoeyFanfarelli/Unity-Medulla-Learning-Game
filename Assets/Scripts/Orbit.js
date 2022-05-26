var target: Transform;
var speed: float;


function Start () {

}

function Update () {
	if (target != null) {
       transform.RotateAround(target.position, Vector3.forward, speed * Time.deltaTime);
    }

}