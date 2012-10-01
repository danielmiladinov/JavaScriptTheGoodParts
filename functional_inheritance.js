// Inheritance this way is much simpler than either pseudoclassical
// or prototypal, but, there is a problem.
function gizmo(id) {
    return {
        id: id,
        toString: function () {
            return "gizmo " + this.id;
        }
    };
}

function hoozit(id) {
    var that = gizmo(id);   // we use that because this is a reserved word.
    that.test = function (testid) {
        return testid === this.id;
    };
    return that;
}

// Gizmo and Hoozit objects' ids are public! Anybody who wants to can mess with them!
// What to do? Simple!  Make the ids private! The code even gets simpler in the process.

function gizmo(id) {
    return {
        toString: function () {
            return "gizmo " + id;
    };
}

function hoozit(id) {
    var that = gizmo(id);
    that.test = function (testid) {
        return testid === id;
    };
    return that;
}
