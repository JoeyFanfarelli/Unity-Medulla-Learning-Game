//Script makes an object spin, when dragged onto it

var speed:float=1.0;



function Update () {
	transform.Rotate(Vector3(0,speed,0));
}