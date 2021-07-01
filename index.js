const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function selectDifferentDrivers(drivers, selectionFunction) {
  return selectionFunction(drivers);
}

function createFareMultiplier(multiplier) {
  return function multiplyFare(fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);