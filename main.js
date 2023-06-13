function execOncePerItem(array, funzione, argomento) {
	for (const item of array) {
		funzione(item, argomento);
	}
}

let array = [
	"mela",
	"pera",
	"ananas"
];

execOncePerItem(array, console.log, "qualcosa" );

Array.prototype.faicose = function() { console.log("faccio cose"); }
array.faicose();

// function ready(fn) {
// 	if (document.readyState !== 'loading') {
// 		fn();
// 	} else {
// 		document.addEventListener('DOMContentLoaded', fn); //ToDo: passare event?
// 	}
// }