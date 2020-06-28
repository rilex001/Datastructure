// 1 Napisati program u kojem se unosi niz celih brojeva, makimalno 10. Formirati novi niz
//ciji u elementi parni elementi prvog niza, a umesto nepranih brojeva staviti nule.
//Prikazati novodobijeni niz
// const arr = [2, 8, 5, 7, 4]
// const arr1 = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         arr1.push(arr[i])
//     } else {
//         arr1.push(0)
//     }
// }

// console.log(arr1)

//2 Napisati pogram u kojem se unose dva niza od n celih brojeva. Formirani novi niz ciji su 
//elementi veci brojevi istog indeksa iz unetih nizova. Prikazati novodobijeni niz

// const arr = [2, 8, 5, 7, 4]
// const arr1 = [4, 5, 3, 10, 1]
// const konacan = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > arr1[i]){
//         konacan.push(arr[i])
//     } else if(arr[i] < arr1[i])  {
//         konacan.push(arr1[i])
//     } else {
//         konacan.push(arr[i])
//     }
// }

// console.log(konacan)

//3 Napisati program koji za uneti niz od maksimalno 10 clanova prebrojava koliko je clanova
// niza jednako jedan
// const arr = [2, 8, 5, 7, 4, 0, 1, 1, 1]
// let br = 0
// for(let i = 0 ; i < arr.length; i++){
//     if(arr[i] === 1){
//         br++
//     }
// }
// console.log(br)

//6 Unosi se niz realnih brojeva. Formirati novi niz ciji su elementi zaokruzeni elementi 
// unetog niza
// const arr = [2, 8.5, 5.1, 7, 4.2, 0, 1, 1.9, 1]
// const arr1 = []
// for(let i = 0 ; i < arr.length; i++){
//     arr1.push(Math.round(arr[i]))
// }
// console.log(arr1)

//7 Napisati program u kojem se unosi niz celih brojeva, a zatim se sortira po rastucem
//redosledu. Prikazati sortirani niz
// const arr = [2, 8.5, 5.1, 7, 4.2, 0, 1, 1.9, 1]
// arr.sort()
// console.log(arr)


// 8 Uneti dva niza celih brojeva sa istim brojem elemenata. Formirati novi niz ciji su 
// elementi zbir elemenata prva dva niza na istim pozicijama
// const arr = [2, 8, 5, 7, 4]
// const arr1 = [4, 5, 3, 10, 1]
// const konacan = []
// for(let i = 0; i < arr.length; i++){
//     konacan.push(arr[i] + arr1[i])
// }

// console.log(konacan)

//10 Napisati program u kojem se unosi niz celih brojeva, a zatim se trazi najveci elemenat niza.
//Prikazati najveci elemenat niza
// const arr = [2, 8, 5, -7, -4]
// let max = null
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max)

//11 Sataviti program za odredjivanje najmanjeg clana niza ciji su indeksi neprani i najveceg clana niza ciji su 
//indeksi parni 
// let max = null
// let min = null
// const arr = [2, 8, 5, -7, -4]
// for(let i = 0; i < arr.length; i++){
//     if(i % 2 === 0 ){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     } else {
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
// }

// console.log(min)
// console.log(max)