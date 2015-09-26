// x => x + 1
// means: function(x) { return x + 1; }
// Put any expression on the right side of the => and it will become the return value.
// (x,y) => x + y
// means: function(x,y) { return x + y; }

// Map all incoming strings down to the first character
// Reduce into one strings

var inputs = process.argv.slice(2);
var result = inputs.map(word => word[0])
                   .reduce((character, total) => character += total);
console.log(`[${inputs}] becomes "${result}"`);
