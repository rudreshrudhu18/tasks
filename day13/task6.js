function calculatebmi(weight, height) {
    const bmi= weight /(height * height);
    return bmi.toFixed(0);

}
const bmi=calculatebmi(65, 1.8);
if (bmi < 18.5) {
    console.log(`Your BMI is ${bmi}. You are underweight.`);
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log(`Your BMI is ${bmi}. You have a normal weight.`);
} else if (bmi >= 25 && bmi < 29.9) {
    console.log(`Your BMI is ${bmi}. You are overweight.`);
} else {
    console.log(`Your BMI is ${bmi}. You are obese.`);
}