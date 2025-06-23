function calculatebmi(weight, height) {
    const bmi= weight /(height * height);
    return bmi.toFixed(0);

}
const bmi=calculatebmi(65, 1.8);
console.log(`Your BMI is ${bmi}.`);