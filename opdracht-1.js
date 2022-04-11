// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

// 1. gebruik de map-method om alle namen te weergeven.
// 2. log de uitkomst in de console.

const tvTypes = inventory.map((tv) => {
    return tv.type;
})
console.log("tvTypes", tvTypes);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

// 1. Gebruik de filter-method om alle tv's die uitverkocht zijn te weergeven
// 2. log de uitkomst in de console.



/*    const tvSoldOut = inventory.filter((tv) => {
        return tv.originalStock === tv.sold;
    })
    console.log("Opdracht 1b", tvSoldOut);*/


// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

// 1. Gebruik de filter-method om alle tv's die AmbiLight hebben te weergeven
// 2. Via punt notatie van het object options om bij Ambilight te komen
// 3. Return ambilight wanneer die true is
// 4. log de uitkomst in de console.



   /* const tvWithAmbilight = inventory.filter((tv) => {
        return tv.options.ambiLight === true;
    })
    console.log("Opdracht 1c", tvWithAmbilight);*/


// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

// 1. Gebruik de sort-method om alle tv's van laagste naar hoogste prijs te sorteren
// 2. Log de uitkomst in de console.
//


    /*const lowToHighPrices = inventory.sort((a, b) => {
        return a.price - b.price;
    });
    console.log("Opdracht 1d", lowToHighPrices);*/






























