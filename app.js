// CHAPTER 6-9
// Q1
var a=prompt("Enter Number","0");
a=parseInt(a);
document.write("The value of a is: "+a+"<br>");
document.write("........................<br>");
++a;
document.write("The value of ++a is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");
a++;
document.write("The value of a++ is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");
--a;
document.write("The value of --a is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");
a--;
document.write("The value of a-- is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");

// Q2
var a = 2, b = 1; 
var result = --a - --b + ++b + b--;
document.write("RESULT:"+result+"<br>");
result = --a;
document.write("RESULT:"+result+"<br>");
result = --a - --b;
document.write("RESULT:"+result+"<br>");
result = --a - --b + ++b;
document.write("RESULT:"+result+"<br>");
result = --a - --b + ++b + b--;
document.write("RESULT:"+result+"<br>");

// Q3
var name=prompt("Enter your name","Write here");
document.write("Hello!!! "+name+" Have a nice day");

// Q4
var num_table=prompt("Enter a number","Write here");
if(num_table==="")
{
    num_table=5;
    result=0;
    for(i=0;i<10;i++)
    {
        result=num_table*(i+1);
        document.write(num_table+" X "+(i+1)+" = "+result+"<br>");
    }
}
else{
    num_table=parseInt(num_table);
    result=0;
    for(i=0;i<10;i++)
    {
        result=num_table*(i+1);
        document.write(num_table+" X "+(i+1)+" = "+result+"<br>");
    }
}

// Q5
var subject_1=prompt("Enter first Subject Name","Enter Subject name here");
var subject_2=prompt("Enter Second Subject Name","Enter Subject name here");
var subject_3=prompt("Enter third Subject Name","Enter Subject name here");
var total_marks=100;
var obtained_1=prompt("Enter obtained marks of subject 1","Enter marks here");
var obtained_2=prompt("Enter obtained marks of subject 2","Enter marks here");
var obtained_3=prompt("Enter obtained marks of subject 3","Enter marks here");
var percentage_1=(obtained_1/total_marks)*100
var percentage_2=(obtained_2/total_marks)*100
var percentage_3=(obtained_3/total_marks)*100
document.write("<table><tr><th>SUBJECT</th><th>TOTAL MARKS</th><th>OBTAINED MARKS</th><th>PERCENTAGE</th></tr><tr><td>"+subject_1+"</td><td>"+total_marks+"</td><td>"+obtained_1+"</td><td>"+percentage_1+"%"+"</td></tr><tr><td>"+subject_2+"</td><td>"+total_marks+"</td><td>"+obtained_2+"</td><td>"+percentage_2+"%"+"</td></tr><tr><td>"+subject_3+"</td><td>"+total_marks+"</td><td>"+obtained_3+"</td><td>"+percentage_3+"%"+"</td></tr></table>")



// CHAPTER 9-11
// Q1
var city=prompt("Enter your city name","enter your city name here");
if (city==="Karachi"||city==="karachi")
{
    alert("Welcome to city of lights")
}
else{
    alert("You are not in city of lights")
}

// Q2
var gender=prompt("Enter your gender");
if(gender==="Male"||gender==="male")
{
    alert("Good Morning Sir");
}
else if(gender==="Female"||gender==="female")
{
    alert("Good Morning Ma`am")
}
else{
    alert("Input is Invalid")
}

// Q3
var color=prompt("Enter color of road traffic signal","Enter Color here");
if (color==="red"||color==="Red")
{
    alert("MUST STOP")
}
else if (color=="yellow"||color==="Yellow")
{
    alert("Ready to move")
}
else if (color==="green"||color==="Green")
{
    alert("Move NOw")
}else{
    alert("Invalid Input")
}

// Q4
var fuel=prompt("Enter remaining fuel");
if (fuel<0.25)
{
    alert("Please Refill the fuel in your car")
}
else{
    alert("No need to refill")
}

