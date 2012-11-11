if (!Array.prototype.hasOwnProperty('reduceRight')) {
    Array.prototype.reduceRight = function (fun, initialValue) {
        var i, length = this.length - 1;

        while (i >= 0) {
            if (this.hasOwnProperty(i)) {
                initialValue = fun.call(undefined, initialValue, this[i], i, this);
            }
            i -= 1;
        }

        return initialValue;
    };
}
