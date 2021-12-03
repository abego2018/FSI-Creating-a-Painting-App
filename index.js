let selectedColor = 'blue'
const painting = document.querySelector('.painting')
const palette = document.querySelector('.palette')

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor;
})

palette.addEventListener('click', function(e){
    selectedColor = e.target.id;
})

/*
let paletteVis = document.querySelector('.color-choice')
paletteVis.style.borderStyle = 'solid'
*/
