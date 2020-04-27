
var countBs = function(str) {
    return str.match(/B/g).length
}

var countChar = function(str, character) {
    var mat = new RegExp(character, 'g');
    return str.match(mat).length;
}
var countChar2 = function(str, character) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === character)
            count++;
    }
    return count;
};



console.log(countBs('BBBBBBBRT'));
console.log(countChar('ghjsdfgsasaskkkk', 'h'));
console.log(countChar2('hjfghjkfyuivjcghtyuyuiyyy', 'y'));