

function receivesAFunction(callback) {
    return callback();
}

function callback() {
    return "hello";
}


function returnsANamedFunction() {
    return function namedFunction() {
        return "what's up?";
    }
}


function returnsAnAnonymousFunction() {
    return function () {
        return "never mind";
    }
}