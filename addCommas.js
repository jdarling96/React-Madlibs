function addCommas(num) {
    const numToArr = new Array(...num.toString())
    const idx = numToArr.length - 1
    for(let i = numToArr.length; i > 0; i -= 3) {
        numToArr.splice(i, 0, ',')
       
    }

   
   numToArr.pop()
   console.log(numToArr.join(''))

}

addCommas(1000000)

module.exports = addCommas;