let order = prompt("Please enter a list of froyo flavors comma-separated please.");
let userInput = order.split(",");
let flavors = [];
let flavorCount = [];

console.log(userInput);
orderCount(userInput);



function orderCount(userInput){
    for (let i = 0; i < userInput.length; i++){
        // if my first arry has my flavor, then find the index of that flavor in my first array and use it also as the index of the second array to increment that flavors count
        // else that flavor doesn't exist yet, so push the flavor and the count
        index = flavors.indexOf(userInput[i]);
        if (index != -1){
            flavorCount[index]++;
        } else {
            flavors.push(userInput[i]);
            flavorCount.push(1);
        }
    }
    for (let i = 0; i < flavors.length; i++){
        console.log(flavors[i] + " : " + flavorCount[i]);
    }
}

["vanilla"]
[1]