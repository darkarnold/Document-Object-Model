// Function to modify the text content of the paragraph

const p = document.querySelector('p');
const button = document.querySelector("button");
const changeText = () =>{

  p.textContent = "Will I change?";
}

const alertText = () =>{
  alert('Will I alert ?');
}

//Add event handler as property of the button element
// Events can be overwritten
// Listen for click event
// Multiple event listeners an be addesd to the same event and element
//button.addEventListener('click',changeText);
button.addEventListener('click',alertText);
//  An anonymous fuction on an event listeners
button.addEventListener('click',() =>{
  p.textContent = "Will I change ?";
});

// Remove alertText function from Event listener
button.removeEventListener('click',alertText);

//button.onclick = changeText;
//button.onclick = alertText;
