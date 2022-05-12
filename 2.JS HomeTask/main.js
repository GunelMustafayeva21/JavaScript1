//2. Bir funksiya yazırsız hansı ki, n qəbul edib n ci fibonacci rəqəmini qaytarır.

let n=parseInt(prompt("Enter positive number"));

console.log(" " +"Fibonacci numbers start from zero and each\n next element is sum of previous two elements.");
console.log(" ");
console.log(" "+"You want to see "+n+" -th Fibonacci number.");
console.log(" " + "Numbers before "+n+" -th Fibonacci number are: ");

function Fibonacci(n)
{
    let firstTerm=0;
    let secondTerm=1;
    let nextTerm;

    for (let i = 0; i<n; i++)
     {  
        console.log(firstTerm); 
        nextTerm=firstTerm+secondTerm; 
        firstTerm=secondTerm; 
        secondTerm=nextTerm;  
    }
    
    console.log(" ");
    //n-th term
    console.log(" " + n +" -th Fibonacci number is "+firstTerm);
}
Fibonacci(n);