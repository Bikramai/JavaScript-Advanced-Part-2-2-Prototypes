// Now one thing i want to emphasize here is that it doesn't matter 
// when you change the prototype.

// How to iterate over instance vs. prototype properties. 
function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        this.draw();
        console.log('move');
    }
}

    // Prototype members
    Circle.prototype.draw = function() {
        console.log('draw');
    }  


const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}

c1.draw();

// Returns instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype) in js we often use own instead of instance.
for (let key in c1) console.log(key);
