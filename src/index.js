const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
    for (let i = 0; i < expr.length; i++) {
        if (i % 10 == 0) {
            expr.slice(10 * (i / 10), 10 * (i / 10 + 1)) == '**********' ? arr.push(expr.slice(10 * (i / 10), 10 * (i / 10 + 1))) : arr.push(String(Number(expr.slice(10 * (i / 10), 10 * (i / 10 + 1)))))
        }
    }
    result = ''
    arrResult = []
    resultDecode = ''
    for (let i in arr) {
        if (arr[i][0] == '1') {
            for (let j = 0; j < arr[i].length; j++) {
                if (j % 2 == 0) {
                  arr[i].slice(j, j + 2) == '10' ? result += '.' : result += '-'
                }
            }
            arrResult.push(result)
            result = ''
        }
        else {arrResult.push(' ')
            result = ''
        }
    }
    for (let key in arrResult) {
        if (arrResult[key] != ' ') {
            resultDecode += MORSE_TABLE[arrResult[key]]
        } 
        else {resultDecode += ' '}
    }
    return resultDecode
}

module.exports = {
    decode
}