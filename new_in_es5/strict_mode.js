// Enabled via a backwards-compatible pragma,
// when you make the following the first line in the function or file:
'use strict';

// (Don't use the file form, as concatenated script files may
// unintentionally force all script to be interpreted as strict

// Strict Mode Features:
// - No more implied global variables within functions.
// - `this` is not bound to the global object by function form.
// - `apply` and `call` do not default to the global object.
// - No `with` statement.
// - Setting a `writeable: false` property will throw.
// - Deleting a `configurable: false` property will throw.
// - Restrictions on `eval`.
// - `eval` and `arguments` are reserved words.
// - arguments not linked to parameters.
// - No more `arguments.caller` or `arguments.callee`.
// - No more octal literals.
// - Duplicate names in an object literal or function parameters are a syntax error.
// - Forgetting to use the `new` prefix will now throw an exception,
//   not silently clobber the global object.  DEATH BEFORE CONFUSION!

// Implications - a breaking change
addEventListener(); // error
window.addEventListener(); // ok

// There are no methods for determining if strict mode is on, but it is easy to make your own.
function in_strict_mode() {
    return (function () {
        return !this;
    }());
}

function strict_mode_implemented() {
    return (function () {
        'use strict';
        return !this;
    }());
}
