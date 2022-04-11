// Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

function showTvDetails(tvArray) {
    return `${tvArray.brand} ${tvArray.type} - ${tvArray.name}`;
}
console.log(`Opdracht 4a`, showTvDetails(inventory[4]));

// Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

function showTvPrice(tvArray) {
    return `€${tvArray.price},-`;
}
console.log(`Opdracht 4b`, showTvPrice(inventory[4]));

// Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm. Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Test of jouw functie werkt in alle mogelijke gevallen.

function showScreenSizes(tvArray) {
    for (let i = 0; i < tvArray.length; i++) {
        const inchToCm = tvArray[i] * 2.54.toFixed(0);
        tvArray[i] = tvArray[i] + " inch (" + inchToCm + " cm)";
    }
    return tvArray.join(" | ")
}
// !!!!!!!!!  Deze console log geeft problemen als hij aan staat bij opdracht 4d?
/*console.log(`Opdracht 4c`, showScreenSizes(inventory[4].availableSizes));*/

// Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

// !!!!!!!!!  Deze functie geeft problemen als hij aan staat bij opdracht 4e?

/*function generateInfoBundle(tvArray) {
    const infoBundle = document.getElementById(`infoBundle`);
    infoBundle.innerHTML = `
            <li>${showTvDetails(tvArray)}</li>
            <li>${showTvPrice(tvArray)}</li>
            <li>${showScreenSizes(tvArray.availableSizes)}</li>
    `;
}
generateInfoBundle(inventory[4]);*/

// Opdracht 4e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met t

function showAllBundleInfo(tvArray) {
    const infoBundles = document.getElementById(`infoBundles`);
    const allModelItems = tvArray.map((tvObject) => {
        return `
        <ol>
            <li>${showTvDetails(tvObject)}</li>
            <li>${showTvPrice(tvObject)}</li>
            <li>${showScreenSizes(tvObject.availableSizes)}</li>
        </ol>`;
    });
    infoBundles.innerHTML = `${allModelItems.join("")}`;
}
showAllBundleInfo(inventory);




