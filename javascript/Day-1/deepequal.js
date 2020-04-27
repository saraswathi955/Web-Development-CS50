var deepequal = function(x, y) {
    if (x === y) {
        return true;
    }
    else if ((typeof x == 'object' && x != null) && (typeof y == 'object' && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length) {
            return false;

        }
        for (var pro in x) {
            if (y.hasOwnProperty(pro)) {
                return deepequal(x[pro], y[prop]);
            }
        }

    }
    else if (X === y) {
        return false;
    } else {
        return true;
    }
}

console.log(cmp({key1: 3,key2: "string",key3: [4, "45", {key4: [5, "6", false, null, {v:1}]}]};