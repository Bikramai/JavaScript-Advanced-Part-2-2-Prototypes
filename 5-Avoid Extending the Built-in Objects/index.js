// You should avoid not to modify the built-in objects in JavaScript.
// coz it is possible, in future if some one changes or added the shuffle method
// but with a different implementation then you 
// would end up spending the whole day.

Array.prototype.shuffle = function() {
    //...
}

const array = [];
array.shuffle();