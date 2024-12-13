//Question 1
console.log("Question 1")
var num = [-1,3,4,6,0]
const max = num.reduce((a,b)=> Math.max(a , b))
alert(`The Maximum values for the numbers ${num} is : ${max}`)
for ( var i =0; i <= num.length; i++)
{
        
    
}

//Question 2
console.log("Question 2")


function fizz_buzz(){
    var x = document.getElementById("usr_fizz").value
        if (x % 3 === 0 && x% 5 === 0) {
            console.log(`The given ${x} number will divide by 3 and 5:`, " FizzBuzz");
        }
        else if (x % 3 === 0) {
            console.log(`The given ${x} number will divide by 3:`, " Fizz");
        }
        else if (x % 5 === 0) {
            console.log(`The given ${x} number will divide by 5:` ," Buzz");
        }
        else {
            console.log(`The given ${x} number won't divide by 3 and 5`);
        }
}


// Question 3
console.log("Question 3")
function usr_pattern(){
    var usr_input = document.getElementById("usr_input").value
    for (var i = 1; i <= usr_input  ; i++ )
    
    {
        var str1 = ""
        for(var j= 1; j <= i; j++)
            {
                str1 += "*"
            }
        console.log(str1)
    }
}

//Question 4
console.log("Question 4")
var arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for ( var i in arr)
{
    console.log("Row: "+i) // Nested Loop
    for( var j in arr[i])
        console.log("",arr[i][j])
}

//Question 5
console.log("Question 5")
function usr_evenodd(){
    const num1 = document.getElementById("usr_evenodd").value
    for (var i = 0; i<= num1; i++)
        {
            if(i === 0)
            {
                console.log(`give high number !`)
            }
            else if(i%2 === 0)
            {
                console.log(`The given number ${i} is even`)
            }
            else{
                console.log(`The given number ${i} is odd`)
            }
        }

}
