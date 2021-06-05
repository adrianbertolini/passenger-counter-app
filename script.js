// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0;
let counterButton = document.getElementById('counter');
let prevRegisters = document.getElementById('prev-registers');

counterButton.addEventListener('click', incrementCount);

function incrementCount() {
  count = count + 1;
  counterButton.innerText = count;
}

function resetCount() {
  count = 0;
  counterButton.innerText = count;
}

function save() {
  prevRegisters.textContent += count + ' - ';
}
