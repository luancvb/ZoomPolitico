const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar dados do formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para busca
app.get('/buscar', (req, res) => {
    const query = req.query.query || '';
    // Simulação de busca
    const resultados = simulacaoBusca(query);
    res.json(resultados);
});

// Simulador de busca no "banco de dados"
function simulacaoBusca(query) {
    const artigos = [
        { id: 1, titulo: 'Reforma Política', conteudo: 'Detalhes da reforma política...' },
        { id: 2, titulo: 'Eleições 2024', conteudo: 'Tudo sobre as próximas eleições...' },
        { id: 3, titulo: 'Corrupção no Congresso', conteudo: 'Investigações em andamento...' },
    ];
    return artigos.filter(a => a.titulo.toLowerCase().includes(query.toLowerCase()));
}

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
