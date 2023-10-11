
async function fetchDogFact() {
    const response = await fetch('https://dog-api.kinduff.com/api/facts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}


function displayDogFact() {
    const factContainer = document.getElementById('factContainer');
    factContainer.innerHTML = '<p class="fact-text">Loading...</p>';

    fetchDogFact()
        .then((data) => {
            factContainer.innerHTML = `<p class="fact-text">${data.facts[0]}</p>`;
        })
        .catch((error) => {
            factContainer.innerHTML = `<p class="fact-text">Error: ${error.message}</p>`;
        });
}


document.getElementById('fetchFactBtn').addEventListener('click', displayDogFact);
