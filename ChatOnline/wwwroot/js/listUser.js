// Sample user data
var users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Alice Johnson", email: "alice@example.com" },
    { id: 5, name: "Alice Johnson", email: "alice@example.com" },
    { id: 6, name: "Alice Johnson", email: "alice@example.com" },
    { id: 7, name: "Alice Johnson", email: "alice@example.com" },
    { id: 8, name: "Alice Johnson", email: "alice@example.com" },
    { id: 9, name: "Alice Johnson", email: "alice@example.com" },
    { id: 10, name: "Alice Johnson", email: "alice@example.com" },
    { id: 11, name: "Alice Johnson", email: "alice@example.com" },
    { id: 12, name: "Alice Johnson", email: "alice@example.com" },
    { id: 13, name: "Alice Johnson", email: "alice@example.com" },
    { id: 14, name: "Alice Johnson", email: "alice@example.com" },
    { id: 15, name: "Alice Johnson", email: "alice@example.com" },
    { id: 16, name: "Alice Johnson", email: "alice@example.com" },
];

// Function to render the user list
function renderUserList() {
    var userListElement = document.getElementById("userList");

    // Clear the existing list content
    userListElement.innerHTML = '';

    // Loop through each user and create list item for them
    users.forEach(function (user) {
        var listItem = document.createElement("li");
        listItem.textContent = user.name + " - " + user.email;
        userListElement.appendChild(listItem);
    });
}

// Call the function to render the user list when the page loads
renderUserList();