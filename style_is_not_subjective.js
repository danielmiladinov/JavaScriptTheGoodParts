// Style Isn't Subjective

// Might work well in other languages
block
{
    // ...
}

// Works well in JavaScript
block {
    // ...
}


// Suppose we want to return an object literal...
// This works well in JavaScript
return {
    ok: true
};

// THIS IS A SILENT ERROR!
// This does not return an object, it returns void/undefined
return // semicolon insertion happens here
{ // this could be a block
    ok: false // ok: this could be a label
    // what about false? It looks like a useless expression statement that was missing a semicolon, which also gets inserted...
}; // But what about this????  Well, ; is a valid empty statement too - THANKS A LOT, C!!!!

