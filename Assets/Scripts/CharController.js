var normalSpeed:float=6.0;
private var speed:float=normalSpeed;
var runSpeed:float=12.0;
private var jumpSpeed:float=speed*1.7;
var gravity:float=20.0;
private var walkTime:int=0; //(run after walkTime)
private var moveDirection:Vector3=Vector3.zero;
static var grounded:boolean=false; //On ground or in air?
private var controller:CharacterController;
private var flags:CollisionFlags;
private var tr:int=90; //target rotation(tr). Facing right initially

function Start(){
	animation.wrapMode=WrapMode.Loop; //Loop all animations by default
	animation["run"].layer=-1;
	animation["walk"].layer=-1;
	animation["idle"].layer=-1;
	animation.SyncLayer(-1); //Sync everything above to layer -1
	
	animation["jump"].layer=10;
	animation["jump"].wrapMode=WrapMode.Once; //Plays once, no loop while in air
	animation.SyncLayer(10); //Sync everything above to layer 10

	animation.Stop(); //Stop animation?
	animation.Play("idle"); //Play idle animation at start

}

function FixedUpdate(){
	if(grounded){
		moveDirection=new Vector3(Input.GetAxis("Horizontal"),0,0); //returns a number between -1 and 1 for x axis, depending on left or right arrow being pushed. 0 if no arrow
		moveDirection*=speed; //set directional speed
		if(Input.GetButton("Jump")){
			moveDirection.y=jumpSpeed; //set jump speed
			animation.CrossFade("jump"); //play jump animation.. blended from previous animation (CrossFade)
		}
		
	}else{ //Remove else statement, and next 2 lines to disable changing direction in midair
		moveDirection=new Vector3(Input.GetAxis("Horizontal"),moveDirection.y/speed,0);
		moveDirection*=speed;
	}
		
		

	moveDirection.y-=gravity*Time.deltaTime; //set gravity
	controller=GetComponent(CharacterController);
	flags=controller.Move(moveDirection*Time.deltaTime);
	
	grounded=(flags & CollisionFlags.CollidedBelow) !=0; //True if not 0, False if it is.
	
	/*if(moveDirection.x>0){ //determine which direction we were moving, and rotate to face that direction
		tr=90; //right
		}else if(moveDirection.x<0){
		tr=270; //left
		}
		transform.eulerAngles.y-=(transform.eulerAngles.y-tr)/5; //ease toward target direction. Finds diff between current rotation and tr, and moves towards it. Divide diff by 5
	*/
	
	if(Input.GetAxis("Horizontal")>.2 || Input.GetAxis("Horizontal")<-.2){ 
		if(walkTime>0){ //originally set to walktime>40. Set to >0 to never walk. Only run.
			animation.CrossFade("run"); //Blend into run animation
			speed=runSpeed;	//set appropriate speed
			}else{
			walkTime++; //increment walkTime
			animation.CrossFade("walk"); //Blend into walk animation
			speed=normalSpeed; //set appropriate speed
			}
			jumpSpeed=speed*1.7; //reset jumpSpeed
			}else{
			walkTime=0;
			animation.CrossFade("idle");
			}

}

@script RequireComponent(CharacterController) //add character controller component to object when we drag this onto main character?? No semicolon needed here.