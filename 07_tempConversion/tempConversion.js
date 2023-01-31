const convertToCelsius = function(number) {

  let toCelsius = (number - 32) * 5/9
  let roundedCelsius = Math.round(toCelsius * 10) /10

  return roundedCelsius
};

const convertToFahrenheit = function(number) {

  let toFahrenheit= (number * 9/5 +32)
  let roundedFahrenheit = Math.round(toFahrenheit * 10 ) /10
  return roundedFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
