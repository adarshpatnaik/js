var num = 154;
var temp = num;
var rem, digit =0
count=0;
while(num!=0){
    num = parseInt(num/10)
    count++
}
num = temp
while(temp!=0){
    rem = temp%10;
    digit = digit + rem**count;
    temp = parseInt(temp/10);
}

 if(digit === num){
    console.log(`${num} is a armstrong no`);
 }
 else{
    console.log(`${num} is not an armstrong no`);
 }