var heros =["superman","spiderman","hulk","thor","wonderwomen","blackwidow"]
heros.push("adarsh");
console.log(heros);
console.log(heros.pop());
console.log(heros.shift());
heros.unshift("vivek");
console.log(heros);
heros.splice(0,1);
console.log(heros);
heros.unshift("superman");
console.log(heros);
let myfav = heros.slice(1,3);
console.log(myfav);
let villians = ["loki","doctordome"];
let mys1 = heros.concat(villians);
console.log(mys1);
mys1.sort();
console.log(mys1);
