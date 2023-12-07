function basicMath(operation, firstNumber, lastNumber) {
  if (operation === "addition") {
    return firstNumber + lastNumber;
  } else if (operation === "subtraction") {
    return firstNumber - lastNumber;
  } else if (operation === "multiplication") {
    return firstNumber * lastNumber;
  } else if (operation === "division") {
    return firstNumber / lastNumber;
  }
}
module.exports = basicMath;
