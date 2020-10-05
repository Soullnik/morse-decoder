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
    let morseExpr = '';
    let resultExpr = '';
    for (let i = 0; i < expr.length/2; i++) {
        let temp = expr.slice(i*2, i*2+2);
        switch (temp) {
            case "00":
                morseExpr += " ";
                break
            case "10":
                morseExpr += ".";
                break
            case "11":
                morseExpr += "-";
                break
            case "**":
                morseExpr += " ";
                break
        }
    }

    for (let i = 0; i < morseExpr.length/5; i++) {
        let temp = morseExpr.slice(i*5, i*5+5);
        if (temp === "     ") {
            resultExpr += " ";
        } else {
            temp = temp.trim();
            resultExpr += MORSE_TABLE[temp];
        }
    }
    return resultExpr;


}

module.exports = {
    decode
}