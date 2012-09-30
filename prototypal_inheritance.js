var gizmo = new_constructor(Object, function(id) {
    this.id = id;
}, {
    toString: function () {
        return "gizmo " + this.id;
    }
});

var hoozit = new_constructor(gizmo, function(id) {
    this.id = id;
}, {
    test: function(id) {
        return this.id === id;
    }
});

function new_constructor(extend, initializer, methods) {
    var func, prototype = Object.create(extend && extend.prototype);

    if (methods) {
        methods.keys().forEach(function (key) {
            prototype[key] = methods[key];
        });
    }

    func = function () {
        var that = Object.create(prototype);
        if (typeof initializer === 'function') {
            initializer.apply(that, arguments);
        }
        return that;
    }

    func.prototype = prototype;
    prototype.constructor = func;
    return func;
}
