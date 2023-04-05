// today 1 topic multiple conditions,, if and else

// comparetions operators
// 1. == , ===
// == is used for check the only value and check the types of data e,g  5 == "5"
// === is used for checking value and also checking the type of data
// != , !== is used for not eqaul
// <, >, <=, >= for example

// let num = 5;
// let num1 = 6;
// console.log(num>num1);
//  let user = 17;
//  let user1 = 25;

//  console.log(user >=18);
//  console.log(user1 >= 18)

// write a program to check that user age is greater than 18 or less to used for if else condition

// let userAge =+ prompt("Enter your age");

// if(userAge >= 18){
//     console.log("you can apply for CNIC");
// }
// else{
//     console.log("you are not eligible for CNIC");
// }


// 

// let userFavNum =+ prompt("Enter a number");
// let computerRandon = Math.round(Math.random() * 10);

// if(userFavNum === computerRandon){
//     console.log("You win");
// }

// else{
//     console.log("You Loss" +computerRandon );
// }



// let userInput = prompt("Even or Odd");
// let computerRandon = Math.round(Math.random() * 10);

// if(computerRandon % 2 ===0 && userInput === "even"){
//     console.log("You win" + computerRandon);
// }

// else if(computerRandon % 2 !== 0 && userInput === "odd"){
//     console.log("You win" + computerRandon);
// }

// else{
//     console.log("You Loss" +computerRandon );
// }



// for loop 'i' is stand for initial value  '1<=' is used for how many time our program run, 
// 'i++' is used for addition 1 in previous value

for (let i =1; i<=10; i++){
    console.log("Hello world " + i)
}

for (let i = 1; i <= 20; i++ ){
    console.log("2 X " + i + " = " + 2 * i );

    // document.write("  2 X " + i + " = " + 2 * i   );
}