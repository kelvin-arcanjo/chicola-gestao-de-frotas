const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click' , (event) => {
    event.preventDefault();

    // Process the form submission;

    const inputName = document.getElementById('name').value;
    const inputPhone = document.getElementById('phone').value;
    const vehicleType = document.getElementById('vehicle_type').value;

    if (!inputName || !inputPhone || !vehicleType) {
        alert('Por favor, preencha todos os campos obrigatórios!');

        return;
    }

    alert('Candidatura Enviada com sucesso!');
});