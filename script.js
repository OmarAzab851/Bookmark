function displayBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    var tableBody = document.querySelector("#bookmarksTable tbody");
    tableBody.innerHTML = "";
    for (var i = 0; i < bookmarks.length; i++) {
        var row = `
        <tr>
            <td>${i + 1}</td>
            <td>${bookmarks[i].name}</td>
            <td><a href="${bookmarks[i].url}" target="_blank" class="visit-btn">Visit</a></td>
            <td><button onclick="deleteBookmark(${i})" class="delete-btn">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    }
}

function addBookmark() {
    var name = document.getElementById("siteName").value.trim();
    var url = document.getElementById("siteUrl").value.trim();

    if (!name || !url) {
        alert("يرجى إدخال اسم الموقع والرابط!");
        return false;
    }

    var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push({ name: name, url: url });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    document.getElementById("bookmarkForm").reset(); 
    displayBookmarks();

    return false; 
}

function deleteBookmark(index) {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayBookmarks();
}

document.getElementById("bookmarkForm").onsubmit = addBookmark;

displayBookmarks();
