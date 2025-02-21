const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
  } = require('./functions');

  describe('capitalize', () => {
    test('capitalizes first character of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });
  
    test('works with already capitalized string', () => {
      expect(capitalize('World')).toBe('World');
    });
  
    test('works with single character', () => {
      expect(capitalize('a')).toBe('A');
    });
  });

  describe('reverseString', () => {
    test('reverses a simple string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });
  
    test('works with spaces', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh');
    });
  
    test('works with palindrome', () => {
      expect(reverseString('radar')).toBe('radar');
    });
  });

  describe('calculator', () => {
    test('adds two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });
  
    test('subtracts two numbers', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });
  
    test('multiplies two numbers', () => {
      expect(calculator.multiply(4, 3)).toBe(12);
    });
  
    test('divides two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });
  
    test('handles decimal numbers', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('caesarCipher', () => {
    test('shifts letters by given factor', () => {
      expect(caesarCipher('abc', 1)).toBe('bcd');
    });
  
    test('wraps from z to a', () => {
      expect(caesarCipher('xyz', 3)).toBe('abc');
    });
  
    test('preserves case', () => {
      expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });
  
    test('handles punctuation and spaces', () => {
      expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
  
    test('handles negative shift', () => {
      expect(caesarCipher('def', -1)).toBe('cde');
    });
  });

  describe('analyzeArray', () => {
    test('analyzes array correctly', () => {
      const result = analyzeArray([1, 8, 3, 4, 2, 6]);
      expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
    });
  
    test('works with single element array', () => {
      const result = analyzeArray([5]);
      expect(result).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
      });
    });
  
    test('handles decimal numbers', () => {
      const result = analyzeArray([1.5, 2.5, 3.5]);
      expect(result).toEqual({
        average: 2.5,
        min: 1.5,
        max: 3.5,
        length: 3
      });
    });
  });