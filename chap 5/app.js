// Q1
var num1 = 3
var num2 = 5
var add = num1 + num2
document.write ("Sum of "+num1+" "+ "and "+num2+" "+ "is "+add )
document.write("<br>")
// Q2
var num1 = 3
var num2 = 5
var subtract = num1 - num2
document.write ("Subtraction of "+num1+" "+ "and "+num2+" "+ "is "+subtract )
document.write("<br>")
var num1 = 3
var num2 = 5
var multiply = num1 * num2
document.write ("Multiplication of "+num1+" "+ "and "+num2+" "+ "is "+multiply )
document.write("<br>")
var num1 = 3
var num2 = 5
var divide = num1 / num2
document.write ("Division of "+num1+" "+ "and "+num2+" "+ "is "+divide )
document.write("<br>")
var num1 = 3
var num2 = 5
var remainder = num1 % num2
document.write ("Modulus of "+num1+" "+ "and "+num2+" "+ "is "+remainder )
document.write("<br>")
// Q3
var declaration = "Value after variable declaration is undefined"
document.write (declaration)
document.write("<br>")
var initial = 5
document.write ("Initial value: "+initial)
document.write("<br>")
++initial
document.write ("Value after increment is: "+initial)
document.write("<br>")
var subsequent = initial+7
document.write("Value after addition is: "+subsequent)
document.write("<br>")
subsequent--
document.write("Value after decrement is: "+subsequent)
document.write("<br>")
subsequent=subsequent%3
document.write("The reminder is: "+subsequent)
document.write("<br>")
// Q4
var ticket = 600
ticket=ticket*5
document.write ("Total cost to buy 5 tickets is "+ticket+"PKR")
document.write("<br>")
// Q5
var num=4
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
var celcius=25
var fahrenheit= (celcius*9/5)+32
document.write(celcius+"℃ is "+fahrenheit+"℉"+"<br>")
var fahrenheit=70
var celcius= (fahrenheit-32)*5/9
document.write(fahrenheit+"℉ is "+celcius+"℃")
// Q7
var item1 = 650
var item2 = 100
var quantity1 = 3
var quantity2 = 7
var shipping = 100
document.write ("<h1> Shopping Cart</h1>"+"<br>"+"<br>")
document.write ("Price of item 1 is "+item1+ "<br>")
document.write ("Quantity of item 1 is "+quantity1+"<br>")
document.write ("Price of item 2 is "+item2+"<br>")
document.write ("Quantity of item 2 is "+quantity2+"<br>"+"<br>")
document.write ("Total cost of your order is " + (item1*quantity1 + item2*quantity2 + shipping))
// Q8
var tMarks = 980
var marksOb = 804
document.write ("<h1> Marks Sheet</h1> "+"<br>")
document.write ("Total marks: "+tMarks+"<br>")
document.write ("Marks obtained: "+marksOb +"<br>")
document.write ("Percentage: "+(marksOb/tMarks*100)+"%")
// Q9
var dollar = 10
var riyal = 25
var dollar1toPKR = 104.80
var riyal1toPKR = 28
document.write ("<h1>Currency in PKR</h1> "+ "<br>")
document.write ("Total currency in PKR: "+(dollar*dollar1toPKR+riyal*riyal1toPKR) + "<br>"+"<br>")
// Q10
var number = 5
document.write (((number+5)*10)/2+ "<br>" + "<br>")
// Q11 
var cYear = 2016
var bYear = 1992
var age1 = cYear-bYear
var age2 = age1-1
document.write ("They are either "+age1+" "+"or "+age2+" "+"years old."+ "<br>")
// Q12 
var radius = 20
var pi =3.142
var circumference = 2*pi*radius
var area = pi*radius*radius
document.write("<h1>The Geometrizer</h1>"+ "<br>")
document.write("Radius of a circleL: "+radius+ "<br>")
document.write("The circumference is: "+circumference+ "<br>")
document.write("The area is: "+area+"<br>")
// Q13
var favSnack = "chocalate chip"
var currentAge = 15
var estMaxAge = 65
var amntADay = 3
document.write("<h1> The lifetime supply calculator</h1>"+"<br>")
document.write ("Favourite snack: "+favSnack+"<br>")
document.write ("Current age: "+currentAge+"<br>")
document.write ("Estimated maximum age "+estMaxAge+"<br>")
document.write ("You will need "+((estMaxAge-currentAge)*365*amntADay)+" "+favSnack+ " "+"to last the rip old age of "+estMaxAge)



