// Simulate fetching anime data (replace with actual logic)
const animeList = [
    { title: "Attack on Titan", image: "aot.jpg" },
    { title: "My Hero Academia", image: "mha.jpg" },
    // ... more anime objects
];

const animeListElement = document.querySelector('.anime-list');

animeList.forEach(anime => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <img src="<span class="math-inline">\{anime\.image\}" alt\="</span>{anime.title}">
        <h3>${anime.title}</h3>
    `;
    // Add event listener to show details on click
    listItem.addEventListener('click', () => {
        // Simulate showing details (replace with actual logic)
        const detailsSection = document.querySelector('.anime-details');
        detailsSection.innerHTML = `<h2>${anime.title} Details</h2>`;
    });
    animeListElement.appendChild(listItem);
});
