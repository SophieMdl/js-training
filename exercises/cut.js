'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
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