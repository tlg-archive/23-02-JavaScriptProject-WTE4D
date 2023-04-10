// add event listener to the form
const showMeTheFoodsBtn = document.getElementById("userForm")
showMeTheFoodsBtn.addEventListener("submit", processForm)

// create processForm function
function processForm(event) {
  // prevent the user from creating empty card
  event.preventDefault(event);

  // store user input
  let loc = event.target.elements["location"].value
  let cui = event.target.elements["cuisine"].value
  let price = event.target.elements["priceRange"].value
  let dist = event.target.elements["distance"]. value

  // clear the form
  userForm.reset()

  // create restaurant container
  let rCont = addResultCont(loc, cui, price, dist)


  // place the restaurant container in the result container
  document.getElementById("resultsContainer").appendChild(rCont)
  
  // use the anchor to go to the results section
  window.location.href = "#section2"
}

// event listener for the start over button
const startOverBtn = document.getElementById("startOverBtn")
startOverBtn.addEventListener("click", () => {
  // use the anchor to go to the user input section
  window.location.href = "#section1"
})


// create result container function
function addResultCont(cLoc, cCui, cPrice, cDist) {
  // create container
  let cont = document.createElement("div")
  cont.setAttribute("class", "cont")

  // create location element
  let rLoc = document.createElement("h5")
  rLoc.innerText = cLoc
  cont.appendChild(rLoc)

  // create cuisine element
  let rCui = document.createElement("h6")
  rCui.innerText = cCui
  cont.appendChild(rCui)

  // create price element
  let rPrice = document.createElement("p")
  rPrice.innerText = cPrice
  cont.appendChild(rPrice)

  // create distance elemnt
  let rDist = document.createElement("p")
  rDist.innerText = `${cDist} miles`
  cont.appendChild(rDist)

  // create button container
  let rBtnCont = document.createElement("div")
  rBtnCont.setAttribute("id" , "rBtnCont")
  rBtnCont.setAttribute("class", "d-flex justify-content-between")

  // create save button
  

  // create remove button
  let rRemBtn = document.createElement("button")
  rRemBtn.setAttribute("class", "btn btn-danger")
  rRemBtn.innerText = "Remove"
  rBtnCont.appendChild(rRemBtn)

  cont.appendChild(rBtnCont)

  // return the container
  return cont
}

// create event listener in result_container
resultsContainer.addEventListener("click", (event) => {
  let eModify = event.target

  if (eModify.innerText === "Remove") {
    // delete container
    eModify.parentElement.parentElement.remove()
  }
})