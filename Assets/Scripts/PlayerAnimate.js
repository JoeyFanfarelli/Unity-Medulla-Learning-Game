#pragma strict
function Start () {
}
function Update () {
var AT = gameObject.GetComponent(AnimateTexture); //Store AnimateTexture Script
if(Input.GetKey("a")){ 
//Player moves left
AT.rowNumber = 0;
AT.colNumber = 1;
AT.totalCells = 2; 
//Change to running animation
} else if(Input.GetKey("d")){ 
//Player moves right
AT.rowNumber = 0;
AT.colNumber = 1;
AT.totalCells = 2; 
//Change to running animation
} else { 
//Player is not moving
AT.totalCells = 1; 
//Change to idle animation!
}
}