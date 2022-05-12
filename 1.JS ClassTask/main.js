/////Return true if all letters are uppercase or lovercase otherwise return false

// let str=prompt();
// function CheckLetters(str){
// if (str == str.toUpperCase() || str == str.toLowerCase()) 
// {
// console.log("true");
// }
// else{
// console.log("false");
// }
// }
// CheckLetters(str);



/////Return true if number is divided by 21 without remainder otherwise return false

// let n=parseInt(prompt("Enter number"));
// function CheckNumber(n){
//     if(n%21==0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// console.log(CheckNumber(n));



/////Return true if number consists of 3 digits otherwise return false

// let num=parseInt(prompt());
// function CheckDigit(num) {
// let count=num.toString().length;
// if(count==3)
// {
//     return "3 reqemli";
// }
// else
// {
//     return "deyil";
// }
// }
// console.log(CheckDigit(num));



/////Find minimum element of array and its index

// let massiv=[3, 5, 2, 8, 0, 5, 6];
// function FindMinandIndex(){
// let min=massiv[0];
// for (let index = 0; index < massiv.length; index++) 
// {
//         if(massiv[index]<min)
//         {
//             min=massiv[index];
//         }
// }
// console.log(min);
// console.log(massiv.indexOf(min));
// }
// FindMinandIndex();



/////Mark of student is entered 
/////Find that student is failed, input is wrong or student gets one of A, B, C, D, E 

// let mark=parseInt(prompt());
// function CheckPoints() 
// {
//     if(mark<51)
//     {
//         return "You failed";
//     }
//     else if(mark>50&&mark<61)
//     {
//         return "E";
//     }
//     else if(mark>60&&mark<71)
//     {
//         return "D";
//     }
//     else if(mark>70&&mark<81)
//     {
//         return "C";
//     }
//     else if(mark>80&&mark<91)
//     {
//         return "B";
//     }
//     else if (mark>90&&mark<101)
//     {
//         return "A";
//     }
//     else 
//     {
//      return "Input is wrong";
//     }

// }
// console.log(CheckPoints());



/////Money and time period for pay back the money
/////Divide money to this time period completely

// let money=parseInt(prompt("enter Money"));
// let month=parseInt(prompt("enter Time Period"));

// function Calculate() 
// {
//     let amount=money/month;
//     let last=money-((month-1)*Math.round(amount));
//     for(let i=1; i<=month-1; i++)
//     {

//         console.log(i+" -th month you must pay "+Math.round(amount)+" dollars");
//     }
//         console.log(month+" -th month you must pay "+last+" dollars");
// }
// Calculate();



/////Same as previous but with another method

// let money=parseInt(prompt("enter Money"));
// let month=parseInt(prompt("enter Time Period"));
// function Calculate() 
// {
//     let qaliq= money%month;
//     let amount=(money-qaliq)/month;
//     for(let i=1; i<=month-1; i++)
//     {
//         console.log(i+" -th month you must pay "+amount+" dollars");
//     }
//         console.log(month+" -th month you must pay "+(amount+qaliq)+" dollars");
// }
// Calculate();


