//-----------------------------Coding Challenge #1-------------------------------
// 1. Store Mark's and John's mass and height in variables
console.log('Coding Challenge #1')
    //Data 1
let markMassKg1 = 78; // Mark's mass in kilograms
let markHeightM1 = 1.69; // Mark's height in meters

let johnMassKg1 = 92; // John's mass in kilograms
let johnHeightM1 = 1.95; // John's height in meters

// data 2
let markMassKg2 = 95;
let markHeightM2 = 1.88;

let johnMassKg2 = 85;
let johnHeightM2 = 1.76;

// 2. Calculate both their BMIs using the formula
let markBMI1 = markMassKg1 / (markHeightM1 ** 2);
let johnBMI1 = johnMassKg1 / (johnHeightM1 ** 2);

let markBMI2 = markMassKg2 / (markHeightM2 ** 2);
let johnBMI2 = johnMassKg2 / (johnHeightM2 ** 2);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;
// Display the results
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Is Mark's BMI higher than John's BMI?", markHigherBMI1);

console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Is Mark's BMI higher than John's BMI?", markHigherBMI2);

//-----------------------------Coding Challenge #2-------------------------------
console.log('\nCoding Challenge #2')
    //Test 1
var a = `Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's(${johnBMI1.toFixed(1)})`;
var b = `John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's(${markBMI1.toFixed(1)})`;
var c = `Mark's and John's is equal`
if (markBMI1 > johnBMI1) {
    console.log(a)
} else if (markBMI1 < johnBMI1) {
    console.log(b)
} else {
    console.log(c)
}

//Test2
var a = `Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's(${johnBMI2.toFixed(1)})`;
var b = `John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's(${markBMI2.toFixed(1)})`;
var c = `Mark's and John's is equal`
if (markBMI2 > johnBMI2) {
    console.log(a)
} else if (markBMI2 < johnBMI2) {
    console.log(b)
} else {
    console.log(c)
}

//-----------------------------Coding Challenge #3-------------------------------
console.log('\nCoding Challenge #3')
    // Test data
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

// Calculate the average score for each team
const calculateAverage = (scores) => {
    const total = scores.reduce((a, score) => a + score, 0);
    return total / scores.length;
};

const dolphinsAVG = calculateAverage(dolphinsScores);
const koalasAVG = calculateAverage(koalasScores);
console.log("DolphinsAVG:", dolphinsAVG);
console.log("KoalasAVG: ", koalasAVG)

// Check for a draw and the bonus requirements
if (dolphinsAVG >= 100 && koalasAVG >= 100) {
    if (dolphinsAVG > koalasAVG) {
        console.log(`Dolphins win with an average score of ${dolphinsAVG}`);
    } else if (koalasAVG > koalasAVG) {
        console.log(`Koalas win with an average score of ${koalasAVG}`);
    } else {
        console.log(`It's a draw with an average score of ${koalasAVG}`);
    }
} else {
    console.log("No team wins the trophy due to the minimum score requirement.");
}


//-----------------------------Coding Challenge #4-------------------------------
console.log('\nCoding Challenge #4')
const arrayBill = [275, 40, 430];

arrayBill.forEach((bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
});


//-----------------------------Coding Challenge #5-------------------------------
console.log('\nCoding Challenge #5')
    // 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAVG = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams
const dolphinsAvg = calcAVG(44, 23, 71);
const koalasAvg = calcAVG(65, 54, 49);

// 3. Create a function 'checkWinner' to determine the winner and log the result
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins.");
    }
};

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
console.log("Data 1 Results:");
checkWinner(dolphinsAvg, koalasAvg);

const dolphinsAvg1 = calcAVG(85, 54, 41);
const koalasAvg1 = calcAVG(23, 34, 27);

console.log("\nData 2 Results:");
checkWinner(dolphinsAvg1, koalasAvg1);

//-----------------------------Coding Challenge #6------------------------------
console.log('\nCoding Challenge #6')
    // 1. Write a function 'calcTip' to calculate the tip based on the rules
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Test the 'calcTip' function with a bill value of 100
const testBill = 100;
const tipAmount = calcTip(testBill);
console.log(`The tip for a bill of $${testBill} is $${tipAmount}`);

// 2. Create an array 'bills' containing the test data
const bills = [125, 555, 44];

// 3. Create an array 'tips' containing the tip value for each bill
const tips = bills.map((bill) => calcTip(bill));

// 4. Bonus: Create an array 'total' containing the total values (bill + tip)
const total = bills.map((bill, index) => bill + tips[index]);

// Display the 'tips' and 'total' arrays
console.log("Tips:", tips);
console.log("Total values:", total);

//-----------------------------Coding Challenge #7------------------------------
console.log("\nCoding Challenge #7");

let Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69
}
let John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95
}

//2
Mark.calcBMI = function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
}

John.calcBMI = function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
}

//3
if (Mark.calcBMI() > John.calcBMI()) {
    console.log(`Mark's BMI (${Mark.BMI.toFixed(1)}) is higher than John's (${John.BMI.toFixed(1)})!`);
} else {
    console.log(`Jhon's BMI (${John.BMI.toFixed(1)}) is higher than Mark's (${Mark.BMI.toFixed(1)})!`);
}

//-----------------------------Coding Challenge #8------------------------------
console.log("\nCoding Challenge #8");
//Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
//1
let bills_4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills_4)
    //2
let tips_4 = [];
let totals_4 = [];
//3
for (let i = 0; i < bills_4.length; i++) {
    tips_4.push(calcTip(bills_4[i]));
    totals_4.push(bills_4[i] + tips_4[i]);
}

console.log(tips_4);
console.log(totals_4);

//-----------------------------Coding Challenge #9------------------------------
console.log("\nCoding Challenge #9");

const printForecast = function(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}oC in ${i + 1} days `;
    }
    console.log(str);
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);