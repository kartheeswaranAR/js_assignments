//Question 1
console.log("Question 1")
var str1 = "Hi my name is kartheeswaran !, this is my name"
var res_str1 = str1.replace("name", "Name") // Replace one seq of char
console.log(res_str1)
var res1_str1 = str1.replaceAll("name", "Name") // Replace all seq of char
console.log(res1_str1)

//Question 2
console.log("Question 2")
var res2 = str1.substring(3 , 21)
console.log("The Extracted substring from sequence:",res2)

//Question 3
console.log("Question 3")
var let_res3 = str1.startsWith("H",0)
var res3 = str1.startsWith("Hi")
var res4 = str1.endsWith("Hi")
console.log("The letter starts at H is ",let_res3)
console.log("The Word starts at with is ",res3)
console.log("The letter ends with Hi is ",res4)

//Question 4
console.log("Question 4")
var str2 = "JavaScript"
var substr = "pt"
console.log("The P and T are includes: ", str2.includes(substr))
console.log("The P and T are includes at the count of : ", str2.split(substr).length -1)

//Question 5 and 6
console.log("Question 5 & 6")
var res6 = str1.substring(1,45) //using indexing
var len_res6 = str1.substring(1, str1.length - 1 ) //using length of sequence
if ( str1.substring(1,45) === str1.substring(1, str1.length - 2 ))
{
    console.log("The seq is:", str1)
}
else
{
    console.log("The seq is:", len_res6)
}
// console.log("The seq is:", res6)
// console.log("The seq is:", len_res6)

//Question 7
console.log("Question 7")
var str3 = "Dog"

for (var i = 0; i < str3.length; i++ )
    {
        //console.log(i)
    for(var j= i; j < str3.length; j++)
        {
            var substring = ""
            for ( var k = i; k<=j; k++)
            {
                substring += str3[k]
            }
            //result = str3[i]
            console.log(substring)
        }
    }
//Question 8
console.log("Question 8")


