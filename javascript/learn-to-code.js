var myAccountBalance = 300;
var nikeSDShoes = 799.23;
var coupon = 500;

if (nikeSDShoes <= myAccountBalance){
    myAccountBalance -= nikeSDShoes;
    console.log("We just bought some dope shoes!");
    console.log("New Account Balance: " + myAccountBalance)
} else if (nikeSDShoes - coupon <= myAccountBalance) {
    console.log("we just bought some dope shoes!!! with coupon");
    myAccountBalance -= nikeSDShoes - coupon;
    console.log("Account balance: " + myAccountBalance);
} else {
    console.log("not enough Money!!")
}


var val1 = 23;
var val2 = "23";

if (val1 === val2){
    console.log("I'm the same age as Joe!");
} else {
    console.log("One of these is not like the other...");
}


//RECAP:
//
//== equal to
//===
//<= less than or equal to
//>= greater than or equal to




