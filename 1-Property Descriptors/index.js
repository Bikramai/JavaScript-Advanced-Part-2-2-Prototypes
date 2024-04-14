let person = { name: 'Bikram' };

// we don't need these lines anymore
// let objectBase = object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'tostring');
// console.log(descriptor);


// we use this to define a getter and a setter for the property.
Object.defineProperty(person, 'name', {
    writable: false,  // readonly
    enumerable: false,  // this will not show up object.keys, but if it was true it will show up
    configurable: false // can't delete the property
});

person.name = 'John';

console.log(person);
console.log(Object.keys(person))

// Note:- that in console, the name is not changed, so that's the writable attribute.

// In contrast, if it was true, by default all the attributes are true.

