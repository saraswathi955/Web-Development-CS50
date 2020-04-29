function countBs(String){
    var Count = 0;
    for(i = 0; i < String.length; i++) {
        if (String[i] === "B") {
            Count = Count + 1;
        }
    }
    return Count;
}

function countChar(String, charater){
    var lCount = 0;
    var Letter = charater.toLowerCase();
    for(i = 0; i < String.length; i++) {
        if (String[i] === Letter) {
            letter = letter + 1;
        }
    }
    return Count;
}

console.log(countBs('BBBBBBBRT'));
console.log(countChar('ghjsdfgsasaskkkk', 'h'));
console.log(countChar2('hjfghjkfyuivjcghtyuyuiyyy', 'y'));