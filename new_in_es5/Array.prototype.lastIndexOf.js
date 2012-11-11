// Like indexOf but start searching from the end of the array
if (!Array.prototype.hasOwnProperty('lastIndexOf')) {
    Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
        var i = fromIndex;

        if (typeof i !== 'number') {
            i = this.length - 1;
        }

        while (i >= 0) {
            if (this.hasOwnProperty(i) && this[i] === searchElement) {
                return i;
            }
            i -= 1;
        }

        return -1;
    };
}
