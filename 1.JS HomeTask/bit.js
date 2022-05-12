

// https://www.w3schools.com/js/js_string_methods.asp 

//Bu linkdən string metodlarını oxuyun və bit js faylında sıra ilə hər birinə nümunə yazın.


console.log("Slice Method")

let tools   = "Pen, Pencil, Book, Copybook";
let picked1 = tools.slice(13, 17);
let picked2 = tools.slice(-22,-16);
let picked3 = tools.slice(13);
let picked4 = tools.slice(-8);
console.log(picked1);
console.log(picked2);
console.log(picked3);
console.log(picked4);



console.log("Substring Method");

let picked5 = tools.substring(13, 17);
console.log(picked5);



console.log("Substr Method");

let colors = "red, blue, white, blue, BLUE, black";
let colors2 = "red,  white,  BLUE, black";
let picked6 = colors.substr(5,11 );
let picked7=colors.substr(5);
let picked8=colors.substr(-5);
console.log(picked6);
console.log(picked7);
console.log(picked8);



console.log("Replace Method");

let newColors1=colors.replace("blue", "pink");
let newColors2=colors.replace(/blue/g, "pink");
let newColors3=colors2.replace(/BLUE/i, "pink");
console.log(newColors1);
console.log(newColors2);
console.log(newColors3);



console.log("Uppercase Method");

let sentence1="I love javascript";
let sentence2=sentence1.toUpperCase();
console.log(sentence2);



console.log("Uppercase Method");

let sentence3="I LOVE JAVASCRIPT";
let sentence4=sentence1.toLowerCase();
console.log(sentence4);



console.log("Concat Method");

let sentence5="I want ";
let sentence6="to be developer :) ";
let sentence7=sentence5.concat(sentence6);
console.log(sentence7);



console.log("Trim Method");
let sentence8="         Code Academy         ";
let sentence9=sentence8.trim();
console.log(sentence9);



console.log("PadStart Method");

let word1="555";
let padded1=word1.padStart(7, "2");
console.log(padded1);

let num1=555;
let word2=num1.toString();
let padded2=word2.padStart(6, "7");
console.log(padded2);



console.log("PadEnd Method");

let word3="555";
let padded3=word3.padEnd(7, "2");
console.log(padded3);

let num2=555;
let word4=num2.toString();
let padded4=word4.padEnd(6, "7");
console.log(padded4);



console.log("CharAt and CharCodeAt Methods");

let word5="University";
let char=word5.charAt(0);
let code=word5.charCodeAt(0);
console.log(char+" "+code);



console.log("IndexOf and LastIndexOf Methods");

let phrase="Please never say never";
let first=phrase.indexOf("never");
let second=phrase.indexOf("never",4);
let third=phrase.lastIndexOf("never");
let last=phrase.lastIndexOf("never", 7);

console.log(first);
console.log(second);
console.log(third);
console.log(last);



console.log("Search Method");

let fourth = phrase.search("never");
console.log(fourth);



console.log("Match Method");

let fifth=phrase.match(/ever/g);
console.log(fifth);
let AnotherPhrase="Please never say NEVER";
let six=phrase.match(/ever/gi);
console.log(six);



console.log("Include Method");

let check1=phrase.includes("Please");
console.log(check1);
let check2=phrase.includes("Please", 7);
console.log(check2);



console.log("StartsWith Method");

let start1=phrase.startsWith("Please");
console.log(start1);
let start2=phrase.startsWith("never", 7)
console.log(start2);



console.log("EndsWith Method");

let end1=phrase.endsWith("never");
console.log(end1);
let end2=phrase.endsWith("never", 5)
console.log(end2);