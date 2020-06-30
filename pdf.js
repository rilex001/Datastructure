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



//8 Urediti dati niz celih brojeva
// a) U neopadajuci redosled 
// b) U neopadajuci redosled po kriterijumu rastojanja od aritmeticke sredine niza.
// c) Tako da na pocetku budu prvo parni brojevi uredjeni u neopadajuci redosled,
//a za njima neprani brojevi uredjeni u nerastuci redosled
// let k  = prompt('Unesi duzinu niza')
// const arr = []
// for(let i = 0; i < k; i++){
//     let clan = prompt('Unesi clan niza')
//     arr.push(clan)
// }
// a)
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

// b) ?
// c) ?

// 9 Odrediti podniz uzastopnih elemenata datog niza koji ima nejvecu sumu
// const arr = [4, 6, 6,,1, 1, 1, 50, 50, 50, 5, 10, 10, 10, 10, 10, 10, 10 ]
// let suma = 0
// let max = null
// let count = 0
// const sumaPodniza = (arr) => {
    
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === arr[i - 1]){
//             suma = suma + arr[i]
//         }   
//         else{
//             suma = 0
//         }
//         if(suma > max){
//             max = suma
//         }
//         // console.log(max)
//     }
//     return max
// }
// console.log(sumaPodniza(arr))

//10 Na takmicenju je ucestvovalo n (n <= 1000) ucenika. Oni su mogli da osvoje izmedju 0 i 100 poena.
// U nizu a su dati  rezultati za svakog ucenika
// a) Ukoliko je data granica p koja odredjuje minimalan broj potrebnih poena za prolaz u sledeci krug 
// takmicenja, odrediti koliko ucenika prolazi dalje 
// const a = []
// let brojucenika = prompt('Unesi broj ucenika')

// for(let j = 0; j < brojucenika; j++){
//     let clan = prompt('Unesite broj poena za ucenika')
//     a.push(clan)
// }
// let p = prompt('Unesi potreban broj poena za prolaz')
// Number(p)
// count = 0
// for(let i = 0; i < a.length; i++){
//     if(a[i] > p){
//         count++
//     }
// }

// console.log(p)
// console.log(a)
// console.log(count)

// b) Odrediti granicu p tako da broj ucenika koji prolazi dalje nije veci od unapred zadatog
// broj k

// const a = [50, 90, 40, 60, 90, 23, 77]
// let k = prompt('Koliko ucenika zelite da prodje ')
// Number(k)
// let selectionSort = (arr) => {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         let min = i;
//         for (let j = i + 1; j < len; j++) {
//             if (arr[min] > arr[j]) {
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
// console.log(selectionSort(a).slice(0, k))

//11 Dat je niz karaktera koji predstavlja izraz sa zagradama. Proveriti da li su zagrade ispravno zadate
//(interesuju nas samo zagrade, a ne i ostatak izraza)

// const arr = ['(', ')', ')', '(', 'mrk']
// let otv = 0
// let zat = 0
// let isGood = arr => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === ')' ){
//             zat++
//         }
//         if(arr[i] === '('){
//             otv++
//             console.log(otv)
//         } 
        
//         if(otv === zat){
//             return true
//         } else{
//             return false
//         }
//     }
// }
// console.log(isGood(arr))


// 12. Data su dva niza karaktera a i b sa po n elemenata. Odrediti da li je niz b anagram niza a
// const a = [3, 6 ,7, 8, 1, 9, 8]
// const b = [1, 8, 7, 6 ,3, 8, 9]

// let selectionSort = (arr) => {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         let min = i;
//         for (let j = i + 1; j < len; j++) {
//             if (arr[min] > arr[j]) {
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
// selectionSort(a)
// selectionSort(b)
// let brojac = 0
//     for(let i = 0; i < a.length; i++){
//         if(a[i] === b[i]){
//             brojac++
//         }
//     }

// if(brojac === a.length){
//     console.log('Nizovi su anagrami')
// } else {
//     console.log('Nizovi nisu anagrami')
// }


// 13 dati su nizovi a i b koji, redom, imaju n i m elemenata. Svi elementi ovih nizova si cifre. Ovim
// nizovima su predstavljenja dva broja. Formirati niz c koji predstavlja zbir brojeva datih sa prva dva niza

// const a = [3, 6, 7, 8, 1, 9, 8, 9, 4, 5]
// const b = [1, 8, 7, 6 ,3, 8, 9, 1, 3, 9, 0]
// const c = []
// if(a.length > b.length){
//     for(let i = 0; i < a.length; i++){
        
//         let clan = a[i] + b[i]
//         if(b[i] !== undefined ){
//             c.push(clan)
//         } else{
//             c.push(a[i])
//         }
        
       
            
        
//     }
// } else {
//     for(let i = 0; i < b.length; i++){
//         let clan = a[i] + b[i]
//         if(a[i] !== undefined ){
//             c.push(clan)
//         } else{
//             c.push(b[i])
//         }
//     }
// }
// console.log(c)

// 14 Polinom se moze predstaviti nizom koeficijenata. Napisati program kojim se odredjuej koeficijenti
// a) zbira dva polinoma

// const a = [5, 9, 30, 10]
// let polinom
// let x = 5
// for(let i = 0; i < a.length; i++){
//     polinom = a[i] * Math.pow(x, i)
// }
// console.log(5)

// 15 U nekom gradu ima n zgrada. Visine tuh zgrada su date u nizu a.
// Odrediti za svaki broj 0 < m <= n koliko je najmanje potrebno dograditi spratova da bi u gradu
// bilo bar m zgrada sa istim brojem spratova

// const n = 5 // broj zgrada
// const a = [10, 20, 10, 10, 50]
// let art
// let suma = 0
// for(let i = 0 ; i < n; i++){
//     suma = suma + a[i]
// }
// art = suma / n
// let brspratova = 0
// let dogradnja
// for(let i = 0 ; i < n; i++){
//     if(art > a[i]){
//         dogradnja = art - a[i]
//         brspratova = dogradnja + brspratova
//     }
// }
// console.log(brspratova)


// Dekadni u binarni 
// let Dekadni = 11
// let binarni 
// let broj = []
// while(Dekadni > 0){
//     binarni = parseInt(Dekadni) % 2
//     broj.unshift(binarni)
//     Dekadni = parseInt(Dekadni) / 2
// }

// let mrk = broj.join('')
// console.log(mrk)
// if(mrk === '01011'){
//     console.log('T')
// } else{
//     console.log('N')
// }


