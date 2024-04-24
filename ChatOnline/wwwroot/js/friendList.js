let friends = [
    { id: 1, name: "Phú" },
    { id: 2, name: "Minh" },
    { id: 3, name: "Lũy" }
]; // Danh sách bạn bè ban đầu

// Hàm để thêm người dùng vào danh sách bạn bè
function addUserToFriends(user) {
    friends.push(user);
}

// Hàm để xóa bạn bè ra khỏi danh sách bạn bè
function removeUserFromFriends(user) {
    const index = friends.findIndex(friend => friend.id === user.id);
    if (index !== -1) {
        friends.splice(index, 1);
    }
}

// Hàm để hiển thị danh sách bạn bè
function renderFriends(query = '') {
    const friendList = document.getElementById('friendList');
    friendList.innerHTML = '';

    // Lọc danh sách bạn bè dựa trên truy vấn
    const filteredFriends = friends.filter(friend => friend.name.toLowerCase().includes(query.toLowerCase()));

    // Hiển thị danh sách bạn bè đã lọc
    filteredFriends.forEach(friend => {
        const listItem = document.createElement('li');
        listItem.textContent = friend.name;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Hủy kết bạn';
        removeButton.addEventListener('click', function () {
            removeUserFromFriends(friend);
            renderFriends(query);
        });
        listItem.appendChild(removeButton);
        friendList.appendChild(listItem);
    });
}

// Sự kiện nghe sự thay đổi của input trong danh sách bạn bè
document.getElementById('friendSearchInput').addEventListener('input', function () {
    renderFriends(this.value);
});

// Hiển thị ban đầu
renderUsers('');
renderFriends();