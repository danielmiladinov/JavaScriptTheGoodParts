if (!Object.hasOwnProperty('create')) {
    Object.create = function (object, properties) {
        var result;

        function F() {};
        F.prototype = object;
        result = new F();

        if (properties !== undefined) {
            Object.defineOwnProperties(object, properties);
        }

        return result;
    }
}
