var speed = 10;

var projectile : Rigidbody;

var direction;

var dropDelay : float; //Create delay between each drop

var dropDestroyTime : float; //Destroy projectile after this time has elapsed

var redMaterial : Material; //red light indicates it is dangerous to pass under this object

var greenMaterial : Material; //green light indicates it is safe to pass under this object

 

 

 

//Range from Player vars

var moveSpeed = 3; //move speed

var range : float=10f; //proximity to player before activation

var myTransform : Transform; //current transform data of this gameobject

var target : Transform; //Player

private var thisTransform : Transform;

private var velocity : Vector2; //speed of dropped projectile

private var dropState : float; //state variable

private var allowFire : boolean;

 

 

 

function Start(){

    thisTransform = transform;

    dropState = 0;

    allowFire = true;

 

    

    

    

    while (allowFire){

        while(dropState == 0){

            yield(GreenAndStop());

            

        }

        

        while (dropState == 1){

            yield(RedAndDrop());

        

        

        }

    }

}

 

 

function Update(){

    var distance = Vector3.Distance(myTransform.position, target.position); //Calculate distance to see if player is within range

 

    if(distance<=range){

        allowFire = true;

    }

 

}

 

 

function RedAndDrop(){

 

        var projectileStartPosition = transform.position; //Sets projectile start position

        projectileStartPosition.y -= 1; //Drops projectile below the object

        

        renderer.material = redMaterial; //make light red to indicate it is not safe to pass under

        yield WaitForSeconds(1.5); //let it be red for a few seconds to give player a chance to notice

        clone = Instantiate(projectile, projectileStartPosition, transform.rotation); //creates new projectile

        clone.velocity = new Vector3(0,-speed,0); //set projectile velocity

        Destroy (clone.gameObject, dropDestroyTime); //Removes the projectile from the scene

        dropState = 0; //Dropping is finished. 

        allowfire = false;

    

}

 

function GreenAndStop(){

    

        renderer.material = greenMaterial; //make light green to indicate it is safe to pass under

        yield WaitForSeconds(dropDelay); //Reduces firing speed

        dropState = 1; //Safe time is finished

 

}