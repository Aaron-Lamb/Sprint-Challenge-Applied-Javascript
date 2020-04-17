// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
// And add it to the DOM in the .header-container component

function Header() {
    //  <div class="header">
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    
    //    <span class="date">SMARCH 28, 2019</span>
    let dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = 'SMARCH 28, 2019';
    headerDiv.appendChild(dateSpan);
    
    //    <h1>Lambda Times</h1>
    let timesHeader = document.createElement('h1');
    timesHeader.textContent = 'Lambda Times';
    headerDiv.appendChild(timesHeader);

    //    <span class="temp">98°</span>
    let tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent = '98\*';
    headerDiv.appendChild(tempSpan);
    //  </div >


    return headerDiv
}

const headContainer = document.querySelector('.header-container');
headContainer.appendChild(Header());