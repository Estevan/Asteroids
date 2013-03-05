#pragma strict

//asteroid rotation speed
var rotationSpeed:float;

function Start () {
	//set rotation speed of asteroid to be randomly set between values
	rotationSpeed = Random.Range(8.0, 20.0);
}

function Update () {
	//rotate asteroid forward (z axis) at the random speed set in rotationSpeed
	transform.Rotate(Vector3.forward*rotationSpeed*Time.deltaTime);
}