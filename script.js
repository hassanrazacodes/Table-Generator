let number = prompt("please enter a number")
if (!number){
    number = 5
}
for(i = 1; i <= 10; i++ ){
    console.log(number, "*", i, "=", number * i)
}