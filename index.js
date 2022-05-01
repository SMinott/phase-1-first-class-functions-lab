// Code your solution in this file!
// 1st code
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}

// 2nd Code
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2)
//Could have used -2 as the index after slice
}

// 3rd Code
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
// 4th Code
function createFareMultiplier(int){
    return function(fare){
        return int * fare
    };
};

// 5th Code
const fareDoubler = createFareMultiplier(2)

// 6th Code
const fareTripler = createFareMultiplier(3)

//  7th Code
function selectDifferentDrivers(drivers, eitherFunc){
    return eitherFunc(drivers)
}