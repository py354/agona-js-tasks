function strToMap(s) {
    let map = new Map();
    for (let char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    return map
}

function compareMaps(m1, m2) {
    let compare = (m1, m2) => {
        for (let key of m1.keys()) {
            if (!m2.has(key) || m1[key] !== m2[key]) {
                return false
            }
        }
        return true
    }

    return compare(m1, m2) && compare(m2, m1)
}

function isAnagrams(s1, s2) {
    let map1 = strToMap(s1);
    let map2 = strToMap(s2);
    console.log(compareMaps(map1, map2))
}

isAnagrams("lemon", "melon");