const readLine = require('readline-sync');

//1
let x = 0;
while(x<25){
    console.log(x);
    x++;
}
//2
let y = 0;
while(y<=50){
    console.log(y);
    y++;
}
//3
let z = -10;
while(z<=10){
    console.log(z);
    z++;
}
//4
let f = 0;
while(f>-51){
    console.log(f);
    f--;
}
//5
let answer = readLine.question("Enter y or n: ");
while(answer != "y" && answer != "n" && answer!="YES"{
    console.log("invalid choice");
    answer = readLine.question("Enter y or n:");
}
    console.log(`You typed $ {answer}`);