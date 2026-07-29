let clients = JSON.parse(localStorage.getItem("clients")) || [];

displayClients();

function displayClients() {
    const list = document.getElementById("clientList");

    if (clients.length === 0) {
        list.innerHTML = "<p>No clients added yet.</p>";
        return;
    }

    list.innerHTML = "";

    clients.forEach((client, index) => {
        list.innerHTML += `
        <div class="card">
            <h3>${client.name}</h3>
            <p><strong>Project:</strong> ${client.project}</p>
            <p><strong>Phone:</strong> ${client.phone}</p>
            <p><strong>Email:</strong> ${client.email}</p>
            <p><strong>Location:</strong> ${client.location}</p>
            <p><strong>Notes:</strong> ${client.notes}</p>

            <button onclick="deleteClient(${index})">
                Delete Client
            </button>
        </div>
        `;
    });
}

function saveClient() {

    const client = {
        name: document.getElementById("clientName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        project: document.getElementById("project").value,
        location: document.getElementById("location").value,
        notes: document.getElementById("notes").value
    };

    if (client.name.trim() === "") {
        alert("Please enter the client name.");
        return;
    }

    clients.push(client);

    localStorage.setItem("clients", JSON.stringify(clients));

    displayClients();

    document.getElementById("clientName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("project").value = "";
    document.getElementById("location").value = "";
    document.getElementById("notes").value = "";

    alert("Client saved successfully!");
}

function deleteClient(index) {

    if (!confirm("Delete this client?")) return;

    clients.splice(index, 1);

    localStorage.setItem("clients", JSON.stringify(clients));

    displayClients();
}
