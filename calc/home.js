// 3 variables num1 operator num2
//global variables utilize closure?
var num1 = ""
var num2 = ""
var operator = ""



function setNum(number){
    // if operator is not empty need to set numnber to num2
    if(operator === ""){
        num1 += number
        document.getElementsByClassName('display')[0].innerText = num1
    }
    else{
        num2 += number
        document.getElementsByClassName('display')[0].innerText = num2
    }



}

function setOperate(op){

    operate()
    operator = op
    

}

function clr(){
    document.getElementsByClassName('display')[0].innerText = ''
    num1 = ""
    num2 = ""
    operator = ""
}


function operate() {

    var answer = 0

    if(num1 === ''){
        num1 = 0
    }

    if(num2 === ''){
        num2 = num1
    }

    number1 = parseInt(num1)
    number2 = parseInt(num2)

    // divide
    if(operator === '/'){
        answer = Math.round(number1 / number2)
    }

    // multiply
    if(operator === 'X'){
        answer = number1 * number2
    }

    // Add
    if(operator === '+'){
        answer = number1 + number2
    }

    // subtract
    if(operator === '-'){
        answer = number1 - number2
    }

    if(operator === ''){
        answer = num1
    }
    

    document.getElementsByClassName('display')[0].innerText = answer
    num1 = answer 
    num2 = ''
    operator = ''


}