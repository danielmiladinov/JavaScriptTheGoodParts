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
return
{
    ok: false
};

