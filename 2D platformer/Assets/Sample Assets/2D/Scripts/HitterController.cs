using UnityEngine;
using System.Collections;

public class HitterController : MonoBehaviour {

	Rigidbody player;
	void start (){
		player = GetComponent<Rigidbody> ();
		player.AddForce (Vector2 (5, 0));
	}



	void FixedUpdate () {
	
		player.AddForce (Vector2 (5, 0));

	}
}
