// JS Conditionals

// if Statement:
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

// else Statement:
let time = 10;
if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}

// else if Statement:
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// nested if Statements:
let num = 15;
if (num > 0) {
    if (num % 2 === 0) {
        console.log("Positive even number");
    } else {
        console.log("Positive odd number");
    }
} else {
    console.log("Non-positive number");
}

// switch Statement:
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

