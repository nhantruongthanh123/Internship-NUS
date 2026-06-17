const display = document.querySelector('.display');
let s = "";

function handleClick(event) {
    console.log(event.target.textContent);

    if (event.target.textContent !== '=') {
        s += event.target.textContent;
    }
    else if (event.target.textContent === '=') {
        try {
            s = eval(s);
            s = parseFloat(s).toFixed(2);
            display.textContent = s;
            s = "";
            return;
        } catch (error) {
            s = "Error";
        }
    }
    display.textContent = s;
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleClick);
});