// Q5
obtained_1=0
obtained_2=0
obtained_3=0
var obtained_1=parseInt (prompt("Enter obtained marks of subject 1","Enter marks here"));
var obtained_2=parseInt( prompt("Enter obtained marks of subject 2","Enter marks here"));
var obtained_3=parseInt( prompt("Enter obtained marks of subject 3","Enter marks here"));
var total_obtained=obtained_3+obtained_2+obtained_1
var total_marks=300;
var percentage=(total_obtained/total_marks)*100
document.write("TOTAL MARKS: "+total_marks+"<br>");
document.write("MARK Obtained: "+total_obtained+"<br>");
document.write("Percentage "+percentage.toFixed(2)+"%"+"<br>");
if(percentage<60)
{
    document.write("GRADE :Fail"+"<br>")
    document.write("Remarks: Sorry")
}
else if(percentage>60&&percentage<70)
{
    document.write("GRADE :B"+"<br>")
    document.write("Remarks: Need to improve")
}
else if(percentage>70&&percentage<80)
{
    document.write("GRADE :A"+"<br>")
    document.write("Remarks: Good")
}
else if(percentage>80)
{
    document.write("GRADE :A+"+"<br>")
    document.write("Remarks: Excellent")
}

// Q6
var gues_number=Math.floor(Math.random()*11);
var gues=prompt("Enter number to guesss!!!!!");
if (gues_number==gues)
{
    alert("BINGO!! CORRECT ANSWER")
}
else if(gues==gues_number+1||gues==gues_number-1)
{
    alert("CLOSE ENOUGH TO CORRECT ANSWER")
}

// Q7
var num=prompt("Enter a number");
if((num%3)==0)
{
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 3")
}

// Q8
var num=prompt("Enter a number");
if ((num%2)==0)
{
    alert("Number is EVEN")
}
else {
    alert("Number is ODD")
}

// Q9
var temp=parseInt( prompt("Enter temperature"));
if(temp>10&&temp<20)
{
    alert("OMG!Todays Weather is Cool")
}
else if(temp>=20&&temp<30)
{
    alert("Todays Weather is cool")
}
else if(temp>=30&&temp<40)
{
    alert("The weather today is Normal")
}
else if(temp>=40)
{
    alert("It is too hot outside")
}

// Q10
var first_number=parseInt( prompt("Enter first number"));
var second_number=parseInt( prompt("Enter second number"));
var opt=prompt("Enter operation");
if (opt=="+")
{
    alert((first_number+second_number));
}
else if(opt=="-")
{
    alert(first_number-second_number);
}
else if(opt=="*")
{
    alert(first_number*second_number)
}
else if(opt=="/")
{
    alert(first_number/second_number)
}

// chapter 12-13
Q1
var input_var=prompt("Enter a number or Letter","Enter here");
if (isNaN(input_var))
{
   var asci=input_var.charCodeAt(0)
   if (asci>90)
   {
       alert("It is a lower case letter")
   }else{
       alert("It is a upper case Letter")
   }

}
else{
    alert("It is a number");
}

// Q2
var num1=prompt("Enter first number");
var num2=prompt("Enter second number");
if(num1==num2)
{
    alert("Numbers are Equal")
}
else if(num1>num2)
{
    alert("Number1 is greater")
}
else 
{
    alert("Number2 is greater")
}

// Q3
var num=prompt("Enter a number","Enter number here");
if (num>0)
{
    alert("Number is positive")
}
else if (num<0)
{
    alert("Number is negative")
}
else if(num==0)
{
    alert("Number is Zero")
}

