if (!Object.hasOwnProperty('keys')) {
    Object.keys = function (object) {
        var name, result = [];

        for (name in object) {
            if (Object.prototype.hasOwnProperty.call(object, name)) {
                result.push(name);
            }
        }

        return result;
    }:
}
