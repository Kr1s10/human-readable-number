module.exports = function toReadable (num) {
    const arrayOfOnes = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teensArray = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const arrayOfTens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundred = " hundred";

    function convert_ones(num) {
        if (num == 0) return "zero";
        
        return convert_hundreds(num);
    }

    function convert_hundreds (num) {
        if (num % 100 === 0) return arrayOfOnes[Math.floor(num / 100)] + hundred;
        if (num > 99)  return arrayOfOnes[Math.floor(num / 100)] + hundred + " " + convert_tens(num % 100);

        return convert_tens(num);
    }
      
    function convert_tens(num) {
        if (num < 10) return arrayOfOnes[num];
        if (num >= 10 && num < 20) return teensArray[num - 10];
        if (num % 10 === 0) return arrayOfTens[Math.floor(num / 10)];
    
        return arrayOfTens[Math.floor(num / 10)] + " " + arrayOfOnes[num % 10];
    }
    
    return convert_ones(num);
}
