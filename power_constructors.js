/**
Power Constructors

1. Make an object - one of the following ways:
 * Object literal
 * new
 * Object.create
 * call another power constructor

2. Define some variables and functions.
 * These become private members of the object under construction

3. Agument the object with privileged methods.
 * These methods have unique access to the properties defined in Step 2.

4. Return the object.
*/

function myPowerConstructor(x) {
    var that = otherMaker(x);
    var secret = f(x);
    that.privilegedMethod = function () {
        // secret;
        // x;
        // that;
    };
    return that;
};
