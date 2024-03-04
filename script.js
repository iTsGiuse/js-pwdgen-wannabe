/* DICHIARAZIONI VARIABILI */
/*  dichiarazione variabili from imput */
const nome = prompt('Inserisci il tuo nome');
const cognome = prompt('Inserisci il tuo cognome');
const colore = prompt('Inserisci il tuo colore preferito');

/*  dichiarazione variabili not imput */
const numero = 23;

/* CREAZIONE MESSAGGIO FOR OUTPUT */
const password = nome + cognome + colore + numero;
/* const password = ${nome} ${cognome} ${colore} ${numero}; */

/* CHECK VARIABILI */
console.log(nome);
console.log(cognome); 
console.log(colore);
console.log(numero);
console.log(password);

/* OUTPUT */
document.getElementById('nome').innerHTML = nome;
document.getElementById('cognome').innerHTML = cognome;
document.getElementById('colore').innerHTML = colore;
document.getElementById('password').innerHTML = password;