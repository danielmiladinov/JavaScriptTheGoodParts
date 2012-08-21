// The outer function executes immediately, and it returns the inner function.
// The inner function is a closure, and retains access to the names array for
// as long as digit_names has scope.
var digit_name = function () {
    var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    return function (n) {
        return names[n];
    }
}(); // Here is the outer function being called.

alert(digit_name(3)); // 'three'
