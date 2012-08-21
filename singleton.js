var singleton = function () {
    var privateVariable;

    function privateFunction(x) {
        /* perhaps do something with privateVariable... */
    };

    return {
        firstMethod: function (a, b) {
            /* privateVariable; */
        },

        secondMethod: function (c) {
            /* privateFunction(c); */
        }
    };
}();
