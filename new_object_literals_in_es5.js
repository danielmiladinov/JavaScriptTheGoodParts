// New Object Literals in ES5

// This old syntax: 
var my_object = {foo: bar};

// Is equivalent to this
var my_object = Object.defineProperties(
    Object.create(Object.prototype), 
    {
        foo: {
            value: bar,
            writeable: true,
            enumerable: true,
            configurable: true
        }
    }
);
