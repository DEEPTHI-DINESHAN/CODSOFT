

function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function appendCharacter(char) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && char !== '.') {
        display.textContent = char;
    } else {
        display.textContent += char;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent) || '0';
    } catch {
        display.textContent = 'Error';
    }
}
