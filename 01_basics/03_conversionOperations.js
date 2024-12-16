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