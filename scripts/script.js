// add event listener to the form
const showMeTheFoodsBtn = document.getElementById("userForm")
showMeTheFoodsBtn.addEventListener("submit", processForm)

// create processForm function
function processForm(event) {
  // prevent the user from creating empty card
  event.preventDefault(event);

  // store user input
  var loc = event.target.elements["location"].value
  var cui = event.target.elements["cuisine"].value
  var price = event.target.elements["priceRange"].value
  var dist = event.target.elements["distance"]. value

  // clear the form
  userForm.reset()


  
  // use the anchor to go to the results section
  window.location.href = "#section2"
}


