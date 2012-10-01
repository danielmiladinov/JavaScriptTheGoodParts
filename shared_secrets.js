function gizmo(id, secret) {
    secret = secret || {};
    secret.id = id;

    return {
        toString: function () {
            return "gizmo " + secret.id;
        };
    };
}

function hoozit(id) {
    var secret = {};    /* final */
    var that = gizmo(id, secret);

    that.test = function (testid) {
        return testid === secret.id;
    };

    return that;
}
