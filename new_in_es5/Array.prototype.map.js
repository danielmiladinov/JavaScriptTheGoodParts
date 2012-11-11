// Create a new array by mapping the specified function to each element
if (!Array.prototype.hasOwnProperty('map')) {
    Array.prototype.map = function (fun, thisp) {
        var i,
            length = this.length,
            result = [];

        for (i = 0; i < length; i += 1) {

            if (this.hasOwnProperty(i)) {
                result[i] = fun.call(thisp, this[i], i, this);
            }
        }

        return result;
    };
}
