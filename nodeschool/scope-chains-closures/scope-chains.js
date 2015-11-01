// # Your Mission

// Modify your solution from lesson 1 so foo contains a function zip
// which itself contains one variable lexically scoped called quux

// Once complete, execute scope-chains-closures verify <your-file.js> to verify your
// solution.

function foo() {
	var bar;
	function zip() {
        var quux;
	}
}