//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");please delete this line once connected.

function test_checkHumbrId(input, expected) {
    let style_color = "color: red";
    let pass = false;
    let output = checkHumbrId(input);
    if (output === expected) {
        pass = true;
        style_color = "color: green";
    }
    return "<span style='" + style_color + "'> input: " + input + "  // expected: " + expected + "  // pass: " + pass + "</span><br>";
}

var data_output = document.getElementById("data");

data_output.innerHTML = test_checkHumbrId("n01352022", true);
data_output.innerHTML += test_checkHumbrId("N01352022", true);
data_output.innerHTML += test_checkHumbrId("n013520223", false);
data_output.innerHTML += test_checkHumbrId("n0135202", false);
data_output.innerHTML += test_checkHumbrId("n01352d22", false);
data_output.innerHTML += test_checkHumbrId("01352022", false);
data_output.innerHTML += test_checkHumbrId("D01352022", false);