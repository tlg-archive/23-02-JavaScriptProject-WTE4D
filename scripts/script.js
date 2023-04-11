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

  // parse price into integer
  let parsedPrice = parseInt(price)

  // convert distance from miles to meters
  let convertedDist = Math.round(dist * 1609.344)
  // maximum distance in meters is 40000
  if (convertedDist > 40000) {
    convertedDist = 40000
  }
  

  // call the function to fill the up the result container with results
  addResultCont(loc, cui, parsedPrice, convertedDist)
  
  // use the anchor to go to the results section
  window.location.href = "#section2"
}

// event listener for the start over button
startOverBtn.addEventListener("click", () => {
  userForm.reset(); // Reset the user form
  document.getElementById("resultsContainer").innerHTML = "";
  window.location.href = "#section1"; // Take the user back to the input section
});

// create result container function
function addResultCont(cLoc, cCui, cPrice, cDist) {
  // setup for yelp api
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 99Q8cWnVelRVPYnhQJ0KGttOj-wXnTJu1he2lo7L-fTMK3YovahIBIA9_COKt6c4v26L_EiZ90uuvhBV0lHn-BINMHYICHvocMKwOm_f8jH-HXMF8Z4ee2z_u8U1ZHYx'
    }
  };

  // get data from yelp api
  fetch(`https://api.yelp.com/v3/businesses/search?location=${cLoc}&term=${cCui}&radius=${cDist}&categories=&price=${cPrice}&sort_by=best_match&limit=10`, options)
    .then(response => response.json())
    .then(response => {
      let data = response
      // console.log(data);

      // length for forloop
      let dataLength = data.businesses.length
      // create container/card for each result
      for (let i = 0; i < dataLength; i++){
        // get name
        let name = data.businesses[i].name
        // get pic
        let pic = data.businesses[i].image_url
        // get url
        let url = data.businesses[i].url
        // get price
        let price = data.businesses[i].price
        // get rating
        let rating = data.businesses[i].rating
      
      
        // create card container
        let card = document.createElement("div")
        card.setAttribute("id", name)
        card.setAttribute("class", "cards")
      
        // create card contents
        card.innerHTML =`
          <h4>${name}</h4>
          <img src=${pic} alt=${name}>
          <br>
          <a href=${url}>Visit Website</a>
          <h5>Rating: ${rating}    Price: ${price}</h5>
        `
        // create button container
        let rBtnCont = document.createElement("div")
        rBtnCont.setAttribute("class", "d-flex justify-content-center")

        // create remove button
        let rRemBtn = document.createElement("button")
        rRemBtn.setAttribute("class", "btn btn-danger")
        rRemBtn.innerText = "Remove"
        rBtnCont.appendChild(rRemBtn)

        // place button container in card
        card.appendChild(rBtnCont)

        // append card to container
        resultsContainer.appendChild(card)
      }
    })
}

// create event listener in result_container
resultsContainer.addEventListener("click", (event) => {
  let eModify = event.target

  if (eModify.innerText === "Remove") {
    // delete container
    eModify.parentElement.parentElement.remove()
  }
})





// BELOW IS EXPERIMENTAL -----------------------------------------------------------



