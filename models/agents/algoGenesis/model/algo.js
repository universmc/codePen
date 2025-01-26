// Récupérer les données depuis le fichier JSON
fetch('alfo.json')
    .then(response => response.json())
    .then(data => {
        const workersList = document.getElementById('workers-list');

        data.workers.forEach(worker => {
            const workerElement = document.createElement('div');
            workerElement.classList.add('worker');

            workerElement.innerHTML = `
                <h2>${worker.name}</h2>
                <p>Rôle: ${worker.role}</p>
                <ul>
                    ${worker.tasks.map(task => `<li>${task.description} (${task.status})</li>`).join('')}
                </ul>
            `;

            workersList.appendChild(workerElement);
        });
    });