'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
const keepFirst = str => str.substr(0, 2)
const keepLast = str => str.substr(str.length-2, 2)
const keepFirstLast = str => str.substr(2, 2)

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('Slip'), 'Sl')
assert.strictEqual(keepLast('coucou les amis'), 'is')
assert.strictEqual(keepFirstLast('saperlipopette'), 'pe')
// End of tests */
