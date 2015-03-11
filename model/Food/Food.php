<?php

class Food {
	private $id;
	private $type;
	private $position;
	private $name;
	private $recipe;
	private $misc;
	private $price;

	public function getId(){return  $this->id;}
	public function getType(){return $this->type;}
	public function getPosition(){return $this->position;}
	public function getName(){return $this->name;}
	public function getRecipe(){return $this->recipe;}
	public function getMisc(){return $this->misc;}
	public function getPrice(){return $this->price;}

	public function setType($name){$this->type = $name;}
	public function setPosition($position){$this->position = $position;}
	public function setName($name){$this->name = $name;}
	public function setRecipe($recipe){$this->recipe = $recipe;}
	public function setMisc($misc){$this->misc = $misc;}
	public function setPrice($price){$this->price = $price;}

}

?>

