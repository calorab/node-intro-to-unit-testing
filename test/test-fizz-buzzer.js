const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function {
    it('find numbers divisible by 3, 5, and 15 or return num', function {
        const normalCases = [
            {
                num: 3,
                expected: 'fizz'
            },
            {
                num: 5,
                expected: 'buzz'
            },
            {
                num: 15,
                expected: 'fizz-buzz'
            },
            {
                num: 4,
                expected: 4
            }
         ];

        normalCases.forEach(function (input) {
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error is args not numbers', function {
        const badCases = [
            {
                num == '1'
            },
            {
                num == false
            }
       ];

        badCases.forEach(function (input) {
            expect(function () {
                fizzBuzzer(input)
            }).to.throw(error);
        });
    });
})
