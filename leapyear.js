var leapyear = 2016;
if(((leapyear%4 === 0)&&(leapyear%100 !== 0))||(leapyear%400 === 0)){
    console.log(`${leapyear} is a leapyear`);
}
else{
    console.log("its not a leapyear");
}