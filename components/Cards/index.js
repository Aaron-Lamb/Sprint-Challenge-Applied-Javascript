// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardContainer = document.querySelector('.card-container');

    

        const cardComp = (articles) => {
        let cardClass = document.createElement('div');
        cardClass.classList.add('card');

        let headlineDiv = document.createElement('div');
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = articles.headline;
        cardClass.appendChild(headlineDiv);

        let authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        headlineDiv.appendChild(authorDiv);

        let imageDiv = document.createElement('div');
        imageDiv.classList.add('img-container');
        authorDiv.appendChild(imageDiv);

        let authorImage = document.createElement('img');
        authorImage.setAttribute('src', articles.authorPhoto);
        imageDiv.appendChild(authorImage);

        let authorCredit = document.createElement('span');
        authorCredit.textContent = `By, ${articles.authorName}`;
        authorDiv.appendChild(authorCredit);

        return cardClass;
    };

    

