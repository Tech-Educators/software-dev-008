let array = [1,2,3,4]
let array2 = ['string', 'string2', 'string3']
let array3 = ['boom', 'bop', 'pow']

function findElement(index1, index2, index3) {
    let cherryblossom = array[index1] // 4
    let lillies = array2[index2] // string
    let flowerpower = array3[index3] // pow
    return [cherryblossom, lillies, flowerpower] // [4,'string', 'pow']
}


// what will find element return?
// findElement(0, 2, 2)

console.log(findElement(3, 0, 2))