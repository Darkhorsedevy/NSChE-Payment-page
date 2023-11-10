const makePaymentBtn = document.getElementById("submit-btn");
const selectLevel = document.getElementById("selectLevel");

selectLevel.onchange = function (params) {
    if (selectLevel.value == "null") {
        makePaymentBtn.style.backgroundColor = "lightgray";
        makePaymentBtn.disabled = true;
    } else {
        makePaymentBtn.style.backgroundColor = "green";
        makePaymentBtn.disabled = false;
    }
}

// function changeColor (params) {
//     document.body.style.backgroundColor = "green";
// }
