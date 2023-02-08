// function map(arr1,callback){
//     let result=[];
//     for(let i=0;i<arr1.length;i++){
//             result.push(callback(arr1[i])); 
//     }
//     return result;
// }

// function square(value){
//     return value*value;
// }
// let arr1=[1,2,3,4,5,6,7,8,9,10];
// let result=map(arr1,square);
// console.log(result)


let arr1=[1,2,3,4,5,6,7,8,9,10];

function square(x){
    return x*x;
}
let result=arr1.map(square);
console.log(result)