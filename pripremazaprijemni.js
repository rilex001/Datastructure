//5 izracunati sumu dvocifrenih brojeva deljivih sa 3
// var br = 0
// for(let i = 10; i <= 99; i++){
//     if( i % 3 === 0){
//         br = br + i
//     }
// }
// console.log(br)

//10 Izracunati sumu dvocifrenih brojeva kod kojih pri deljenju sa 3 je ostatak 2
// let zad2 = 0
// for(let i = 10; i <=99; i++){
//     if( i % 3 === 2){
//         zad2 = zad2 + i
//     }
// }
// console.log(zad2)

//15 Izracunati sumu dvocifrenih brojeva druga cifra deljiva sa 4
// let zad3 = 0
// let druga
// for(let i  = 10; i<=99; i++){
//     druga = i % 10
//     if(druga % 4 === 0){
//         zad3 = druga + zad3
//     }
// }
// 

//20 Izracunati sumu trocifrenih brojeva sa zadnjom cifrom 3
// let zad4 = 0
// let zadnjacifra
// for(let i = 100; i <= 999; i++){
//     zadnjacifra = i % 10
//     if(zadnjacifra === 3){
//         zad4 = i + zad4
//     }
// }
// console.log(zad4)

//25 Izracunati sumu trocifrenih brojeva sa drugom cifrom vecom od 6
// let drugacifra 
// let zad5 = 0
// for(let i = 100; i <= 999; i++){
//     drugacifra = Math.round((i / 10) % 10)
//     if(drugacifra  > 7){
//         zad5 = zad5 + drugacifra
//     }
// }
// console.log(zad5)

//30 Izracunati sumu trocifrenih brojeva deljivih sa 3 
// let zad6 = 0
// for(let i = 100; i <= 999; i++){
//     if(i % 3 === 0){
//         zad6 = i + zad6
//     }
// }
// console.log(zad6)

//35 Izracunati sumu trocifrenih brojeva cija je druga cifra nije deljiva sa 3
// let zad7 = 0
// for(let i = 100; i<= 999; i++){
//     let pom = i / 10
//     let pom1 = parseInt(pom)
//     drugacifra = pom1 % 10
//     if(drugacifra % 3 !== 0){
//         zad7 = i + zad7
//     }
// }

//40 Izracunati sumu trocifrenih brojeva kod kojih je prva manja od polovine suma druge dve cifre 
// let zad8 = 0
// let jedinica
// let desetica
// let stotina
// for(let i = 100; i <= 999; i++){
//     jedinica = i % 10
//     desetica = parseInt(i / 10) % 10
//     stotina = i / 100
//     stotina1 = parseInt(stotina)
//     drugizbir = (jedinica + desetica) / 2
//     if(stotina < drugizbir){
//         zad8 = zad8 + i
//     }
// }
    

//45 Ispisati sve trocifrene brojeve vece ili jednake 600
// for(let i = 100; i <= 999; i++){
//     if(i >= 600){
//         console.log(i)
//     }
// }

