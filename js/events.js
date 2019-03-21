// Function to modify the text content of the paragraph


const changeText = () =>{
  const p = document.querySelector('p');
  p.textContent = "I changed because of an  event listener";
}

/*const alertText = () =>{
  alert('Will I alert ?');
}*/

//Add event handler as property of the button element
// Events can be overwritten
// Listen for click event
const button = document.querySelector("button");
button.addEventListener('click',changeText);
//button.onclick = changeText;
//button.onclick = alertText;
