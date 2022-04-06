// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let totalSold = 0;
for (let i = 0; i < inventory.length; i++) {
    totalSold += inventory[i].sold;
}
console.log(`totalSold`, totalSold);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.


const sold = document.getElementById(`verkocht`);
sold.innerHTML = `
<h3>Tv's verkocht</h3>
<p>${totalSold}</p>
`;

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let totalStock = 0;
for (let i =0; i < inventory.length; i++) {
    totalStock += inventory[i].originalStock;
}
console.log(`totalStock`, totalStock);

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const stock = document.getElementById(`voorraad`);
stock.innerHTML = `
<h3>Tv's nog op voorraad</h3>
<p>${totalStock}</p>
`;

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

const toBeSold = document.getElementById(`verschil`);
toBeSold.innerHTML = `
<h3>Tv's nog te verkopen</h3>
<p>${totalStock-totalSold}</p>
`;










