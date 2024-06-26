var num = 2; var temp = num;
var fact = 1; var rem;
var digit = 0;
while(num!=0){
    rem = num%10
    for (let i=1; i<=rem; i++){
        fact = fact*i;
    }
    digit = digit+fact;
    num = parseInt(num/10);
    fact = 1;
}

if(temp === digit){
    console.log(`${temp} is a strong no`);
}
else{
    console.log(`${temp} is not a strong no`);
}