// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let totalSold = 0;
for (let i = 0; i < inventory.length; i++) {
    totalSold += inventory[i].sold
}
console.log(`totalSold`, totalSold);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.


const sold = document.getElementById(`verkocht`);
sold.textContent = totalSold;
















