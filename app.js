const from = document.querySelector('#from')
const to = document.querySelector('#to')
const userInput = document.querySelector('.number');
const answer = document.querySelector('.answer');
const convert = document.querySelector('.convert');
const reset = document.querySelector('.reset');

let outputfrom
let outputto

from.addEventListener('change', (e) => {
    outputfrom = parseInt(from.value)
})
to.addEventListener('change', (e) => {
    outputto = parseInt(to.value)
})


// Convert from other bases to base 10
//Re-usable function that reverses a string
function reverseArr(input) {
    let ret = new Array;
    for (let i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

//function that converts from other bases to base 10
const oBases = function (users, base) {
    let result = 0;
    const myarr = [];
    reverseArr(users).forEach((item) => {
        if (item === 'F') {
            item = 15;
        } else if (item === 'A') {
            item = 10;
        } else if (item === 'D') {
            item = 13;
        } else if (item === 'E') {
            item = 14;
        } else if (item === 'B') {
            item = 11;
        } else if (item === 'C') {
            item = 12;
        }
        myarr.push(+item)
    })
    if (myarr.some(num => num >= base)) result = 'Invalid Entry';
    else result = myarr.reduce((acc, cur, i) => acc + (cur * Math.pow(base, i)), 0);
    return result;
}

//converts to base two
function toBaseTwo(item) {
    let main = item
    let answer = []
    while (main > 0) {
        answer.push(main % 2)
        main = parseInt(main / 2) 
    }
    let newans = reverseArr(answer)
    return newans.join('')
}




//perform operation
convert.addEventListener('click', (e) => {
    e.preventDefault();
    if (outputto === 10) {
        answer.value = oBases(userInput.value.toUpperCase(), outputfrom);
    } else if (outputto === 2) {
        let initial = oBases(userInput.value.toUpperCase(), outputfrom)
        answer.value = toBaseTwo(initial)
    }
})