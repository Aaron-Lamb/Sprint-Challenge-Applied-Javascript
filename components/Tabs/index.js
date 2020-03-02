// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//Create array
const topics = ['javascript', 'bootstrap', 'technology', 'jquery', 'node.js']

//Select the div.topics
const topicsDiv = document.querySelector('.topics')

//GET request
axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
  response.forEach(random =>
     topicsDiv.appendChild(tabMaker(random.data))
  )
  })
  .catch((error => {
    console.log(error)
  }))

  const tabMaker = (arr) => {
    //Write component content
    let tab = document.createElement('div');

    //Add Class
    tab.classList.add('tab');

    //Add div content
    tab.textContent = arr;

    //Return
    return tab;
  }
  