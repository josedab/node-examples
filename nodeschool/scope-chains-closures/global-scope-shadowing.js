// # Your Mission

// Starting with your solution from the previous lesson, assign a value to quux
// inside foo() (don't use var or let). The value should be different to the
// value assigned when defining quux inside zip().

// Once complete, execute scope-chains-closures verify <your-file.js> to verify your
// solution.


function foo() {
	var bar;
	quux = 2;
	function zip() {
        var quux;
	}
}