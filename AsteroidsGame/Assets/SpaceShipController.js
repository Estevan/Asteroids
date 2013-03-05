#pragma strict
//to control speed of spaceship
var speed:int;

var leftmost:float;
var rightmost:float;
var topmost:float;
var bottommost:float;

function Start () {

	speed = 10;

}

function Update () {

	speed = 10;
	
	//toggle speed
	if (Input.GetKey(KeyCode.Space))
	{
		speed = 20;
	}




	//spaceship moves up and down (Time.deltaTime: frames - every pc will react the same)
	transform.Translate(Vector3.up*speed*Time.deltaTime*Input.GetAxis("Vertical"));
	//spaceship rotates (-4o = speed)
	transform.Rotate(Vector3.forward*-40*Time.deltaTime*Input.GetAxis("Horizontal"));
	
	//x coordinates
	if(transform.position.x > (borderController.rightmost-1))
	{
		transform.position.x = (borderController.leftmost+1);
	}
	
	if(transform.position.x < (borderController.leftmost+1))
	{
		transform.position.x = (borderController.rightmost-1);
	}
	
	//y coordinates
	if(transform.position.y > (borderController.topmost-1))
	{
		transform.position.y = (borderController.bottommost+1);
	}
	
	if(transform.position.y < (borderController.bottommost+1))
	{
		transform.position.y = (borderController.topmost-1);
	}
	

	
}