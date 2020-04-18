/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
const carouselHolder = document.querySelector('.carousel-container');
const carouselCreator = () => {
  //  HTML:
//   <div class="carousel">
let carouselDiv = document.createElement('div');
carouselDiv.classList.add('carousel');
//     <div class="left-button"> < </div>
let leftButtonDiv = document.createElement('div');
leftButtonDiv.classList.add('left-button');
carouselDiv.appendChild(leftButtonDiv);
//     <img src="./assets/carousel/mountains.jpeg" />
let mountainImg = document.createElement('img');
mountainImg.src = './assets/carousel/mountains.jpeg';
mountainImg.alt = 'View of mountain';
mountainImg.style.height = '400px';
mountainImg.style.display = 'block';
carouselDiv.appendChild(mountainImg);
console.log(mountainImg);
//     <img src="./assets/carousel/computer.jpeg" />
let computerImg = document.createElement('img');
computerImg.src = "./assets/carousel/computer.jpeg";
computerImg.alt = 'Worker at a computer';
computerImg.style.height = '400px';
computerImg.style.display = 'block';
carouselDiv.appendChild(computerImg);
//     <img src="./assets/carousel/trees.jpeg" />
let treesImg = document.createElement('img');
treesImg.src = "./assets/carousel/trees.jpeg";
treesImg.alt = 'View of trees';
treesImg.style.height = '400px';
treesImg.style.display = 'block';
carouselDiv.appendChild(treesImg);
//     <img src="./assets/carousel/turntable.jpeg" />
let turntableImg = document.createElement('img');
turntableImg.src = "./assets/carousel/turntable.jpeg";
turntableImg.alt = 'View of turntable';
turntableImg.style.height = '400px';
turntableImg.style.display = 'block';
carouselDiv.appendChild(turntableImg);
//     <div class="right-button"> > </div>
let rightButtonDiv = document.createElement('div');
rightButtonDiv.classList.add('right-button');
carouselDiv.appendChild(rightButtonDiv);
//   </div>
return carouselDiv;
}
// 
carouselHolder.appendChild(carouselCreator());
console.log(carouselHolder);