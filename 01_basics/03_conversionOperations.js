let score = "33abc"

console.log(typeof score); //string
console.log(typeof (score));//string

let valueInNumber  = Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//Not a Number => NaN





let count = null;

console.log(typeof count);//object
console.log(typeof(count));//object

let valueToNumber = Number(count)
console.log(typeof valueToNumber);//number
console.log(valueToNumber);//0





let store = true

console.log(typeof store);//boolean
console.log(typeof(store));//boolean

let valueNumber = Number(store) //convert boolean  in to integer datatype
console.log(typeof valueNumber);//number
console.log(valueNumber);//1




let Name = "Niyati"

console.log(typeof Name);//string
console.log(typeof(Name));//string

let valueIsNumber = Number(Name) //convert values in number datatype
console.log(typeof valueIsNumber);//number
console.log(valueIsNumber);//NaN




let age = undefined

console.log(typeof age);//undefined
console.log(typeof(age));//undefined

let valueTooNumber = Number(age) //convert values in number datatype
console.log(typeof valueTooNumber);//number
console.log(valueTooNumber);//NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false = 0

let isLoggedIn = "Niyati"
let booleanIsLOggedIn = Boolean(isLoggedIn) //convert values in boolean datatype
console.log(booleanIsLOggedIn);//true

//  1 => true; 0 => false
//  "" => false
//  "Niyati" => true
//  string(niyati) or number(1) both  are true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(typeof stringNumber); //string
console.log(stringNumber);//33

//*********************************************** Operations ********************************************************************/

let value = 3
let negValue = -value
//console.log(negValue);//-3

//console.log(2+2);//4
//console.log(2-2);//0
//console.log(2*2);//4
//console.log(2**3);//8
//console.log(2/3);//0.6666666
//console.log(2%3);//2

let str1 = "hello"
let str2 = " Niyati"

let str3 = str1 + str2
console.log(str3);//hello Niyati

// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + "2");//12
// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "2");//32

// console.log( (3+ 4) * 5 % 3);//2

console.log(+true);//1
console.log(true);//true
console.log(+"");//0

let num1 , num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter;// ++gameCounter => 101
console.log(gameCounter);//100
















