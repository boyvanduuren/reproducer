const {Reproducer} = require('./output/output');
const kotlin = require('kotlin');

const reproducer = new Reproducer();

// following will fail, even though this is a nullary method in reproducer.kt
try {
    reproducer.doSomething();
} catch (error) {
    console.log(error);
}

// following will succeed
reproducer.doSomething(kotlin.kotlin.coroutines.js.internal.EmptyContinuation);
