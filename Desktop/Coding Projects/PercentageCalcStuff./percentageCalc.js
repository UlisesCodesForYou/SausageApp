

let numField1 = document.getElementById("numField1");
let numField2 = document.getElementById("numField2");

let resultField = document.getElementById("resultField");
let form = document.getElementById("XisOfY");


Sform.addEventListener(submit, () => {

    if (!numField1.value || !numField2.value) {
        alert('Please enter number values.')
    } else {
        let x = parseFloat(numField1.value)
        let y = parseFloat(numField2.value)
        event.preventDefault()
    }
});
