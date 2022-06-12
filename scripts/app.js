var GRAVITY = 1.8;

function hello() {
    let color = "Blue";
    console.log("Hello world!",color);
}

function sayHello(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
}

function printSumResult(num1, num2,num3){
    let total= num1 + num2 + num3;
    console.log("Result",total); 
}
function sum(num1,num2){
    let total = num1 +num2;
    return total;
}
function divide(num1,num2){
    if (num2 == 0){
        return"Error: Zero division not allowed";
    }
        return num1 / num2;
}

function saveData(){
    //validate data
    if(!req){
        return;//do not continue saving
        }

        //send data to server
        if(dataValid == false){

        }
        // show success message
}
function printSomeNumbers() {
   
    for (let i = 0; i < 21; i++){
       if (i != 11 && i != 13){
        console.log(i);
    }
    }
}
    

function init(){
    console.log("Intro page");

    //load data
    
    //assign event

    hello();
    //console.log(color);

    let name = "Daniel";
    sayHello(name, "Avilez");

    printSumResult(21,21,-90)

    let answer = sum(21, 21);
    console.log("The answer is", answer);

    let div1 = divide(100, 10);
    let div2 = divide(200,0);
    console.log(div1, div2);

    printSomeNumbers();//0 to 20
}

window.onload=init;