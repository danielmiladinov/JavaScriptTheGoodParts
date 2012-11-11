// A currying function which allows you to create a function which calls a method,
// binding `this` for you, making it easy to pass methods into callbacks.
if (!Function.prototype.hasOwnProperty('bind')) {
    Function.prototype.bind = function (object) {
        var slice = Array.prototype.slice,
            func = this,
            args = slice.call(arguments, 1);

        return function () {
            return func.apply(object, args.concat(slice.call(arguments, 0)));
        };
    };
}
