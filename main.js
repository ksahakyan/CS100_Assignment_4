const matutil = require('./util').functions;

//test1

let mat1 = [
    [1,2,3,6],
    [1,2,3,6],
    [1,2,3,6],
    [1,2,3,6],
];

let mat2 = [
    [1,4,6],
    [1,7,8],
    [1,4,7],
    [4,7,9],
];
console.log(matutil.matrixProduct(mat1,mat2));

//test 2

let mat3 = [
    [1,2,3,3],
    [1,2,3,1],
    [1,2,3,5],
    
];

let mat4 = [
    [2,1,3,6],
    [1,4,3,5],
    [1,1,2,3]
    
];

//console.log(matutil.sumOfMatrices(mat3,mat4));

//test 3

let mat5 = [
    [1,4,6],
    [1,7,8],
    [1,4,7],
    [4,7,9]
];

//console.log(matutil.sumOfRows(mat5));