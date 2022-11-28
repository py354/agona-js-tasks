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