function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
};

function caesarCipher(str, shift) {
    function shiftChar(char) {
        const isUpperCase = char === char.toUpperCase();
        const base = isUpperCase ? 65 : 97;

        if (!/[a-zA-Z]/.test(char)) return char;

        const charCode = char.charCodeAt(0);
        const shifted = (charCode - base + shift) % 26;
        const wrappedShift = shifted < 0 ? shifted + 26 : shifted;

        return String.fromCharCode(base + wrappedShift);
    }

    return str.split('').map(shiftChar).join('');
}

function analyzeArray(arr) {
    return {
        average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    };
  }

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
  };  