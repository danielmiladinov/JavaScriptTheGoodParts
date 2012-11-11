// Pass a function to be applied to every element of the array,
// passing each element, the index, and also (unfortunately so, 
// if you ask Crockford) the entire array
if (!Array.prototype.hasOwnProperty('every')) {
    Array.prototype.every = function (fun, thisp) {
        var i, length = this.length;

        for (i = 0; i < length; i += 1) {
            if (this.hasOwnProperty(i) && !fun.call(thisp, this[i], i, this)) {
                return false;
            }
        }

        return true;
    };
}
