const apiURL = "https://jsonplaceholder.typicode.com/users";
const container = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

// Fetch users from API
function fetchUsers() {
    container.innerHTML = "<h3>Loading...</h3>";

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(users => {
            container.innerHTML = "";
            users.forEach(user => {
                const card = document.createElement("div");
                card.className = "user-card";

                card.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        });
}

reloadBtn.addEventListener("click", fetchUsers);

// Load on page start
fetchUsers();
