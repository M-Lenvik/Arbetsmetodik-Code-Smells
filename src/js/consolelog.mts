//Kontrollera utvecklingsläge eller ej
const isDevMode = process.env.NODE_ENV === 'development';

//Funktion för att skapa ett console.log meddelanden
export function log(message: any): void {
  if (isDevMode) {
    console.log(message);
  }
}
