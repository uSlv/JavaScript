function NearestToHundred(a, b) {
    //With 100 greater than a and b.
    if ((a - 100) > (b - 100)) {
        return `${a} is nearest to 100 than ${b}`
    } else if ((a - 100) == (b - 100)) {
        return `${a} is equally near to 100 than ${b} `
    } else if ((a - 100) < (b - 100)) {
        return `${b} is nearest to 100 than ${a} `
    }
}

console.log(NearestToHundred(120,200))
console.log(NearestToHundred(40,40))
console.log(NearestToHundred(40,50))
