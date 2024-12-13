function toggleSearchBox() {
    const searchBox = document.getElementById('searchBox');
    searchBox.style.display = searchBox.style.display === 'flex' ? 'none' : 'flex';
}

function search() {
    const query = document.getElementById('searchInput').value;
    alert(`Buscando por: ${query}`); // Substituir por lógica de busca no backend
}