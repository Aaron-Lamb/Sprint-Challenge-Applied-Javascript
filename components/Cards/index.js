// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
//
// Create a card for each of the articles and add the card to the DOM.
let articlesArray = []

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    console.log(response.data.articles);
    let articleObject = response.data.articles;
    let keys = Object.values(articleObject);
    keys.forEach((item) => {
        for (let index = 0; index < item.length; index++) {
            articlesArray.push(item[index]);
        }
    })
    const cardContainer = document.querySelector('.cards-container');
        articlesArray.forEach((article) => {
            // <div class="card">
            let cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            //   <div class="headline">{Headline of article}</div>
            let headlineDiv = document.createElement('div');
            headlineDiv.classList.add('headline');
            headlineDiv.textContent = article.headline;
            cardDiv.appendChild(headlineDiv);
            //   <div class="author">
            let authorDiv = document.createElement('div');
            authorDiv.classList.add('author');
            cardDiv.appendChild(authorDiv);
            //     <div class="img-container">
                    let imgDiv = document.createElement('div');
                    imgDiv.classList.add('img-container');
                    authorDiv.appendChild(imgDiv);
            //       <img src={url of authors image} />
                            let authImg = document.createElement('img');
                            authImg.src = article.authorPhoto;
                            imgDiv.appendChild(authImg);
            //     </div>
            //     <span>By {authors name}</span>
                    let nameSpan = document.createElement('span');
                    nameSpan.textContent = `By ${article.authorName}`;
                    authorDiv.appendChild(nameSpan);
            //   </div>
            // </div>
            cardContainer.appendChild(cardDiv);
            })
})
.catch(error => {
    console.log(error)
})
