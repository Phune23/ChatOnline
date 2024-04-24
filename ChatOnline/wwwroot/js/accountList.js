
// Danh sách mẫu của người dùng
const users = [
    { id: 1, name: "Phú" },
    { id: 2, name: "Minh" },
    { id: 3, name: "Lũy" },
    { id: 4, name: "Hiền" },
    { id: 5, name: "DLinh" },
    { id: 5, name: "Dung" },
    { id: 5, name: "Đạt" },
    { id: 5, name: "Thạch" },
    { id: 5, name: "Bích" },
    { id: 5, name: "Kiều" }
];  

// Hàm để hiển thị người dùng dựa trên truy vấn tìm kiếm
function renderUsers(query) {
    const userList = document.getElementById('accountList');
    userList.innerHTML = '';

    // Lọc người dùng dựa trên truy vấn
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));

    // Hiển thị danh sách người dùng đã lọc
    filteredUsers.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        const addButton = document.createElement('button');
        addButton.textContent = 'Kết bạn';
        addButton.addEventListener('click', function () {
            addUserToFriends(user);
            renderUsers(query);
            renderFriends();
        });
        listItem.appendChild(addButton);
        userList.appendChild(listItem);
    });
}

// Sự kiện nghe sự thay đổi của input
document.getElementById('searchInput').addEventListener('input', function () {
    renderUsers(this.value);
});

// Hiển thị ban đầu
renderUsers('');
renderFriends();