//50 Ucitati clanove niza. Ispisati: clanove niza koji su veci od sledeceg clana
// const arr = [3, 5, 6, 8, 9, 10]
// const sledeciclan = prompt('Enter sledeci clan', 0)
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > sledeciclan){
//     console.log(arr[i])
//     }
// }


//55 Ucitati clanove niza. Ispisati clanove niza u obrnutom redosledu 
// const arr = [3, 5, 6, 8, 9, 10]
// const arr1 = []

// for(let i = 0; i < arr.length; i++){

//     arr1.unshift(arr[i])
// }
// console.log(arr1)


//60 Sabirati clanove niza sve dok je suma manja od 241
// let suma = 0
// const arr = [3, 5, 6, 8, 9, 10, 78, 50, 35, 20]
// for(let i = 0; i < arr.length; i++){
//     if(suma < 241){
//         suma = suma + arr[i]
//     }
// }
// console.log(suma)

//65 Ucitati clanove niza. Izracunati aritmeticku sredinu i ispisati clanove niza manje od aritmeticke sredine
// const arr = [2, 4, 6]
// let sum = 0
// let aritm
// for(let i = 0; i < arr.length; i++){
//     sum = sum + arr[i]
//     aritm = sum / arr.length
// }

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < aritm){
//        console.log(arr[i])
//     }
// }

//fibonacci 


// function fibonacci(num){
//     var a = 1, b = 0, temp;
  
//     while (num >= 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }
  
//     return b;
//   }

// function fibonacci(num) {
//     if (num <= 1) return 1;
  
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// console.log(fibonacci(7))

//factorial
// const factorial = (num) => {
//     if(num === 1){
//         return 1
//     }
//     return num * factorial(num - 1)
// }

// console.log(factorial(5))

// const zad1 = (num) => {

// }

//1 Napisati program koji racuna zbir niza koji je definisan kao S = 0 -1 + 2 - 3

// cifra = 0
// zbir = 0
// const proba = (num) => {
//     for(i = num; i > 0; i--){
//         cifra = Math.pow(-1, i) * i
//         zbir = cifra + zbir
//     }
//     return zbir
// }
// console.log(proba(3))


//2 Napisati program za proveru tacnosti matematicke provere za izracunavanje sume 
// zbir = 0
// let prv
// let cifra
// const proba = (n) => {
//     for(i = n; i > 0; i--){
//         cifra = 2 * i - 1
//         zbir = cifra + zbir
//     }
//     prv = Math.pow(n, 2)
//     if(zbir == prv){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(proba(4))

// 21 Izracunati sumu trocifrenih brojeva sa istim ciframa
// let zbir = 0
// let jedinica, desetica, stotina, stotina1
// for(let i = 100; i < 999; i++){
//     jedinica = i % 10
//     desetica = parseInt(i / 10) % 10
//     stotina1 = i / 100
//     stotina = parseInt(stotina1)
//     if(jedinica === desetica && jedinica === stotina && desetica === stotina){
//         zbir = zbir + 1
//     }
// }


//Izracunati sumu trocifrenih brojeva koje se sastoji od susednih cifara u nizu prirodnih brojeva 123 654 341
// const pom = (a, b, c) => {
//     if(a > b && a > c){
//         return a
//     }
//     if(b > a && b > c){
//         return b
//     } else {
//         return c
//     }
// }


// let zbir = 0
// let jedinica, desetica, stotina, stotina1, najv, za1, za2
// for(let i = 100 ; i <= 999; i++){
//     jedinica = i % 10
//     desetica = parseInt(i / 10) % 10
//     stotina1 = i / 100
//     stotina = parseInt(stotina1)
//     najv = pom(stotina, desetica, jedinica)
//     za1 = najv - 1
//     za2 = najv - 2
//     if(najv === stotina && za1 === desetica && za2 === stotina ){
//         zbir = zbir + i
//     }
//     if(najv === desetica && za1 === stotina && za2 === jedinica ){
//         zbir = zbir + i
//     }
//     if(najv === desetica && za1 === jedinica && za2 === stotina ){
//         zbir = zbir + i
//     }
//     if(najv === jedinica && za1 === stotina && za2 === desetica ){
//         zbir = zbir + i
//     }
//     if(najv === jedinica && za1 === desetica && za2 === stotina ){
//         zbir = zbir + i
//     }

    
// }
// console.log(zbir)



//61 Izracunati sumu clanova niza cija je vrednost u intervalu [3, 9]
// const arr = [3, 6, 7, 2, 4, 7 ,8 ,9 ,1, 5, 2, 6 ,7, 0, 0]
// let sum = 0
// const zad61 = (array) => {
//     const arr2 = array.slice(3, 12)
//     for(i = 0; i < arr2.length ; i ++){
//         sum = arr2[i] + sum
//     }
//     return sum
// }

// console.log(zad61(arr))

//53 Ispisati clanove niza Ispisati pozitivne nule pa negativne clanove niza 
// const arr = [3, -6, 7, 2, -4, 7 ,8 ,9 ,1, 5, -2, 6 ,7, 0, 0]

// console.log(arr.sort().reverse())


//54 ucitati clanove niza ispisati susedne clanove niza cija je suma parna
// const arr = [3, -6, 7, 2, -4, 7 ,8 ,9 ,1, 5, -2, 6 ,7, 0, 0]
// let suma
// for(i = 0; i < arr.length ; i ++){
//    suma = arr[i] + arr[i - 1]
//     if(suma % 2 === 0){
//         console.log(arr[i])
//     }
// }