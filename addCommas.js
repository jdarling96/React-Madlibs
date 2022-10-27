function addCommas(num) {
  const numToArr = new Array(...num.toString());

  if (numToArr.includes(".")) {
    const afterDecimal = numToArr.indexOf(".");
    for (let i = afterDecimal; i > 0; i -= 3) {
      numToArr.splice(i, 0, ",");
    }
    numToArr.splice(numToArr.indexOf(".") - 1, 1)
    return numToArr.join("");
  } else {
    for (let i = numToArr.length; i > 0; i -= 3) {
      numToArr.splice(i, 0, ",");
    }

    numToArr.pop();
    return numToArr.join("");
  }
}



module.exports = addCommas;
