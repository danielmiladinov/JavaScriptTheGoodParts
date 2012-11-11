if (!Array.prototype.hasOwnProperty('reduce')) {
    Array.prototype.reduce = function (fun, initialValue) {
        var i, length = this.length;

        for (i = 0; i < length; i += 1) {
            if (this.hasOwnProperty(i)) {
                initialValue = fun.call(undefined, initialValue, this[i], i, this);
            }
        }

        return initialValue;
    };
}
