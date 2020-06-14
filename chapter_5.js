//Chapter 5 ( MATH EXPRESSIONS  )
//Task #1 
    var a = parseInt(prompt("Enter the 1st number"));
    
    var b = parseInt( prompt("Enter the 2st number"));
    c = a + b;
    document.write( `sum of ${a} and ${b} is ${c}`);
    


//Task #2
 //subtraction
    var a = parseInt(prompt("Enter the 1st number"));
    
    var b = parseInt( prompt("Enter the 2st number"));
    c = a - b;
    document.write( `sub of ${a} and ${b} is ${c}`);
//multiplication
    var a = parseInt(prompt("Enter the 1st number"));
    
    var b = parseInt( prompt("Enter the 2st number"));
    c = a * b;
    document.write( `mul of ${a} and ${b} is ${c}`);

///diviion    
    var a = parseInt(prompt("Enter the 1st number"));
    
    var b = parseInt( prompt("Enter the 2st number"));
    c = a / b;
    document.write( `div of ${a} and ${b} is ${c}`);

///modulus

    var a = parseInt(prompt("Enter the 1st number"));
    
    var b = parseInt( prompt("Enter the 2st number"));
    c = a % b;
    document.write( `remainder of ${a} and ${b} is ${c}`);
 

//Task #3
 
    var a ;
    document.write(`value after declearation is ${a} <br>`);
    a = 5;
    document.write(`Initial value:  ${a} <br>`);
    a++;
    document.write(`value after increment is:  ${a} <br>`);
    a+=7;
    document.write(`value after addition is:  ${a} <br>`);
    a--;
    document.write(`value after decrement is:  ${a} <br>`);
    a%=3;
    document.write(`The remainder is :  ${a} <br>`);

//Task #4

var ticket = 600;
var numbers_of_tickets=5;

document.write(`Total cost to buy ${numbers_of_tickets} tickets to movie is ${ticket * numbers_of_tickets} `);

//Task #5 
    a = parseInt(prompt("Enter the number you wants to genrate a table for"));

    document.write(`Table of ${a} <br> `);
    document.write(`${a} x 1 =${a*1} <br>${a} x 2 =${a*2} <br> ${a} x 3 =${a*3} <br> ${a} x 4 =${a*4} <br>${a} x 5 =${a*5} <br> ${a} x 6 =${a*6} <br> ${a} x 7 =${a*7} <br>${a} x 8 =${a*8} <br> ${a} x 9 =${a*9} <br>  ${a} x 10 =${a*10} <br>`);

//Task #6
    
    var c = parseInt(prompt(" The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. \n Enter temperature in Celsius "));

    // var c = (F-32 )* (5/9);
    var f = ((c*9)/5) + 32;
    document.write(`${c}<sup>o</sup>C is${f}<sup>o</sup>F <br>`);

    var far = parseInt(prompt(" The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. \n Enter temperature in Celsius "));
    var cel = (far-32 )* (5/9);
    document.write(`${far}<sup>o</sup>F is${cel}<sup>o</sup>C`);


//Task 7 
    var price_item_1 = parseInt(prompt('Enter the price item 1')) ;
    var quantity_item_1 = parseInt(prompt('Enter the quantity item 1')) ;
    var price_item_2 = parseInt(prompt('Enter the price item 2')) ;
    var quantity_item_2 = parseInt(prompt('Enter the quantity item 2')) ;
    var shipping = 100;

    document.write(`Price of item 1 is ${price_item_1} <br>Ordered quantity of item 1 is ${quantity_item_1} <br>Price of item 2 is ${price_item_2}  <br>Ordered quantity of item 2 is ${quantity_item_2}<br>  Shipping charges ${shipping}`);

    document.write(`<br><br> Total cost of your orders is ${(price_item_1 * quantity_item_1)+(price_item_2 * quantity_item_2)+shipping}`)


//Task 8 
var marks = parseInt(prompt('Enter the total marks')) ;
var marks_obtained = parseInt(prompt('Enter the total marks')) ;
var percentage ;
    percentage = (marks_obtained/marks) *100;
    document.write(`Total marks: ${marks} <br>Marks obtained: ${marks_obtained} <br>Percentage: ${percentage}% `);


//Task 9
var USD = parseInt(prompt('Enter amount of USD')) ;
var SR = parseInt(prompt('Enter amount of SR')) ;
var total = (USD*104.80)+(SR*28);

document.write(`<h1>Currency in PKR</h1><br>Total Currency PKR:${total}`);

//Task 10
var number = 1;
number+5;
number* 10;
number /2;

//Task 11
var Cyear = parseInt(prompt('Current Year'));
var Byear = parseInt(prompt('Birth Year'));
var age= Cyear - Byear ;
document.write(`<h1>Age Calculator</h1> <br>Current Year:${Cyear} <br>Birth Year:${Byear} <br>Your Age:${age}`);                      


//Task 12
var radius = parseInt(prompt('Enter the radius of circle '));
var circumference = 2 * (3.142)*radius;
 var area  = 3.142 * (radius)**2;
document.write(`<h1>The Geometrizer</h1> <br>Radius of circle is:${radius} <br>The circumference is :${circumference} <br>The area is :${area}`);                      

//Task 13
var snack = prompt('your favorite snack  ');
var age = parseInt(prompt('Your current age' ));
var agemax = parseInt(prompt('maximum age' ));
var snack_perday = parseInt(prompt('amount of snack per day' ));
document.write(`<h1>The Lifetime Supply Calculator</h1> <br>Favorite Snack:${snack} <br>Your Current Age :${age} <br>'Estimated Maximum Age :${agemax} <br>Amount of snack per day ${snack_perday}<br>`);                      
document.write(`“You will need NNNN to last you until the ripe old age of ${agemax}`);