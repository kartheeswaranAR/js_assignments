//Question 1
console.log("Question 1")
let a = 20
a++ == a; // post increment
console.log("The number of post increment :" ,a)

let b = 20
--b == b // pre decrement
console.log("The number of pre decrement :" ,b)


//Question 2
console.log("Question 2")
var age_1 = 25
age_1 = 26
console.log(typeof age_1)
console.log("The age of person :", age_1) //after changed the age of person is changes to 26

//Question 3
console.log("Question 3")
let a2 = 9.5
let b2 = 2.3
const res =  ( a2 + b2 ) / (a2 - b2)
const res_round = Math.round(res) // for rounding of the number from floats / decimals
console.log("The computed value :", res_round)

//Question 4
console.log("Question 4")
const usr_limit = 100;
let max_limit = 100
if(max_limit == usr_limit){
    console.log("the limit is :", max_limit, "Thank you for maintaining")
}
else{
    console.log("The limit is :",max_limit, "Only !")
}

//Question 5
console.log("Question 5")
let a3 = 6
let b3 = 3
const res1 =  ( a3 + b3 ) * (a3 - b3) / b3
console.log("The computed value :", res1)

//Question 6
console.log("Question 6")
var num1 = 0.1
var num2 = 0.2
var res_num = num1 + num2
//var res_num_round = Math.round(res_num)
var res_num_round = Math.floor(res_num * 10) // round and floor returns same result
console.log("The sum of two numbers ",num1,"&",num2,"is :",res_num)
console.log("The sum of two numbers rounded of is :",res_num_round)

//Question 7
console.log("Question 7")
let m = 25
let n = 10
let v = 5

let x_res = ((m / v) + n) % v
console.log("The computed value :", x_res) // executes the zero
