const corpoTabela = document.getElementById('corpoTabela');

async function carregarCandidaturas() {
    try {
        const response = await fetch('https://sistema-de-gestao-de-frotas-production.up.railway.app/candidaturas');

        if (!response.ok) {
            throw new Error('Erro ao obter candidaturas da base de dados.');
        }

        const candidaturas = await response.json();
        renderizarCandidaturas(candidaturas);

    } catch (error) {
        console.error('Erro ao carregar candidaturas:', error);
    }
}

carregarCandidaturas();

function renderizarCandidaturas(candidaturas) {
    candidaturas.forEach(candidatura => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${candidatura.id}</td>
            <td>${candidatura.name}</td>
            <td>${candidatura.phone}</td>
            <td>${candidatura.vehicle_type}</td>
        `;
        corpoTabela.appendChild(row);
    });
}