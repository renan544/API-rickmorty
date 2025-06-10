let page = 1;

async function fetchCharacters() {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  const data = await res.json();

  const container = document.getElementById('cards-container');

  data.results.forEach(character => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" />
      <div class="info">
        <h3>${character.name}</h3>
        <p>🟢 ${character.status}</p>
        <p>👤 ${character.species}</p>
        <p>🌍 ${character.origin.name}</p>
      </div>
    `;

    container.appendChild(card);
  });

  page++;
}

document.getElementById('load-more').addEventListener('click', fetchCharacters);

// Carrega a primeira página automaticamente
fetchCharacters();
