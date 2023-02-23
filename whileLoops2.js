const readLine = require(`readLine-sync`);

//1
let answer = readLine.question( "Would you like to quit?");while (answer != "y" && answer != "n" && answer!="YES"){
    console.log("invalid choice");
    answer = readLine.question("Enter y or n: ");
}console.log(`You typed ${answer}`);
//2
let answer = readLine.question( "Enter y or n");while (answer != "y" && answer != "n" && answer!="YES"){
    console.log("invalid choice");
    answer = readLine.question("Enter y or n: ");
}console.log(`You typed ${answer}`);



