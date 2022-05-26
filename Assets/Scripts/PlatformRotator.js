//private var Xpos : float;
//private var max : boolean;
//var maxAmount : int;
//var step : float;

//var maxAngle = 90.0;

//function Start () {
	//Xpos = transform.eulerAngles.x;
//}


//function Update () {
	//var angle : float;
	
	

	//SET THE MAX
	//if(transform.eulerAngles.x >= Xpos + maxAngle){
	//	max = true;
	//} else if(transform.eulerAngles.x <= Xpos){
	//	max = false;
	//}	

	//if(!max){
	//	transform.Rotate(0, 1.0 * Time.deltaTime,0);; 
	//}else{
	//	transform.Rotate(0, 1.0 * Time.deltaTime,0);;
	//}
	

//}


// Smoothly tilts a transform towards a target rotation.

	
	function Update () {
		transform.rotation = Quaternion.Euler(transform.rotation.x+10 * Time.deltaTime,0f,0f);
	}