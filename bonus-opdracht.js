// Bonusopdracht
// Opdracht 1: Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

// "Sorteer op prijs" knop

let sortPrice = [''];

const sortBtn = document.getElementById('sort-price-btn');
const sortList = document.getElementById('sort-price-list');

sortBtn.addEventListener('click', activateLowToHigh);





// "AmbiLight" knop

const ambiLightBtn = document.getElementById('ambilight-btn');

ambiLightBtn.addEventListener('click', activateAmbilightFilter);

// "Uitverkochte exemplaren" knop

const soldOutBtn = document.getElementById('sold-out-btn');

soldOutBtn.addEventListener('click', activateSoldOutFilter);



// Helaas geen tijd voor gehad om de bonusopdrachten af te maken :(