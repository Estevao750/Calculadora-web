function addNumber(num) {
    const display = document.querySelector('#display');
    display.value += num;
}
function clearDisplay() {
    const display = document.querySelector('#display');
    display.value = '';
}
function deleteLast() {
    const display = document.querySelector('#display');
    display.value = display.value.slice(0, -1);
}
function calcularResultado() {
    const display = document.querySelector('#display');
    try {
        display.value = eval(display.value);
    }
    catch{
        display.value = 'Error';
    }
}
