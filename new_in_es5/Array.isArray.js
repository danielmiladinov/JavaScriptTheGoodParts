if (!Array.hasOwnProperty('isArray')) {
    Array.isArray = function (value) {
        return Object.prototype.toString.apply(value) === '[object Array]';
    };
}
