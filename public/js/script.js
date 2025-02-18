// Função para buscar e exibir dados do pré-natal
async function fetchAndDisplayData() {
  try {
    const response = await fetch('http://localhost:3000/api/prenatal');
    const data = await response.json();
    const dataList = document.getElementById('dataList');
    dataList.innerHTML = ''; // Limpa a lista antes de adicionar os dados

    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `Nome: ${item.patient_name}, Idade Gestacional: ${item.gestational_age}, Pressão: ${item.blood_pressure}, Observações: ${item.notes}`;
      dataList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

// Chama a função ao carregar a página
fetchAndDisplayData();

// Atualiza os dados automaticamente a cada 5 segundos
setInterval(fetchAndDisplayData, 5000);