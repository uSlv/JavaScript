
// var hundred = (a,b) => a === 100 || b === 100 || a+b === 100 -> teacher

function hundred (a,b){
  if (a === 100) {
    return 'true'
  } else if (b === 100) {
    return 'true'
  } else if (a + b === 100) {
    return 'true'
  } else {
    return 'false'
  }
}

console.log(hundred(100, 0))
console.log(hundred(0, 100))
console.log(hundred(80, 20))
console.log(hundred(90, 10))
console.log(hundred(50, 50))
console.log(hundred(60, 40))
console.log(hundred(98, 1))
console.log(hundred(90, 5))