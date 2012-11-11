// Accessor Property - looks like C# doesn't it?
Object.defineProperty(my_object, 'inch', {
    get: function () {
        return this.mm / 25.4;
    },
    set: function (value) {
        this.mm = value * 25.4;
    },
    enumerable: true
});
