//1 Dat je niz celih brojeva a duzine n. Obrisati element sa k - tog mesta iz niza


// const br = prompt('Unesi duzinu niza')
// const arr = [4, 6, 8, 9, 1]
// for(let i = 0; i < br; i++){
//     k = prompt('Unesi clan niza')
//     arr.push(Number(k))
// }
// let k = prompt('Unesi koj broj brises')
// arr.splice(k, 1)
// console.log(arr)

// k = 2

//2 Dat je niz celih brojeva a duzine n. Elementi niza su uredjeni u neopadajuci redosled. Napisati
//program kojim se dodaje novi element x u niz a, tako da niz stane uredjen
// const arr = [4, 8, 3, 6, 1, 0, 3]

// let selectionSort = (arr) => {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         let min = i;
//         for (let j = i + 1; j < len; j++) {
//             if (arr[min] < arr[j]) {
//                 min = j;
//             }
//         }
//         if (min !== i) {
//             let tmp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = tmp;
//         }
//     }
//     return arr;
// }

// console.log(selectionSort(arr))
// let x = prompt('Unesite x')
// arr.push(Number(x))
// console.log(selectionSort(arr))


//3 Dat je niz celih brojeva a duzine n. Rotirati elemente niza za jedno mesto
// a) u levo b) u desno
//a)
// const arr = [4, 0, 6, 3, 6, 1]
// const  za1desno = (arr) => {
//     for (let i = 1; i > 0; --i) {  
//         arr.unshift(arr.pop()) 
//     }
//     return arr;
//  }
// console.log(za1desno(arr))
//b)
// const za1levo = (arr) => {
//     for(let i = 1; i > 0; --i){
//         arr.push(arr.shift())
//     }
//     return arr
// }
// console.log(za1levo(arr))

//4 Dat je niz celih brojeva a duzine n. Rotirati elemente niza za k mesta
// a) u levo b) u desno

// a)
// const arr = [4, 0, 6, 3, 6, 1]
// const nizlevo = (arr, k) => {
//     for(let i = k; i > 0; --i){
//         arr.push(arr.shift())
//     }
//     return arr
// }
// console.log(nizlevo(arr, 9))

// b)
// const arr = [4, 0, 6, 3, 6, 1]
// const  nizdesno = (arr, n) => {
//     for (let i = n; i > 0; --i) {  
//         arr.unshift(arr.pop()) 
//     }
//     return arr;
//  }
// console.log(nizdesno(arr,  3))

//5 Dat je niz celih brojeva a duzine n. Zameniti svaki uzastopni niz nula jednom nulom
// const arr = [4, 0, 0, 0, 6, 3, 6, 1]
// let br = 0
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 0){
//         br++
//     }
// }
// console.log(arr.indexOf(0))
// let remove = arr.indexOf(0)
// arr.splice(remove, br - 1)
// console.log(arr)

//6 Dat je niz celih brojeva a duzine n. Odrediti duzinu najduzeg neprekidnog niza nula
// const arr = [4, 0, 0, 0,0,0,0, 6, 3, 6,0,0,0, 1,1, 0, 0,0,0,0]
// const getMaxLength = (arr) => {
//     let count = 0
//     let result = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== 0){
//             count = 0
//         }
//         else{
//             count++
//             result = Math.max(result, count)
//         }
//     }
//     return result
// }
// console.log(getMaxLength(arr))

//7 n dece je rasporedjeno u krug i igraju sledeci igru: prvo dete pocinje brojanje od deteta koje je desno od njega
// i broji k dece u desno. Dete koje je na k - tom mestu ispada iz igre, a prvo sledece
// dete pocinje brojanje na isti nacin. Odrediti koje dete ce poslednje ostati u igri

