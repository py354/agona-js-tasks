// Дан банкомат, в котором находится достаточное количество купюр номиналом 50, 100, 200, 500, 1000 рублей
// Делается запрос на получение денег 1<=n<=1500
// Нужно найти минимальное количество банкнот, которое необходимо для выдачи суммы, в ином случае вернуть -1

// Задача решается у словием что банкомат будет выдавать банкноту 50 если требуется меньше 50
// Если рассчитывалось что еще есть купюры 10, монетки 5 и 1 то можно просто добавить в массив
function getCount(n) {
    const bills = [1000, 500, 200, 100, 50];
    let count = 0;
    while (n > 0) {
        let haveBill = false;
        for (let i = 0; i < bills.length; i++) {
            if (bills[i] <= n) {
                n -= bills[i]
                count += 1;
                haveBill = true;
                break;
            }
        }

        if (!haveBill) {
            return -1
        }
    }

    return count;
}

console.log(getCount(200))
console.log(getCount(250))
console.log(getCount(300))
console.log(getCount(33))