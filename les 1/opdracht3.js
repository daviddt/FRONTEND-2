/*#####*3: Scope (30 minuten)*
---
**Opdracht 3.1: Local Scope**  
Maak met behulp van een function een local scope aan 
en definieer in deze local scope de variables ‘iterator’, ‘max’ en ‘min’ aan
*/

(function(){

	var iterator;
	var max;
	var min;

})();

/*
**Opdracht 3.2: Global Scope**  
Maak dezelfde variables nu ook aan in de global scope
*/

var iterator;
var max;
var min;

/*
**Opdracht 3.3: Closure**  
Leg uit wat een closure is en maak een code voorbeeld
*/

for (var i = 1; i < 100; i++) {
	setTimeout((function(){
		console.log(i);
	})(), 500);
}