// Given a Greeter object
function Greeter(s) { this.salutation = s; }
Greeter.prototype.greet = function(name) {
    alert(this.salutation + name);
};

var greeter = new Greeter("Hello, ");

// Assume a Server object was already defined
var server = new Server();

server.getUser(greeter.greet);
// greet function just got called with the wrong "this"

// Instead, you'd need to do it this way
server.getUser(function (name) {
    greeter.greet(name);
});

// That's kinda lame. . . couldn't I just pass greeter and greet somehow without "this" getting mixed up?
// Enter the bind function!
function bind(fnThis, fn) {
    return function() {
        return fn.apply(fnThis, arguments);
    };
}

// now you can do this instead:
server.getUser(bind(greeter, greeter.greet));
