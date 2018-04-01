'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = str => {
    let words = str.toLowerCase().split(' ')
    words = words.map(word => word.charAt(0).toUpperCase() + word.substring(1))
    // words.forEach(word => {
    //     word = `${word.charAt(0).toUpperCase()}${word.substring(1)}`
    //     console.log(word)
    // })
    return words.join(' ')
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('salut toi'),'Salut Toi')
// End of tests */
