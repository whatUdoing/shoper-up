/**
 * Obiekt window i document
 */


// console.log(window);

/**
 * Właściwości i atrybuty
 */

// console.dir wyświetla interaktywna liste właściwości obiektu
// console.dir(document.body)

// console.log(document.body.id)

// console.log(document.body.className)


/**
 * Pobieranie elementów storny
 */

// getElementBy*

// pobieranie po id 

// const box1 = document.getElementById('box-1')

// console.dir(box1);

// const boxesByClass = document.getElementsByClassName('box')

// console.dir(boxesByClass);

// const boxByClass = document.getElementsByClassName('box-1')

// console.dir(boxByClass)

// querySelector* 

// pobieranie 1 elementu

// const box1BySelector = document.querySelector('#box-1');

// console.log(box1BySelector)

// const box1BySelectorAll = document.querySelectorAll('#box-1');

// console.log(box1BySelectorAll)

// const allBoxesBySelector = document.querySelectorAll('.box');

// console.log(allBoxesBySelector)

// allBoxesBySelector.forEach(function box(box) {
//     console.log('box', box)
// })

/**
 * ClassList 
 */

// const box1 = document.querySelector('#box-1');

// console.log(box1.classList)

// box1.classList.add('border_pink')

// console.log(box1.classList)

// console.log(box1.classList.contains('border_pink'))

// console.log(box1.classList.remove('border_pink'))

// allBoxesBySelector.forEach(function box(box) {
//     console.log('box', box)
//     box.classList.add('border_pink')
// })

/**
 * ZADANIE 
 * 
 * Pobrać wszystkie elementy listy (markup na repo)
 * zmienić kolor tła dla każdego parzystego list item'a
 */

/**
 * Zdarzenia DOM
 */

// const button = document.querySelector('#click-me-button');

// function clickHandler() {
//     alert('clicked')
//     console.log('clicked');
// }

// button.addEventListener('click', clickHandler)

// usuwanie zdarzenia

// button.removeEventListener('click', clickHandler)

// const hideBtn = document.getElementById('hide-button');
// const showBtn = document.getElementById('show-button');
// const toggleBtn = document.getElementById('toggle-button');

// const boxToHide = document.querySelector('#hide-box')


// hideBtn.addEventListener('click', function () {
//     console.log('hide button');
//     boxToHide.classList.add('hidden')
// })

// showBtn.addEventListener('click', function () {
//     console.log('show button');

//     boxToHide.classList.remove('hidden')
// })

// toggleBtn.addEventListener('click', function () {
//     console.log('toggle button');

//     boxToHide.classList.toggle('hidden')
// })

/**
 * ZADANIE 
 * 
 * Do wcześniejszych elementów listy dodać na click handlery
 * które dla nieparzystych elementów wyswietla alert "Nieparzyste", dla parzystych "Parzyste"
 */