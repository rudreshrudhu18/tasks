a=[1,2,3];
b=[4,5,6];
console.log(a.concat(b));
arr=[1,2,3,4,5,6];    
arr.splice(2,2);
console.log(arr);
arr2=[2,1,4,5,3,10,9];
arr2.sort(function(a, b){return a-b});
console.log(arr2);
n=9
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === n) {
        console.log("Found " + n + " at index " + i);
        break;
    }
}
console.log(arr2.indexOf(5));

