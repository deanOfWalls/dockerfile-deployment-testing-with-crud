document.getElementById('createButton').addEventListener('click', async function (e) {
    e.preventDefault();
    await createPerson();
});

document.getElementById('updateButton').addEventListener('click', async function (e) {
    e.preventDefault();
    await updatePerson();
});

document.getElementById('deleteButton').addEventListener('click', async function (e) {
    e.preventDefault();
    await deletePerson();
});

document.getElementById('readByIdButton').addEventListener('click', async function (e) {
    e.preventDefault();
    await readPersonById();
});

document.getElementById('readAllButton').addEventListener('click', async function (e) {
    e.preventDefault();
    await readAllPersons();
});

// Function to create a person
async function createPerson() {
    const personData = getFormData();

    const response = await fetch('/person/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(personData)
    });

    displayResponse(response);
}

// Function to update a person by ID
async function updatePerson() {
    const personId = document.getElementById('personId').value;
    if (!personId) {
        alert("Please provide a valid ID for updating.");
        return;
    }

    const personData = getFormData();

    const response = await fetch(`/person/update/${personId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(personData)
    });

    displayResponse(response);
}

// Function to delete a person by ID
async function deletePerson() {
    const personId = document.getElementById('personId').value;
    if (!personId) {
        alert("Please provide a valid ID for deleting.");
        return;
    }

    const response = await fetch(`/person/delete/${personId}`, {
        method: 'DELETE',
    });

    displayResponse(response);
}

// Function to read a person by ID
async function readPersonById() {
    const personId = document.getElementById('personId').value;
    if (!personId) {
        alert("Please provide a valid ID for reading.");
        return;
    }

    const response = await fetch(`/person/read/${personId}`);
    displayResponse(response);
}

// Function to read all persons
async function readAllPersons() {
    const response = await fetch('/person/readAll');
    displayResponse(response);
}

// Function to get form data
function getFormData() {
    return {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        birthDate: document.getElementById('birthDate').value
    };
}

// Function to display response data
async function displayResponse(response) {
    const jsonResponse = await response.json();
    const outputBox = document.getElementById('jsonOutput');
    outputBox.textContent = JSON.stringify(jsonResponse, null, 4);
}
