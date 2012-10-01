function hoozit(id) {
    var secret = {};
    var that = gizmo(id, secret);
    var super_toString = that.toString;

    that.test = function (testid) {
        return testid === secret.id;
    };

    that.toString = function () {
        return super_toString.apply(that);
    };

    return that;
}
