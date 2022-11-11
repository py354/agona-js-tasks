// 1 задача
function getFunc() {
    let n = 0;
    return () => {
        n += 1;
        return n;
    }
}

const f = getFunc();
console.log('1:', f(), 1)
console.log('1:', f(), 2)
console.log('1:', f(), 3)


// 2 задача
sum = (x) => (y) => (z) => x + y + z

console.log('2:', sum(1)(2)(3), 6)
console.log('2:', sum(1)(1)(1), 3)


// 3 задача
// по условию надо хранить уже использованные числа,
// но если бы хранились еще не использованные то обошлось бы без цикла
function randomGenerator() {
    const used = [];
    return () => {
        while (true) {
            const r = 1 + Math.floor(Math.random() * 100);
            if (!used.includes(r)) {
                used.push(r);
                return r;
            }
        }
    }
}

const random = randomGenerator();
// выводит все числа от 1 до 100
// for (let i = 0; i < 100; i++) {
//     console.log(random());
// }


// 4 задача - использовать let вместо var
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}


