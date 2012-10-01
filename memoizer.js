function memoizer(memo, formula) {
    var recur = function (n) {
        var result = memo[n];

        if (typeof result !== 'number') {
            result = formula(recur, n);
            memo[n] = result;
        }

        return result;
    };

    return recur;
};

// The memo variable we pass is an array whose indexes are the inputs to the recursive function
// and whose values are the outputs from the recursive function.
// e.g. the factorial of 0 is 1, and the factorial of 1 is 1, hence the memo array: [1, 1]
var factorial = memoizer([1, 1], function (recur, n) {
    return n * recur(n - 1);
});

// The fibonacci of 0 is 0, and fibonacci of 1 is 1, hence the memo array: [0, 1]
var fibonacci = memoizer([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});
