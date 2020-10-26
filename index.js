function polishCalc(input) {
    const chars = input.split(" ");
    let result = 0;

    // opérateurs à la fin (3 3 3 - +)
    if (isNaN(chars[chars.length - 2])) {
        result = eval(chars[0] + chars[4] + chars[1]);

        if (chars.length > 3) {
            result = polishCalc(result + " " + chars[2] + " " + chars[3]);
        }
    }

    // opérateurs après duo de chiffres (3 3 + 3 +)
    if (!isNaN(chars[chars.length - 2])) {
        result = eval(chars[0] + chars[2] + chars[1]);

        if (chars.length > 3) {
            result = polishCalc(result + " " + chars[3] + " " + chars[4]);
        }
    }

    return result;
}

module.exports = {
    polishCalc,
}