// Q4
var letter=prompt("Enter a Letter","Write here");
if (letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u')
{
    alert("The Letter is a Vowel")
}
else{
    alert("Letter is not a Vowel")
}

// Q5
var correct_password="123456"
var pass=prompt("Enter password","Enter Passwor here");
if(pass==="")
{
    alert("Please Enter Your Password")
}
else if(pass==correct_password)
{
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect Password")
}

// Q6
var greeting; 
var hour = 13;
 if (hour < 18)
  { 
      greeting = "Good day";
      alert(greeting)
  }
   else 
{
    greeting = "Good evening"; 
    alert(greeting)
}

// Q7
var time_var=prompt("Enter time in 24hrs format eg:(2400)","Enter time here");
if(time_var>="0000"&&time_var<"1200")
{
    alert("Good Morning")
}
else if(time_var>="1200"&&time_var<"1700")
{
    alert("Good Afternoon")
}
else if(time_var>="1700"&&time_var<"2100")
{
    alert("Good Evening")
}
else if(time_var>="2100"&&time_var<="2359")
{
    alert("Good Night")
}

// chapter14-16
// Q1
var student_names=[];

// Q2
var student_names_object={}

// Q3
var string_array=[];
string_array[0]="srtring_1";
string_array[1]="srtring_2";
string_array[2]="srtring_3";
for(var i=0;i<3;i++)
{
    document.write(string_array[i]+"<br>")
}

// Q4
var num_array=[];
num_array=[1,2,3]

// Q5
var boolean_array=[];
boolean_array[0]=false;
boolean_array[1]=true;
if(boolean_array[0])
    {
        document.write("FALSE")
    }
    else{
        document.write("TRUE")
    }

// Q6
var mix_array=[];
mix_array.push("String");
mix_array.push(34);
mix_array.push(true);
document.write(mix_array);

// Q7
var qualification=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
for(var i=0;i<qualification.length;i++)
{
    document.writeln(qualification[i]+"<br>")
}

// Q8
var student_names=["Micheal","John","Tony"];
var obtained_marks=[320,230,480];
total_marks=500;
var percentage_array=[]
percentage_array.push((obtained_marks[0]/total_marks)*100);
percentage_array.push((obtained_marks[1]/total_marks)*100);
percentage_array.push((obtained_marks[2]/total_marks)*100);
for(var i=0;i<student_names.length;i++)
{
    document.write("SCORE OF "+student_names[i]+" IS "+obtained_marks[i]+". Percentage: "+percentage_array[i]+"%<br>")
}

// Q9
var color_name=["yellow","Green","Blue"];
color_name[0]=prompt("Enter Color you want to add in begnning");
document.write(color_name);
color_name[color_name.length]=prompt("Enter color you want to add in the end");
document.write(color_name);
color_name.push("mergenda");
color_name.push("seablue");
color_name.pop();
document.write(color_name)
i=prompt("Enter index at which you want to enter the color");
name=prompt("Enter color name")
color_name[i]=name;
document.write(color_name);
i=prompt("Enter index at which you want to delete the color");
c=prompt("How many color you want to delete");
for(var j=0;j<color_name.length;j++)
{
    delete color_name[c+j];
}
document.write(color_name);

// Q10
var score=[320,230,480,120];
document.write("Score Of Students "+score+"br")
score.sort();
document.write("Ordered Score of Students "+score)

// Q11
var arr=["This","is","my","cat"];
joint=arr.join()
document.write(joint)

// Q12(FIFO)
var arr=[];
arr.push(1);
document.write(arr+"<br>")
arr.push(2);
document.write(arr+"<br>")
arr.push(3);
document.write(arr+"<br>")
arr.shift()
document.write(arr+"<br>")
arr.shift()
document.write(arr+"<br>")
arr.shift()
document.write(arr+"<br>")


// Q13(LIFO)
var arr=[];
arr.push(1);
document.write(arr+"<br>")
arr.push(2);
document.write(arr+"<br>")
arr.push(3);
document.write(arr+"<br>")
arr.pop()
document.write(arr+"<br>")
arr.pop()
document.write(arr+"<br>")
arr.pop()
document.write(arr+"<br>")

// Q14
var manufacturer=["Apple","Sumsung","Motorolla","Nokia","Sony","Haier"];
manufacturer.forEach(get);
function get(a)
{
    document.write(a+"<br>");
}

// chapter 17-20
// Q1
var arr=[]
arr=[["A",1],["B",2]];

// Q2
var arr=[];
arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
arr.forEach(get)
function get(s)
{
    document.write(s+"<br>");
}

// Q3
for(var i=1;i<=10;i++)
{
    document.write(i+"<br>");
}

// Q4
var table_num=prompt("Enter Table Number");
var len=prompt("Enetr table length");
var result=0;
for(var i=1;i<=len;i++)
{
    result=i*table_num
    document.write(table_num+" X "+i+" = "+result+"<br>")
}

// Q5
var fruits=["apple","banana","mango","Orange","Strawberry"];
for(var i=0;i<fruits.length;i++)
{
    document.write(fruits[i]+"<br>");
}

// Q6
for(var i=1;i<=15;i++)
{
    document.write(i+" ");
}
document.write("<br>")
for(var i=10;i>=1;i--)
{
    document.write(i+" ");   
}
document.write("<br>")
for(var i=0;i<=20;i+=2)
{
    document.write(i+" ");
}
document.write("<br>")
for(var i=1;i<=20;i+=2)
{
    document.write(i+" ");
}
document.write("<br>")
for(var i=2;i<=20;i+=2)
{
    document.write(i+"K ");
}

// Q7
var A=["Cake","Apple Pie","Cookie","Chips","Patties"];
var search=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
ind=A.indexOf(search);
if (ind<0)
{
    document.write("We are sorry "+search+" is <b>not available</b> in our bakery")
}
else{
    document.write(search+" is <b>is available</b> at index "+ind+" in our bakery")
}

// Q8
var A = [24, 53, 78, 91, 12]
var temp=0;
for(var i=0;i<A.length;i++)
{
    if(A[i]>temp)
    {
        temp=A[i];
    }
}
document.write("LARGEST NUMBER IS "+temp)

// Q9
var A = [24, 53, 78, 91, 12]
temp=100;
for(var i=0;i<A.length;i++)
{
    if(A[i]<temp)
    {
        temp=A[i];
    }
}
document.write("Smallest NUMBER IS "+temp)

// Q10
for(var i=0;i<=100;i+=5)
{
    if(i==0)
    {

    }
    else{
        document.write(i+" ");
    }
   
}

// chapter 21-25
// Q1
var first_name=prompt("Enter Your First Name");
var last_name=prompt("Enter Your Last Name");
var Full_name;
Full_name=first_name+" "+last_name;
alert("Hello!!! "+Full_name);

// Q2
var model=prompt("Enter your Favourite Model");
document.write("LENGTH OF STRING:"+model.length);

// Q3
var str="Paksitani";
document.write("INDEX OF 'n': "+str.indexOf('n'));

// Q4
var str="Hello World";
document.write("LAST INDEX OF 'l': "+str.lastIndexOf('l'));

// Q5
var str="Pakistani";
document.write(" CHARACTER AT INDEX 3 : "+str.charAt(3));

// Q6
var first_name=prompt("Enter Your First Name");
var last_name=prompt("Enter Your Last Name");
var Full_name;
Full_name=first_name.concat(last_name)
alert("Hello!!! "+Full_name);

// Q7
var city="Hyderabad";
var rep = city.replace("Hyderabad","Islamabad");
document.write(rep);

// Q8
var message="Ali and Sami are best friends. They play cricket and football together.";
var rep=message.replace(/and/g,"&");
document.write(rep);

// Q9
var str="472";
document.write(str+"<br>");
document.write(typeof str+"<br>")
var num =parseInt(str);
document.write(num+"<br>");
document.write(typeof num)

// Q10
var str=prompt("Enter string to convert in UPPER CASE");
document.write(str.toUpperCase());

// Q11
var str=prompt("Enter string to convert in UPPER CASE");
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
 
str=titleCase(str);
document.write("TITLE CASE: "+str )

// Q12
 num=35.36;
 str=num.toString().replace(".","");
document.write(str);

// Q13
var nam=prompt("Enter Username","Enter here!!")
var n_split=nam.split('');
for(var i=0;i<n_split.length();i++)
{
    if(n_split[i]=="!"||n_split[i]=="@"||n_split[i]=="."||n_split[i]==",")
    {
        alert("Please input valid name");
        break
    }
}
alert("Hello "+nam);

// chapter 26-30
// Q1
var num=parseFloat (prompt("Enter Positive integer"));
document.write("NUmber: "+num+"<br>");
document.write("Round Off Value: "+Math.round(num)+"<br>");
document.write("Floor Value: "+Math.floor(num)+"<br>");
document.write("CEIL: "+Math.ceil(num)+"<br>");

// Q2
var num=parseFloat (prompt("Enter Positive integer"));
document.write("NUmber: "+num+"<br>");
document.write("Round Off Value: "+Math.round(num)+"<br>");
document.write("Floor Value: "+Math.floor(num)+"<br>");
document.write("CEIL: "+Math.ceil(num)+"<br>");

// Q3
var num=parseFloat (prompt("Enter integer"));
document.write("The absolute value is: "+Math.abs(num));

// Q4
random_dice=Math.floor( Math.random()*7);
if(random_dice==0)
{
    //roll again
    random_dice=Math.floor( Math.random()*7);
}
document.write("Random Dice Value: "+random_dice);

// Q5
random_coin=Math.floor( Math.random()*2);
var status;
if(random_coin==0)
{
    status="Tails"
    //roll again
    document.write("Random Coin Value: "+status);
}
else{
    status="Head";
    document.write("Random Coin Value: "+status);
}

// Q6
random_num=Math.ceil( Math.random()*99);
document.write("Random Number between 1 and 100: "+random_num);

// Q7
var weight_2=prompt("Enter your weight","Enter weight here")
var weight_1=parseFloat (weight_2);
var w=Math.trunc(weight_1);
var rep=weight_2.replace(w.toString,"")
var w1=Math.trunc(rep)
document.write("The weight of user is "+w+" Kilograms");

// Q8
var random_num=Math.ceil( Math.random()*9);
var num=parseInt( prompt("Guess the number between 1-10"));
if(random_num==num)
{
    document.write("Congrats You Guess It Right!!!");
}
else
{
    document.write("Wrong Guess!!!!"+"<br>");
    document.write("Right Answer is: "+random_num);
}

// chapter 31-34
// Q1
var today=new Date();
var date=today.getDay(0)+" "+today.getMonth()+" "+today.getDate()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+" "+today.getTimezoneOffset();
document.write(date);

// Q2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today=new Date();
var month=today.getMonth()
document.write("CURRENT MONTH: "+months[month]);

// Q3
var days=["sun","mon","tue","wed","thu","fri","sat"];
var today=new Date();
day=today.getDay();
document.write("Today is: "+days[day]);

// Q4
var today=new Date();
day=today.getDay();
if(day==0||day==6)
{
    document.write("IT IS FUN DAY");
}
else{
    document.write("IT IS WORKING DAY")
}

// Q5
var today=new Date();
date=today.getDate();
if(date<16)
{
    document.write("FIRST FIFTEEN DAY OF MONTH");
}
else{
    document.write("Last day of Month")
}

// Q6
var today=new Date();
var time=today.getTime()
document.write("MIliseconds since january 1,1970: "+time+"msec<br>");
document.write("Minutes since january 1,1970: "+(time/60000)+"min");

// Q7
var today=new Date();
hours=today.getHours();
if(hours%12==hours)
{
    document.write("ITS AM");
}
else{
    document.write("ITS PM")
}

// Q8
var today=new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month_num=today.getMonth()
var name="ABC CUSTOMER";
var month=months[month_num];
var nu=410;
var cu=16;
var na=6560;
var lp=350;
var ga=6910;
document.write("<h1>K-Electric Bill</h1><br>")
document.write("Customer Name: "+name+"<br>");
document.write("Month: "+month+"<br>");
document.write("Number Of Units "+nu+"<br>");
document.write("Charges per Unit: "+cu+"<br>");
document.write("Net Amount Payable(Within Due date): "+na+"<br><br>");
document.write("Late Amount surcharge: "+lp+"<br>");
document.write("Gross Amount Payable (After Due Date): "+ga+"<br>");

// chapter 35-38
// Q1
function date()
{
    var today=new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days=["sun","mon","tue","wed","thu","fri","sat"];
 var date=days[today.getDay(0)]+" "+months[today.getMonth()]+" "+today.getDate()+" "+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+" "+today.getTimezoneOffset();
  document.write(date);
}
date();

// Q2
function name()
{
    var first_name=prompt("Enter your first name");
    var last_name=prompt("Enter you last name");
    var full_name=first_name+" "+last_name;
    alert("Hello: "+full_name);
}
name();

// Q3
function sum(a,b)
{
    return(a+b)
}
var c=sum(3,4);
document.write("ADD:"+c)


// Q4
function cal(num1,num2,opra)
{
    if(opra=='/'&&num2==0)
    {
        document.write("IN DIVISION OPERATION DENOMINATOR CANNOT BE ZERO");
        return;
    }
    switch(opra){
        case '+':
            return(num1+num2);
            break;
        case '-':
            return(num1-num2);
            break;
        case '*':
            return(num1*num2);
            break;
        case '/':
            return(num1/num2);
            break;
    }
}
var num1=prompt("Enter number 1");
var num2=prompt("Enter Number 2");
var opra=prompt("Enter Operation");
var result=cal(num1,num2,opra);
document.write("ANSWER IS "+result);

// Q5
function square(num)
{
    return(num**2)
}
num=prompt("Enter a number to find out its square");
var result=square(num);
document.write("ANSWER IS "+result);


// Q6
function fact(num){
    var f=1;
    for(var i=num;i>0;i--)
    {
        f=f*i;
    }
    return f;
}
num=prompt("Enter a number to find out its Factorial");
var result=fact(num);
document.write("ANSWER IS "+result);

// Q7
function counting(start,end)
{
    for(var i=start;i<=end;i++)
    {
        document.write(i+" ");
    }

}
var start=prompt("Enter a Start number");
var end=prompt("Enter a End number");
counting(start,end);

// Q8
function hyp(base,perp)
{
    function square(num)
    {
        return(num**2);
    }
    base=square(base);
    perp=square(perp);
    var result=base+perp;
    document.write("Hypotnuse of Triangle is: "+result);
}
var base=prompt("Enter a base ");
var perp=prompt("Enter a perpendicular ");
hyp(base,perp);

// Q9
function area(h,w)
{
    return(h*w);

}
var h=prompt("Enter a height ");
var w=prompt("Enter a width ");
var result=area(h,w);//by variable
document.write("ANSWER IS "+result+"<br>");
var result=area(3,2);//by value
document.write("ANSWER IS "+result);


// Q10
function pailndrome(str)
{
    for(var i=0 ,j=(str.length-1);i<str.length;i++,j--)
    {
        if(str[i]==str[j])
        {
            continue;
        }
        else{
            document.write("NOt A Pailndrome");
            break;
        }
    }
    document.write("STRING IS PAILNDROME");
}
var str=prompt("Enter a String to find out it is pailndrome or not");
pailndrome(str);

// chapters38-42

// Q1
function custom_pow(num,pow)
{
    return(num**pow);
}
var num=prompt('Enter number');
var pow=prompt("Enter power to be converted");
var result=custom_pow(num,pow);
document.write("ANSWER IS "+result);

// Q2
function area(a,b,c)
{
    var s=(a+b+c)/2;
    a=s*(s-a)*(s-b)*(s-c);
    return a;
}
var a=prompt("Enter length of First side");
var b=prompt("Enter length of Second side");
var c=prompt("Enter length of Third side");
var result=area(a,b,c);
document.write("AREA IS "+result);

// Q3
function main_function(mark1,mark2,mark3)
{
    function percentage(mark1,mark2,mark3)
    {   
        var percent=((mark1+mark2+mark3)/300)*100;
        return percent;

    }
    function average(mark1,mark2,mark3)
    {
        avg=(mark1+mark2+mark3)/3;
        return avg;

    }
    var percent=percentage(mark1,mark2,mark3);
    var avg=average(mark1,mark2,mark3);
    document.write("The percentage is: "+percent+"<br>");
    document.write("The Average is: "+avg);
}
var a=prompt("Enter subject 1 marks");
var b=prompt("Enter subject 2 marks");
var c=prompt("Enter subject 3 marks");
main_function(a,b,c);a

// Q4
function index_of(str,item)
{
    for(var i=0;i<str.length;i++)
    {
        if(str[i]==item)
        {
            return i;
        }
    }
}
var str=prompt("Enter string");
var item=prompt("Enter character you want to search");
var index=index_of(str,item)
document.write("The Character "+item+" is present at index "+index);

// Q5
function vowels_Elimination(str)
{
    for(var i=0;i<str.length;i++)
    {
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
        {
            str=str.splice(i);
        }
    }
    document.write("String without vowels :"+str);
}
var str=prompt("Enter string to remove vowels");
vowels_Elimination(str);

// Q6
function meters(kilo_meter)
{
    var meter=kilo_meter*1000;
    return meter;
}
function centimeters(kilo_meter)
{
    var centimeter=kilo_meter*1000*100;
    return centimeter;
}
function feet(kilo_meter)
{
    var Feet=kilo_meter*3281;
    return Feet;
}
function inches(kilo_meter)
{
    var inch=kilo_meter*39370;
    return inch;
}
var km=parseFloat(prompt("Enter distance in kilometer"));
var meter=meters(km);
var cm=centimeters(km);
var Feet=feet(km);
var inch=inches(km);
document.write("INCHES: "+inch+" METERS: "+meter+" CENTIMETER: "+cm+" FEET: "+Feet);

// Q7
function overtime(hours)
{
   if(hours>40)
   {
       overtime1=hours-40;
       var pay=overtime1*12;
       return (pay);
   }
   else{
       print("NO ADDITIONAL HOURS");
   }
}
var hours=parseInt(prompt("Enter number of working hours"));
var pay=overtime(hours);
document.write("YOUR OVERTIME PAY IS "+pay);

// Q8
function denomination(amount)
{
    var h=Math.trunc( amount/100);
    var ht=Math.trunc(amount%100);
    var f=Math.trunc(ht/50);
    var ft=Math.trunc(ht%50);
    var t=Math.trunc(ft/10);
    document.write("You will have "+h+" hundred notes "+f+" fifty notes "+t+" ten notes");
}
var amount=prompt("Enter amount to withdraw");
denomination(amount);



// chapter 43-48
Q1
function open_link()
{
    alert("Thanks for opening this link");
}

// Q2
function mobile_purchase()
{
    alert("Thank you for Purchasing this Mobile");
}

// Q3
function del(i)
{
    document.getElementById("my_table").deleteRow(i);

}

// Q4
function change_imager()
{
    imager=document.getElementById("imager");
    imager.src="https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349"
}
function remain_imager()
{
    imager=document.getElementById("imager");
    imager.src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
}

// Q5
function counter_increase()
{
    input_screen=document.getElementById("input_screen");
    input_screen.value++;
}
function counter_decrease()
{
    input_screen=document.getElementById("input_screen");
    input_screen.value--;
}

// chapter 49-52
// Q1
function submission()
{
    email=document.getElementById("email");
    password=document.getElementById("password");
    password_confirm=document.getElementById("password_confirm");

    var mail=email.value;
    var pass=password.value;
    var repass=password_confirm.value;
    if(pass==repass)
    {
        document.write("<h1>YOUR SUBMISSION</h1>");
        document.write("<b>MAIL</b>:"+mail+"<br>");
        document.write("<b>PASSWORD</b>: "+pass);
    }
    else
    {
        document.write("<b>PASSWORD ERROR</b>")
    }
}

// Q2
function read_more()
{
    var para=document.getElementById('para');
    para.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, hic laudantium qui dolor magnam ipsum eveniet minus quis error iure nihil dolore. Rem eligendi, quos numquam incidunt consectetur repellat culpa!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque ab dolorum dignissimos amet necessitatibus ipsa ex eum odio minus rerum, nihil nobis! Quisquam illum suscipit maiores dolores. Possimus, rerum."

}



//chapter 52-57
//Q2
function modal_size(index)
{
    var default_size=document.getElementsByClassName("default_size");
    default_size[index].className="after_click";

}
function default_sizer(index)
{
    var default_size=document.getElementsByClassName("default_size");
    default_size[index].className="before_click";

}





// 58-67
// Q1
function dom1()
{
    var main_content=document.getElementById("main-content");
    console.log(main_content.childNodes);
    var render=document.getElementsByClassName("render");
    for(var i=0;i<5;i++)
    {
        console.log(render[i].innerHTML);
    }
    var first_name=document.getElementById("first-name");
    first_name.value="Huzaifa";
    console.log(first_name.value)
    var lastname=document.getElementById("last-name");
    lastname.value="Shahid";
    console.log(lastname.value)
    var email=document.getElementById("email");
    email.value="alexbank@example.com"
    console.log(email.value)
    
}
dom1()

// Q2
function dom2()
{
    var form_content=document.getElementById("form-content");
    console.log("FORM CONTENT NODE TYPE: "+form_content.nodeType);
    var lastname=document.getElementById("lastName");
    console.log("LAST NAME NODE TYPE: "+lastname.nodeType);
    var last_name_text=document.createTextNode("BANK LIMITED");
    lastname.innerHTML="Last Name: "
    lastname.appendChild(last_name_text);
    console.log(lastname.innerHTML);
    var main_content=document.getElementById("main-content");
    console.log("FIRST CHILD"+main_content.firstChild);
    console.log("LAST"+main_content.lastChild);
    console.log("NEXT SIBLING OF LASTNAME "+lastname.nextSibling);
    console.log("PREVIOUS SIBLING OF LAST NAME "+lastname.previousSibling);
    var email=document.getElementById("email");
    console.log("EMAIL PARENT NODE "+email.parentNode);
    console.log("NODE TYPE EMAIL "+email.nodeType);


}
dom2()

