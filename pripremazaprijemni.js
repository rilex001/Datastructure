//5 izracunati sumu dvocifrenih brojeva deljivih sa 3
var br = 0
for(let i = 10; i <= 99; i++){
    if( i % 3 === 0){
        br = br + i
    }
}
// console.log(br)

//10 Izracunati sumu dvocifrenih brojeva kod kojih pri deljenju sa 3 je ostatak 2
let zad2 = 0
for(let i = 10; i <=99; i++){
    if( i % 3 === 2){
        zad2 = zad2 + i
    }
}
// console.log(zad2)

//15 Izracunati sumu dvocifrenih brojeva druga cifra deljiva sa 4
let zad3 = 0
let druga
for(let i  = 10; i<=99; i++){
    druga = i % 10
    if(druga % 4 === 0){
        zad3 = druga + zad3
    }
}
// 

//20 Izracunati sumu trocifrenih brojeva sa zadnjom cifrom 3
let zad4 = 0
let zadnjacifra
for(let i = 100; i <= 999; i++){
    zadnjacifra = i % 10
    if(zadnjacifra === 3){
        zad4 = i + zad4
    }
}
// console.log(zad4)

//25 Izracunati sumu trocifrenih brojeva sa drugom cifrom vecom od 6
let drugacifra 
let zad5 = 0
for(let i = 100; i <= 999; i++){
    drugacifra = Math.round((i / 10) % 10)
    if(drugacifra  > 7){
        zad5 = zad5 + drugacifra
    }
}
// console.log(zad5)

//30 Izracunati sumu trocifrenih brojeva deljivih sa 3 
let zad6 = 0
for(let i = 100; i <= 999; i++){
    if(i % 3 === 0){
        zad6 = i + zad6
    }
}
// console.log(zad6)

//35 Izracunati sumu trocifrenih brojeva cija je druga cifra nije deljiva sa 3
let zad7 = 0
for(let i = 100; i<= 999; i++){
    drugacifra = Math.round((i / 10) % 10)
    if(drugacifra % 3 === 0){
        console.log(i)
    } 
}
