function charInRange(first, second) {
    start = Math.min(first.charCodeAt(), second.charCodeAt());
    end = Math.max(first.charCodeAt(), second.charCodeAt());
    result = []
    for (let i = start + 1; i < end; i++) {
        char = String.fromCharCode(i)
        result.push(char)
    }

    console.log(result.join(" "))
}

charInRange('a',

'd')
charInRange('#',

':')
charInRange('C',

'#')