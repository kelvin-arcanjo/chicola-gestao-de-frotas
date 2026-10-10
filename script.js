const form = document.getElementById('formCandidatura');
const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click' , async (event) => {
    event.preventDefault();

    // Process the form submission;

    const inputName = document.getElementById('name').value;
    const inputPhone = document.getElementById('phone').value;
    const vehicleType = document.getElementById('vehicle_type').value;

    if (!inputName || !inputPhone || !vehicleType) {
        alert('Por favor, preencha todos os campos obrigatórios!');

        return;
    }

    try {
        const response = await fetch('https://sistema-de-gestao-de-frotas-production.up.railway.app/candidaturas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name: inputName,
                phone: inputPhone,
                vehicle_type: vehicleType
            })
        });

        if (response.ok){
            alert('Candidatura Enviada com sucesso!');

            form.reset();
    
        } else {
            alert('Erro ao enviar candidatura. Por favor, tente novamente mais tarde.');
        }

    } catch (error) {
        console.error('Erro ao enviar candidatura:', error);
        alert('Não foi possível ligar ao servidor.');
    }
});
