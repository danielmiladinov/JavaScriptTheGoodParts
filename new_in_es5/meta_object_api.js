Object.defineProperty(object, key, descriptor);
Object.defineProperties(object, object_of_descriptors);
Object.getOwnPropertyDescriptor(object, key);

// Best not to use these. Secure frameworks may ban their use.
Object.getOwnPropertyNames(object);
Object.getPrototypeOf(object);


// Now you'll be able to replace an object's prototype.
function replace_prototype(object, prototype) {
    var result = Object.create(prototype);

    Object
        .getOwnPropertyNames(object)
        .forEach(function (key) {
            Object.defineProperty(result, key, 
                Object.getOwnPropertyDescriptor(
                    object, key));
        });

    return result;
}


// You now can control object extensibility
Object.preventExtensions(object);   // Prevent adding new properties

Object.seal(object);                // Like preventExtensions and also 
                                    // set all properties to not configurable
                                    
Object.freeze(object);              // Like seal and also set all properties to not writable, 
                                    // allowing for immutable objects

// Query an object's extensibility
Object.isExtensible(object);
Object.isSealed(object);
Object.isFrozen(object);
