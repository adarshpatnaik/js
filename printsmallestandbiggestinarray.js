var arr = [34,45,22,12,54,90,33,49]
var small = arr[0]
 var big=arr[0]
for(let a of arr){
    if(a<small){
        small=a;
    }
    if(a>big){
        big=a;
    }
}
console.log(`${small} is smallest`);
console.log(`${big} is biggest`)


