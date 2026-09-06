// Q1
var a = 10
document.write ("Result: "+"<br>")
document.write ("The value of a is: "+a+"<br>")


document.write("The value of ++a is :" +(++a)+ "<br>")
document.write("Now the value of a is: "+a+"<br>")

document.write("The value of a++ is :" + (a++) +"<br>")
document.write ("Now the value of a is: "+a+"<br>")

document.write("The value of --a is: "+(--a)+ "<br>")
document.write("Now the value of a is: "+a+"<br>")

document.write("The value of a-- is: "+(a--)+ "<br>")
document.write("Now the value of a is: "+a+"<br>")

// Q2

var a = 2, b = 1
document.write ("a is: " +a+ "<br>")
document.write ("b is: " +b+ "<br>")
var result = --a - --b + ++b + b--
document.write("Result is :"+result)

// Q3 

var userName = prompt("What is your Name?")
alert("Welcome to my website "+ userName)

// Q5

var num = prompt("Put any number", 5 )
document.write ("Table of "+num+"<br>")
document.write (num+"x1="+num*1+"<br>")
document.write (num+"x2="+num*2+"<br>")
document.write (num+"x3="+num*3+"<br>")
document.write (num+"x4="+num*4+"<br>")
document.write (num+"x5="+num*5+"<br>")
document.write (num+"x6="+num*6+"<br>")
document.write (num+"x7="+num*7+"<br>")
document.write (num+"x8="+num*8+"<br>")
document.write (num+"x9="+num*9+"<br>")
document.write (num+"x10="+num*10+"<br>")

// Q6

var subject1 = prompt("Enter your first subject")
var subject2 = prompt("Enter your second subject")
var subject3 = prompt("Enter your third subject")
var tMarksEachSubject = 100
var obtMarks1 = +prompt("what are your obtained marks in "+subject1+"?")
var obtMarks2 = +prompt("what are your obtained marks in "+subject2+"?")
var obtMarks3 = +prompt("what are your obtained marks in "+subject3+"?")
var percentage1 = (obtMarks1 / tMarksEachSubject) * 100;
var percentage2 = (obtMarks2 / tMarksEachSubject) * 100;
var percentage3 = (obtMarks3 / tMarksEachSubject) * 100;
var tMarks = tMarksEachSubject*3
var tMarksObt = obtMarks1+obtMarks2+obtMarks3
var totalPercentage = (tMarksObt / tMarks) * 100
document.write(`
    <table>
         <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
         <tr>
            <td>${subject1}</td>
            <td>${tMarksEachSubject}</td>
            <td>${obtMarks1}</td>
             <td>${percentage1}%</td>
        </tr>
        <tr>
            <td>${subject2}</td>
            <td>${tMarksEachSubject}</td>
            <td>${obtMarks2}</td>
            <td>${percentage2}%</td>
        </tr>
        <tr>
            <td>${subject3}</td>
            <td>${tMarksEachSubject}</td>
            <td>${obtMarks3}</td>
            <td>${percentage3}%</td>
        </tr>
        <tr>
            <td></td>
            <td>${tMarks}</td>
            <td>${tMarksObt}</td>
            <td>${totalPercentage}%</td>
        </tr>
    </table>
        `)