#pragma strict

var MoveUp : KeyCode;
var MoveDown : KeyCode;
var MoveLeft : KeyCode;
var MoveRight : KeyCode;


var speed : float = 10;

function Update ()
{
	if (Input.GetKey(MoveUp))
	{
		rigidbody2D.velocity.y = speed;
		//rigidbody2D.AddForce(10f);
	}
	else if (Input.GetKey(MoveDown))
	{
		rigidbody2D.velocity.y = speed * -1;
	}
	else if (Input.GetKey(MoveLeft))
	{
		rigidbody2D.velocity.x = speed * -1;
	}
	else if (Input.GetKey(MoveRight))
	{
		rigidbody2D.velocity.x = speed;
	}
	else
	{
		rigidbody2D.velocity.y = 0;
		rigidbody2D.velocity.x = 0;
	}


}