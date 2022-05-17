let equal_pressed = 0;

//referring to all buttons BUT excluding DEL and AC
let button_input = document.querySelectorAll(".input-button");

//refer input + equal + DEL and AC
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

//access each class using forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }
    //display value for each button
        input.value += button_class.value;
    });
});
//solve the user's input clicked on equal sign

equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
        //evaluate user's input
        let solution = eval(inp_val);

        //true for natural nmbers / false for decimals
        if (Number.isInteger(solution)){
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        } 
    } catch (err) {
        // if user has entered Invalid Input
        alert("Invalid Input");
    }
});

// clear input
clear.addEventListener("click", () => {
    input.value ="";
});

//erase last digit
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length -1);
})