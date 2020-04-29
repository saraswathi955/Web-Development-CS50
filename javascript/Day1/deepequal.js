
function deepEqual(x, y) {
    if (x === y) {
        return true;
    }
    if (x == null || typeof x != 'object' || y == null || typeof y != 'object') {
        return false;
    }
    var pInA = 0, pInB = 0;
    for (var pro in x) {
        pInA += 1
    }
    for (var pro in y) {
        pInB += 1
        if (!(pro in x) || deepEqual(x[pro], y[pro])) {
            return false
        }
    }
    return pInA == pInB
}

obj1 = { fn: "saraswathi", ls:"sa" }
obj2 = { fn: "ramu", y= 77 }

str1 = "saraswathi"
str3 = "saru"
str2 = "ghjk"
console.log(deepEqual(obj1, obj2))
console.log(deepEqual(str2, str3))
console.log(deepEqual(str1, str3))
