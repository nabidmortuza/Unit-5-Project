/*
DO NOT DELETE!! This is your tracker for the project!
Store each input as a variable (there should be two input boxes - one for each answer) [ ]
Store the button as a variable (there should be ONE button) [ ]
Create a click handler [ ]
Use the .value property to store user input [ ]
Add console.log to test if the code is being stored [ ]
Write a conditional statement with else-if to include all 4 possible results [ ]
Write a compound conditional statement that uses input from both questions to provide the user with a result [ ]
Write a sentence using string concatenation using the data stored in the user input variables [ ]
Add a next level feature! [ ]
*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

let submit = document.querySelector(".submit"); 
let Death = document.querySelector(".question1"); 
let survival = document.querySelector(".question2"); 
let result = document.querySelector(".result"); 
let counterDisplay = document.querySelector(".counter"); 

let interactionCount = 0; // Initialize the counter

submit.onclick = function () {
  // Increment the counter and update the display
  interactionCount++;
  counterDisplay.innerHTML = `You have interacted ${interactionCount} time(s).`;

  // Check the user inputs and display the corresponding result
  if (Death.value === "Peacefully" && survival.value === "Urban") {
    result.innerHTML = "Overlord";
  } else if (Death.value === "Ruthlessly" && survival.value === "Forest") {
    result.innerHTML = "Reincarnated as a Slime";
  } else if (Death.value === "Peacefully" && survival.value === "Forest") {
    result.innerHTML = "The Rising of the Shield Hero";
  } else if (Death.value === "Ruthlessly" && survival.value === "Urban") {
    result.innerHTML = "Re:Zero";
  } else {
    result.innerHTML = "Your destiny is unclear. Try again!";
  }
};

console.log(submit);