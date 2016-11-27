import {FizzBuzz} from '../src/fizzbuzz';

describe( 'A FizzBuzz generator', () => {
  it('should return the number 1 when 1 is played', () => {
    var result = FizzBuzz.generate(1);
    expect(result).toBe(1);
  });
});
