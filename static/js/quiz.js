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
nameAns[1]= prompt("Seconda domanda: Qual e' il fiume che attraversa Roma?")
nameAns[2]= prompt("Terza domanda: Qual e' il colore della neve?")
nameAns[3]= prompt("Quarta domanda: Qual e' fiume piu' lungo d'Italia?")
nameAns[4]= prompt("Quinta domanda: Qual e' il capoluogo della Puglia?")
nameAns[5]= prompt("Sesta domanda: Qual e' il capoluogo della Lombardia?")
nameAns[6]= prompt("Settima domanda: Dove si trova la Sfinge?")

for  (let i = 0; i < 7; i++) { 
    nameAns[i] = nameAns[i].toLowerCase().trim()
    if(nameAns[i] === quizAns[i]){
        counterAns++
    }
    else{
        uncorrect[i] = quizAns[i]
        uncorrectAns++
    }
}

if(counterAns > 0) {
    percentualValue = (counterAns / 7) * 100
}

alert("Risposte corrette: %" + Math.trunc(percentualValue))
alert("Risposte incorrette: " + uncorrectAns)
console.log("Risposte sbagliate: ")
for (let j = 0; j < 7; j++){
    console.log(uncorrect[j])
}


