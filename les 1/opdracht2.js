/*
#####*2: Objects (30 minuten)*
---
**Opdracht 2.1: Constructor object**  
Maak met een object constructor een ‘Persoon’-object aan met de property ‘name’ en de method ‘speak’. 
En maak een nieuwe instantie aan van dit object waarbij je de naam ‘Bob’ meegeeft als parameter van het object 
*/

var Person = function(name) {
	this.name = name;

	this.speak = function() {

		console.log('Ik ben ' + this.name);

	};
};

var bob = new Person('Bob');
bob.speak();


/*
**Opdracht 2.2: Prototype**  
Voeg de methods ‘walk’ en ‘eat’ toe aan het ‘Persoon’-object met de prototype function van het object
*/

Person.prototype.walk = function() {
	console.log(this.name + ' is aan het lopen');
};

Person.prototype.eat = function() {
	console.log(this.name + ' is aan het eten');
};

/*
**Opdracht 2.3: Object Literal**  
Maak nu hetzelfde object, met dezelfde properties en methods aan met een object literal
*/

var bob = {
	name: "bob",
	speak: function(){
		console.log('Ik ben ' + this.name);
	},
	walk: function() {
		console.log(this.name + ' is aan het lopen');
	},
	eat: function(){
		console.log(this.name + ' is aan het eten');
	}
};