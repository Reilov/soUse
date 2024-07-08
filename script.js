
const pentagons = document.querySelectorAll('.pentagon'),
      button = document.querySelector('.random');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

button.addEventListener('click', ()=>{
    const pentagonWrapper = document.querySelector('.pentagon__wrapper');
    // Node лист превращаем в массив
    const pentagonsArray = Array.from(pentagons);
    const shuffledItems = shuffle(pentagonsArray)
    pentagonWrapper.innerHTML = '';
    shuffledItems.forEach(item => pentagonWrapper.appendChild(item));
});