/**
 * PUSTY OBIEKT
 */

// const ob = {};

// console.log(ob)


/**
 * WŁAŚCIWOŚCI
 */

/**
 * Literał z własociwościami
 */

// const product = {
//     name: "Kiwi",
//     price: 20
// }

// console.log(product);

// console.log(product.name)

/**
 * METODY
 */

//  const car = {
//     model: 'Toyota',
//     stop: function() {

//     },
//      // zapis skrócony
//      drive() {

//     },
// }

// console.log(car.drive())

// zagnieżone obiekty

// const user = {
//     name: 'Jon',
//     age: 21,
//     address: {
//         street: 'Ładna',
//         city: 'Łande'
//     }
// }

// console.log(user.address.city)

/**
 * ZADANIE
 * 
 * Stworzyc obiekt reprezentujacy adress
 * posiadajacy pola
 *  1) address1
 *  2) city
 *  3) country
 *  4) zip
 */


/**
 * Modyfikowanie własciwości
 */

// product.price = 30

// console.log(product.price)


/** 
 * Usuwanie właściwości
 */

// delete product.name

// console.log(product)

/**
 * Klucz składajacy sie z wielu wyrazów
 */

// const moviesRates = {
//     "Lady bird": 10
// }

// console.log(moviesRates)

/**
 * Nawiasy kwadratowe
 */

// console.log(moviesRates["Lady bird"])

// const movieTitle = "Lady bird";

// console.log(moviesRates[movieTitle])

// const matrix = "Matrix trilogy"

// moviesRates[matrix] = 8

// console.log(moviesRates)

/**
 * ZADANIE
 * 
 * Stworzyc obiekt harmonogramu snu(schedule), który posiada następujace własciwości
 *     [KEY] ->  [VALUE]
 *   1) 8:30 -> "wake up"
 *   2) 01:30 -> "sleep"
 * Następnie usunać godzine "wake up" z 8:30 na 9:30
 * Dodać o 14:30 - "afternoon nap"
 * Po każdym kroku nalezy logować obiekt
 */

/**
 * Sprawdzanie czy dana właściwość istnieje - operator IN
 */

// console.log("name" in product)

// console.log("engine" in product)


/**
 * Pętla po wszystkich kluczach for(const key in object) {}
 */

// for(const key in product) {
//     console.log("key ->", key, ", value ->", product[key])
// }

/**
 * ZADANIE
 * 
 * Napisz funkcje która sumuje wypłaty w obiekcie
 * 
 */

//  const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
