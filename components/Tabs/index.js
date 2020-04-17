// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
  const topicContainer = document.querySelector('.topics');
  response.data.topics.forEach((topic) => {
    let tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = topic;
    topicContainer.appendChild(tabDiv);
  })
  console.log(topicContainer);
})
.catch(error => {
  console.log(error)
})