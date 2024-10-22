function sanitize(word) {
    word = word.toLowerCase().trim()
    return word
}

function calcPercentual(counter, n){
    let valore = (counter / n) * 100
    return valore
}

let n = 7

let counterAns = 0
let uncorrectAns = 0
let quizAns = ['roma', 'tevere', 'bianco', 'po', 'bari', 'milano', 'egitto']
let nameAns = []
let uncorrect = [null]
let percentualValue = 0
let firstName = null
while( firstName  === null ){
    firstName = prompt("Inserisci il tuo nome: ")
}
console.log("Benvenuto " + firstName)

nameAns[0]= prompt("Prima domanda: Qual e' la capitale d'Italia?")
while( nameAns[0]  === null ){
    nameAns[0] = prompt("Scrivi la risposta ")
}

nameAns[1]= prompt("Seconda domanda: Qual e' il fiume che attraversa Roma?")
while( nameAns[1]  === null ){
    nameAns[1] = prompt("Scrivi la risposta ")
}

nameAns[2]= prompt("Terza domanda: Qual e' il colore della neve?")
while( nameAns[2]  === null ){
    nameAns[2] = prompt("Scrivi la risposta ")
}

nameAns[3]= prompt("Quarta domanda: Qual e' fiume piu' lungo d'Italia?")
while( nameAns[3]  === null ){
    nameAns[3] = prompt("Scrivi la risposta ")
}

nameAns[4]= prompt("Quinta domanda: Qual e' il capoluogo della Puglia?")
while( nameAns[4]  === null ){
    nameAns[4] = prompt("Scrivi la risposta ")
}

nameAns[5]= prompt("Sesta domanda: Qual e' il capoluogo della Lombardia?")
while( nameAns[5]  === null ){
    nameAns[5] = prompt("Scrivi la risposta ")
}

nameAns[6]= prompt("Settima domanda: Dove si trova la Sfinge?")
while( nameAns[6]  === null ){
    nameAns[6] = prompt("Scrivi la risposta ")
}

for  (let i = 0; i < n; i++) { 

    nameAns[i] = sanitize(nameAns[i])

    if(nameAns[i] === quizAns[i]){
        counterAns++
    }
    else{
        uncorrect[i] = quizAns[i]
        uncorrectAns++
    }
}

if(counterAns > 0) {
    percentualValue = calcPercentual(counterAns, n)
}

alert("Risposte corrette: %" + Math.trunc(percentualValue))
alert("Risposte incorrette: " + uncorrectAns)
console.log("Risposte sbagliate: ")
for (let j = 0; j < 7; j++){
    console.log(uncorrect[j])
}



