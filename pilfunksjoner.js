//Oppgave 1
const helloWorld = () => {
    console.log("Hello World!")
}
helloWorld();
//


//Oppgave 2
const parameter = (alder) => {
    console.log(alder);
}
parameter("16");

//Oppgave 3

const skriveUtNavn = (firstName, lastName) => {
    return("My name is " + firstName + ' ' + lastName );
}
const fullName = skriveUtNavn("Pawel", "Czernecki")
parameter(fullName);

//Oppgave 4

const restOperator = (...osv) => {
    console.log(osv);
}

restOperator("en", "to", "tre", "fire");

//Oppgave 5

//Pilfunksjoner blir ikke hoistet. Det betyr at du må sende funksjonen inn i minne før du kan initzialisere den.