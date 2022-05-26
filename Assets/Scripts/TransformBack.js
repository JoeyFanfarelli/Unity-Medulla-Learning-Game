var variableMaterial : Material;



function OnTriggerEnter (other: Collider) {
	
	if (other.tag=="Player"){
		PlayerHealth.m.renderer.material = variableMaterial;
		PlayerHealth.pShooting.enabled = true;

	}
}