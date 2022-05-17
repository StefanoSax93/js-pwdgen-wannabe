alert("Benvenuto visitatore,rispondi alle domande così ti aiuteremo a creare una password")
const userName = prompt("Qual è il tuo nome?")
const userSurname = prompt("Qual è il tuo cognome?")
const userColor = prompt("Qual è il tuo colore preferito?")

const userData = document.getElementById("user-data")

userData.innerHTML = `Password: ${userName}${userSurname}${userColor}22`
console.log(userData)
