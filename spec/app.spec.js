// imports use the syntax const foo = require('./path/to/fileName')
const { player1: daniel, player2: jonas, giveScore } = require('../app');


describe('The Player class', () => {

    it('should be a class', () => {
        expect(typeof daniel).toBe("object");
        expect(typeof jonas).toBe("object");
    });

    it('should have health set to 100', () => {
        expect(daniel.health).toEqual(100);
    });
});

describe('The giveScore function', () => {

    it('should be a function', () => {
        expect(typeof giveScore).toBe("function");
    });
});

/* TODO :
    check player's properties
    
    check player's attack function
        is it a function ?
        is it behaving as expected ?
        are exceptions and error well handled ?
    
    check player's help function
    
    check the giveScore function

    check when the game ends
*/
