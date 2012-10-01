// Two versions of a function that do the exact same thing

function factorial(n) {
    var result = 1;                 // result: variable
    while (n > 1) {
        result *= n;
        n -= 1;
    }
    return result;
}

function factorial(n) {
    return (function(result) {      // result: parameter
        while (n > 1) {
            result *= n;
            n -= 1;
        }
        return result;
    )(1));
}
