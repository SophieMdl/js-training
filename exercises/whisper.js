'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
const whisper = (str) => str.toLowerCase()

//* Begin of tests
const assert = require('assert')

//assert.fail('You must write your own tests')
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('AAASSAA'), 'aaassaa')
assert.deepStrictEqual(whisper('GGF/15'), 'ggf/15')
assert.deepStrictEqual(whisper('25652'), '25652')
assert.deepStrictEqual(whisper('LOL LOL'), 'lol lol')
// End of tests */