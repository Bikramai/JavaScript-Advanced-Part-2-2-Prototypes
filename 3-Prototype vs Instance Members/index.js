
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

// How prototypical inheritance works.
// When you access the property or method on an object, JavaScript engine
// first looks at the object itself, if it can't find that property or method,
// it will look at prototype of that object.


// Here is the interesting part. Even though we have another implementation
// of toString method, on objectBase, but this implementation will be used
// coz this in more accessible. So this is all about instance vs prototype members.
// Remember that in both these kind of memgers, you can reference other members.