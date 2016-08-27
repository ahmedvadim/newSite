/*
/*
  Data Types
 1.Boolean:True,False;
 2.Array:["Ahmed","Vadim","Ivana"]
 3.Object:{FirstName:"Ivana", LastName:"Aian"}
 4.String:"Javascript"
 5.Number:14


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

var x = 1,
    y = 10,
    z = 100,
    Price = 100,
    Discount = 10,
    mediumDiscount = 20,
    bigDiscount = 30;
document.getElementById("1").innerHTML = Price;  // 100                           //""or'',1,2,3,4 (x,y,z...),x+y,y-z.....
document.getElementById("2").innerHTML = Price - Discount; // 100 - 10 = 90
document.getElementById("3").innerHTML = Price - mediumDiscount; // 100 - 20 = 80
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var product = 20000,
    productDiscount = true;

if (productDiscount === true) {
    product = 10000;
}
document.getElementById("4").innerHTML = product;
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                 /*         Array           */
/*
var Aian = ["Ahmed", "Vadim", "Ivana"];

document.getElementById("5").innerHTML = Aian[2];
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                  /*        Object          */
/*
var aian = {firstName: "Ivana", lastName: "Aian"};
document.getElementById("6").innerHTML = aian.lastName;
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                 /*         String          */
/*
var Price = "Discount";
document.getElementById("7").innerHTML = Price;
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                 /*         Number           */
/*
var price = 20000;
document.getElementById("8").innerHTML = price;
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                /*      Concatenation       */
/*
var myName = "Ahmed",

    myAge = 14,

    myCountry = "Syria";

document.getElementById('9').innerHTML =
    " <span style='color: Aqua'>My Name Is</span>: " + "<span style='color:Blue'>" + myName + "</span>" + "<br>" +
    " <span style='color:lightgreen'> My Age Is</span>: " + "<span style='color:green'>" + myAge + "</span>" + "<br>" +
    " <span style='color:pink'> My Country Is</span>: " + "<span style='color:red'>" + myCountry + "</span>";
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                /*         If...Else        */
/*                              //          Part 1          //
var
    ticketPrice = 2000;
if (ticketPrice < 1500) {
    console.log('Yes Its Cheap');
} else if (ticketPrice === 2000) {
    console.log('Yes Its Good Price');
} else {
    console.log('No Its Expensive');
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
var yourAge = prompt("What Is Your Age?");

if (yourAge = 14) {
    document.getElementById('10').innerHTML = "Months: " + yourAge * 12;
    document.getElementById('11').innerHTML = "Weeks: " + yourAge * 48;
    document.getElementById('12').innerHTML = "Days: " + yourAge * 365;
    document.getElementById('13').innerHTML = "Hours: " + yourAge * 8760;
    document.getElementById('14').innerHTML = "Minutes: " + yourAge * 525600;
    document.getElementById('15').innerHTML = "Seconds: " + yourAge * 31536000;
}
*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                         /*   Ceil,Floor,Round    */
/*
var x = Math.ceil(5.1);
console.log(x);
var i = Math.floor(5.1);
console.log(i);
var a = Math.round(5.1);
console.log(a);
var d = Math.round(5.5);
console.log(d);
*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                  /* Random */
/*
var x = Math.random();
console.log(Math.floor(x * 100) + 1);
*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            /* Brackets Use: */
/*
[...]
[^...]
[a-z]
[A-Z]
[0-9]
[^0-9]
[A-g]
[0-9a-z]

var string = "1234567890ABCDEFGHIJKabcdefghijk",

    result = string.replace(/[^0-9]/gi, "@");
console.log( result);
*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                /* Date */
/*
var theDate = new Date("03/29/2002 06:00:00");

console.log(theDate);
*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
