// First, you define a rather spare-looking constructor
function Gizmo(id) {
    this.id = id;
}

// Then, you set/define methods on Gizmo's prototype - kinda weird looking
// Crockford calls this "leaving it hanging out in the open"

Gizmo.prototype.toString = function () {
    return "gizmo " + this.id;
};


// Here we subclass Gizmo with a Hoozit.  First, the constructor. Yawn.
function Hoozit(id) {
    this.id = id;
}

// Next, say Hoozit's prototype is a Gizmo....
Hoozit.prototype = new Gizmo();
// We can add more functions to Hoozit
Hoozit.prototype.test = function (id) {
    return this.id === id;
};
