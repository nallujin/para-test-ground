let arr1 = [3, 7, 1, 9, 4];
let arr2 = [32, 56, 12, 45, 67];
let arr3 = [-1, -5, -9, -2];

function findLargestNumber(xs) {
    let theNew = xs.sort(function (a,b){return a-b});
    return theNew[-1];
}

console.log(findLargestNumber(arr1));