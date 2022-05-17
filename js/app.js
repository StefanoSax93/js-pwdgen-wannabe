const userName = prompt("Qual è il tuo nome?")
const userSurname = prompt("Qual è il tuo cognome?")
const userColor = prompt("Qual è il tuo colore preferito?")

const userData = document.getElementById("user-data")

userData.innerHTML = `<div class="text-primary">NOME: ${userName}</div>
                    <div class="text-info">COGNOME: ${userSurname}</div>
                    <div class="text-danger">COLORE PREFERITO: ${userColor}</div>
                    <div>2022</div>`