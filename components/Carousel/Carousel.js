/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
const carouselHolder = document.querySelector('.carousel-container');
console.log(carouselHolder);
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
mountainImg.src = '../assets/carousel/mountains.jpeg';
//     <img src="./assets/carousel/computer.jpeg" />
//     <img src="./assets/carousel/trees.jpeg" />
//     <img src="./assets/carousel/turntable.jpeg" />
//     <div class="right-button"> > </div>
//   </div>
// 
carouselHolder.appendChild(carouselDiv);