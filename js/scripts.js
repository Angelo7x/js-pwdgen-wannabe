/*chiedi nome*/
var firstname = prompt("Inserisci il tuo nome")
/*chiedi cognome*/
var surname = prompt ("inserisci il tuo cognome");
/* chiedi colore preferito*/
var color = prompt ("Inserisci il tuo colore preferito");
/*Chiedi la classe*/
var classe = prompt ("Inserisci la classe");
/*insieme dati*/
var all = firstname + surname + color + classe;
/*Password finale*/
document.getElementById("pass" ) .innerHTML = "Ecco la tua password: " + all;
