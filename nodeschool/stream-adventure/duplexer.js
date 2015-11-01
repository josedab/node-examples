
// Write a program that exports a function that spawns a process from a `cmd`
// string and an `args` array and returns a single duplex stream joining together
// the stdin and stdout of the spawned process:

//     var spawn = require('child_process').spawn;

//     module.exports = function (cmd, args) {
//         // spawn the process and return a single stream
//         // joining together the stdin and stdout here
//     };

var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function (counter) {
    var ps = spawn(cmd, args);
    return duplexer(ps.stdin, ps.stdout);
};

// TODO
// Fix solution with duplexer. Maybe wrong version based on the github issues comment
// https://github.com/substack/stream-adventure/issues/155
// TAP version 13
// # (anonymous)
// ok 1 stream-adventure verify YOURFILE.js
// ok 2 solution exports a function
// not ok 3 should be equal
//   ---
//     operator: equal
//     expected:
//       'bake\nbequeath\nbiscuit\nbat\nbat\nboolean\nballoon\nbiscuit\nbite\nbite\nbeetle\nballoon\nbat\nbeet'
//     actual:
//       'bake\nbequeath'
//     at: ConcatStream.<anonymous> (/Users/jose/.nvm/versions/v4.0.0/lib/node_modules/stream-adventure/node_modules/concat-stream/index.js:36:43)
//   ...

// 1..3
// # tests 3
// # pass  2
// # fail  1

// #########################################
// ###   YOUR SOLUTION IS NOT CORRECT!   ###
// #########################################


