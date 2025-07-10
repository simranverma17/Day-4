//it is for the click me button
const heading = document.querySelector("#heading");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    heading.textContent = "You clicked the button!";
    console.log("Button Clicked");
});


// it is for mouseover
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
  hoverBox.style.backgroundColor = 'rgb(92, 185, 238)';
  console.log('Mouse entered the box');
});
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = 'rgb(7, 160, 248)';
  console.log('Mouse left the box');
});



// it is for input event
const liveInput = document.getElementById('liveInput');
const displayText = document.getElementById('displayText');
liveInput.addEventListener('input', () => {
  displayText.textContent = liveInput.value;
  console.log('Live input:', liveInput.value);
});
