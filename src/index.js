module.exports = function toReadable(number) {
    let arrNumm = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let arrTens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let whole = number % 10;
    let decate = 0;
    let hundred = 0;
    if (number === 0) {
        return "zero";
    }

    if (number <= 19) {
        return arrNumm[number];
    }

    if (number >= 20 && number <= 99) {
        decate = Math.floor(number / 10);
        whole = number % 10;
        return `${arrTens[decate]} ${arrNumm[whole]}`.trim();
    }

    if (number == 100) {
        hundred = Math.floor(number / 100);
        return `${arrNumm[hundred]} hundred`.trim();
    }

    if (number > 99 && number <= 999) {
        if (number % 100 < 20) {
            hundred = Math.floor(number / 100);
            decate = Math.floor(number % 100);
            return `${arrNumm[hundred]} hundred ${arrNumm[decate]}`.trim();
        }

        hundred = Math.floor(number / 100);
        decate = Math.floor((number % 100) / 10);
        return `${arrNumm[hundred]} hundred ${arrTens[decate]} ${arrNumm[whole]}`.trim();
    }
};
