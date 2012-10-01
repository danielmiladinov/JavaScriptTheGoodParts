// Javascript functions let you create modules
// which help prevent naming conflicts

// Define a function which instantiates an object, its public and
// private methods, and immediately execute it (it returns the object)
NAMESPACE.module = (function () {
    var privateVariable;

    function privateFunction(x) {
        // do something with x and privateVariable
    }

    return {
        // public functions!
        firstMethod: function (a, b) {
            // privateVariable has scope here, not just a & b
        },

        secondMethod: function (c) {
            // you can call privateFunction here as well
        }
    };
}());


// Or, a variation on the above could look like this:
(function() {
    var privateVariable;

    function privateFunction(x) {
        // do something with x and privateVariable
    }

    GLOBAL.firstMethod = function (a, b) {
        // privateVariable has scope here, not just a & b
    };

    GLOBAL.secondMethod = function (c) {
        // you can call privateFunction here as well
    };
}());

// Please note that in this second example, the outermost parentheses
// are REQUIRED in order for it to be a function expression and not just
// a function statement.
