if (!Array.prototype.hasOwnProperty('forEach')) {
    Array.prototype.forEach = function (fun, thisp) {
        var i, length = this.length;

        for (i = 0; i < length; i += 1) {
            if (this.hasOwnProperty(i)) {
                fun.call(thisp, this[i], i, this);
            }
        }
    };
}
