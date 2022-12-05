// 1 задача
function capitalize(str) {
    // первый вариант
    // let result = "";
    // for (let char of str) {
    //     if (result.length === 0 || result[result.length-1] === " ") {
    //         result += char.toUpperCase();
    //     } else {
    //         result += char;
    //     }
    // }
    // return result

    function capitalizeWord(word) {
        return word ? word[0].toUpperCase() + word.slice(1) : word;
    }
    return str.split(" ").map(capitalizeWord).join(" ")
}

console.log("1:", capitalize("test  t"));


// 2 задача
function clear(str) {
    const isSymbol = char => {
        const code = char.charCodeAt(0);
        return !(code < 48 || (code > 57 && code < 65) || (code > 90 && code < 97) || (code > 122 && code < 128))

    }

    return str.split('').filter(isSymbol).join('');
}

console.log("2:", clear("12312 \d \n \t word"))


// 3 задача
function isPalindrome(str) {
    // удаляем пробелы и приводим к одному регистру
    str = clear(str).toLowerCase();

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length-1-i]) {
            return false;
        }
    }
    return true;
}

console.log("3:", isPalindrome("123"), isPalindrome("1234"), isPalindrome("121"), isPalindrome("1221"))
console.log("3:", isPalindrome("А роза упала на лапу Азора."), isPalindrome("Бел хлеб."), isPalindrome("Не палиндром"))


// 4 задача
function removeDuplicateChars(str) {
    let storage = new Set();
    let result = "";
    for (let char of str) {
        if (!storage.has(char)) {
            result += char;
            storage.add(char);
        }
    }
    return result;
}

console.log(removeDuplicateChars("1223123 tests q"));


// 5 задача
function replaceAll(find, replace, str) {
    return str.split(find).join(replace);
}

console.log(replaceAll("{}", "Test", "{},{{}}"))
