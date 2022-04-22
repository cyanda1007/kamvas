function weeklyWage(days,band) {

const splitDays = days.split(",")
const validBands = ['A', 'B', 'C']
const rates = [23, 37, 51]
let totalWage = 0

if(splitDays.length !==7){
    return "Missing days"
}

if(!validBands.includes(band)){
    return 0
}

splitDays.forEach(day => {
    totalWage += parseFloat(day) * rates[validBands.indexOf(band)]
});
console.log(totalWage)
return totalWage
};

