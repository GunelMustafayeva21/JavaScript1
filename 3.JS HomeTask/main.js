//Prompt ilə istifadəci n ədədini daxil edir. 
//Proqram n-ci fibonacci rəqəmini alert edir. 
//Funksiya istifade edin

let n=parseInt(prompt("Enter positive number"));

function Fibonacci(n){
    let firstTerm=0;
    let secondTerm=1;
    let nextTerm;
    for(let i=0; i<n; i++)
    {
        nextTerm=firstTerm+secondTerm;
        firstTerm=secondTerm;
        secondTerm=nextTerm;
    }

   return firstTerm;
}
alert(n+" -th Fibonacci number is: "+Fibonacci(n))
