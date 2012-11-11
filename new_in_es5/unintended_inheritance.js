// Accidental collisions: This fails when word === 'constructor'
var word_count = {};

text.split(/[\s.,?!":;]+/)
    .forEach(function count_word(word) {
        if (word_count[word]) {
            word_count[word] += 1;
        } else {
            word_count[word] = 1;
        }
    });

// Some solutions in ES5
// * Object.create(null) creates an object that does not inherit anything.
// * Set the enumerable attribute to false when adding methods to prototypes.
//   That keeps them out of for..in enumerations.
// * Object.keys(object) produces an array of strings, 
//   the enumerable keys of the own (not inherited) properties.
