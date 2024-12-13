//Question 1
console.log("Question 1")

function check_mark(){
    const usr_mark = document.getElementById('usr_mark').value
    switch (true)
    {
        case (usr_mark >= 90 && usr_mark <= 100):
            console.log("Congrats ! Your grade is A")
            break;
        case (usr_mark >= 80 && usr_mark <= 89):
            console.log("Congrats ! Your grade is B")
            break;
        case (usr_mark >= 70 && usr_mark <= 79):
            console.log("Congrats ! Your grade is C")
            break
        case (usr_mark >= 60 && usr_mark <= 69):
            console.log("Congrats ! Your grade is D")
            break
        case (usr_mark <= 60):
            console.log("Sorry buddy, You failed !")
            break
        default:
            console.log("Invalid Input")
    }
}


//Question 2
console.log("Question 2")
function vote_usr(){
    const vote_usr = document.getElementById('vote_usr').value
    switch (true)
    {
        case (vote_usr >= 18):
            console.log("Congrats ! Your vote options will available this year !")
            break;
        case (vote_usr < 18):
            console.log("Sorry dude ! go and study !")
            break;
        default:
            console.log("Invalid Input")
    }
}

//Question 3
console.log("Question 3")
function cent_usr(){
    const cent_usr = document.getElementById('cent_usr').value
    var year = Math.ceil(cent_usr / 100)
    if(year >= 0)
        console.log( ` The ${year} Century is happening !`)
    else
        console.log("Invalid Year !")
}

//Question 4
console.log("Question 4")
function isLeapyear() {
    const leap_year = document.getElementById('isLeapyear').value
    if (
        leap_year % 100 === 0 ? leap_year % 400 === 0 : leap_year % 4 === 0
    )
        console.log(" Input year:", leap_year, "is a Leap Year");
    else
        console.log(
            " Input year:", leap_year, "is NOT a Leap Year"
        );
}

//Question 5
console.log("Question 5")
function findQuadrant(){
    const x_point = document.getElementById("x_point").value
    const y_point = document.getElementById("y_point").value
    
        switch(true){
            case ( x_point > 0 && y_point > 0):
                console.log(`The given point of x: ${x_point} and y: ${y_point} is Quadrant I`)
                break;
            case ( x_point < 0 && y_point > 0):
                console.log(`The given point of x: ${x_point} and y: ${y_point} is Quadrant II`)
                break;
            case ( x_point < 0 && y_point < 0):
                console.log(`The given point of x: ${x_point} and y: ${y_point} is Quadrant III`)
                break;
            case ( x_point > 0 && y_point < 0):
                console.log(`The given point of x: ${x_point} and y: ${y_point} is Quadrant IV`)
                break;
            case ( x_point == 0 && y_point == 0):
                console.log(`The given point of x: ${x_point} and y: ${y_point} is Origin`)
                break;
        default:
            console.log("Enter points in correct way !")
        }
    }

//Question 6
console.log("Question 6")
function getDiscount() {
    const total_amnt = document.getElementById("total_price").value
    const discount_amnt = document.getElementById("discount_price").value
    if (discount_amnt % total_amnt * 100 >= 100)
    {
        console.log(`The discount for ${total_amnt} price is: 20%`)
    }
    else if(discount_amnt % total_amnt * 100 >= 50 || discount_amnt % total_amnt * 100 < 100 )
    {
        console.log(`The discount for ${total_amnt} price is: 10%`)
    }
    else if(discount_amnt % total_amnt * 100 < 50)
    {
        console.log(`The discount for price ${total_amnt}  is: 0%`)
    }
    else
    {
        console.log("Invalid Amount Price !")
    }

}
