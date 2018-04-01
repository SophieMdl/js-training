'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
const cutFirst = str => {
    str = str.substr(0, str.length - 2)
    return str
}

const cutLast = str => {
    str = str.substr(2, str.length)
    return str
} 

const cutFirstLast = str => {
    str = cutFirst(str)
    str = cutLast(str)
    return str
}

//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(cutFirst('coucou'), 'couc')
assert.deepStrictEqual(cutFirst('123 '), '12')
assert.deepStrictEqual(cutLast('abracadabra'), 'racadabra')
assert.deepStrictEqual(cutFirstLast('pouet pouet'), 'uet pou')