// Returns a subset of the array containing only the values for which the provided
// function when applied to them returned true
if (!Array.prototype.hasOwnProperty('filter')) {
    Array.prototype.filter = function (fun, thisp) {
        var i,
            length = this.length,
            result = [],
            value;

        for (i = 0; i < length; i += 1) {

            if (this.hasOwnProperty(i)) {
                value = this[i];

                if (fun.call(thisp, value, i, this)) {
                    result.push(value);
                }
            }
        }

        return result;
    };
}
