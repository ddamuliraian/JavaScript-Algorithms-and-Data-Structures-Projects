function convertToRoman(num) {
    const rNumerals = [1, "I", 4, "IV", 5, "V", 9, "IX", 10, "X", 40, "XL", 50, "L", 90, "XC", 100, "C", 400, "CD", 500, "D", 900, "CM", 1000, "M", 2000, "MM", 3000, "MMM", 4000, "MMMM", 5000, "V̅"];
    const rNumeralsTens = [10, "X", 20, "XX", 30, "XXX", 40, "XL", 50, "L", 60, "LX", 70, "LXX", 80, "LXXX", 90, "XC"]
    const romanNumeral = [];
     let v;
    
    while (num > 1) {
    if (rNumerals.includes(num)) {
    romanNumeral.push(rNumerals[rNumerals.indexOf(num)+1]);
    break;
    }
    for (let i = 0; i < rNumerals.length; i++) {
    if (rNumerals[i] < num || isNaN(rNumerals[i])) {}
    else {v = rNumerals[i-2];
    while (num > v) {
      num = num-v;
      romanNumeral.push(rNumerals[i-1]);
    }
    }
    }
    if (rNumeralsTens.includes(num)) {
    romanNumeral.push(rNumeralsTens[rNumeralsTens.indexOf(num)+1]);
    break;
    }
    if (num === 4) {
    romanNumeral.push("IV");
    num = 0;
    };
    if (num === 5) {
    romanNumeral.push("V");
    num = 0; 
    }
    if (num === 9) {
    romanNumeral.push("IX");
    num = 0; 
    }
    }
    if (num === 3 || num === 2 || num === 1) {
    while (num > 0) {
      num--;
      romanNumeral.push("I")
    }
    }
    return romanNumeral.join("")
    }
    convertToRoman(230);