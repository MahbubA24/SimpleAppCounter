// DOM elements
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const customInput = document.getElementById('custom-input');
const setValueBtn = document.getElementById('set-value-btn');

let counter = 0;

// Update counter display
function updateDisplay() {
    counterDisplay.textContent = counter;
    
    // Check for multiples of 10
    if (counter !== 0 && counter % 10 === 0) {
        alert(`Counter reached ${counter}!`);
    }
}

// Event listeners
incrementBtn.addEventListener('click', () => {
    counter++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    counter--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
});

setValueBtn.addEventListener('click', () => {
    const value = parseInt(customInput.value);
    if (!isNaN(value)) {
        counter = value;
        updateDisplay();
    } else {
        alert("Please enter a valid number!");
    }
});

// Initialize display
updateDisplay();