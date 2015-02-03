var romanNumerals = require('roman-numerals')

// Counts equal how many times that type of number is the SHORTER
var counts = {
	roman: 0,
	arabic: 0,
	equal: 0,
	biggestRoman: {
		record: null,
		number: null
	},
	biggestArabic: {
		record: null,
		number: null
	}
}

for(var i = 1; i <= 3999; i++) {
	arabic = i.toString()
	roman = romanNumerals.toRoman(i)

	if(roman.length == arabic.length) {
		counts.equal++;
	} else if (roman.length > arabic.length) {
		counts.arabic++;
	} else {
		counts.roman++;
	}
}

console.log("Calculated the efficiency of roman numberals vs arabic numerals")
console.log("for all numbers between 1 and 3999")
console.log("")
console.log("ROMAN NUMERALS WIN " + counts.roman + " TIMES")
console.log("ARABIC NUMERALS WIN " + counts.arabic + " TIMES")
console.log("EFFICIENCY IS EQUAL " + counts.equal + " TIMES")