const usersDiv = document.getElementById("users");

function expandPosts(id) {
  try {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((data) => {
        let posts = data;
        let postContent = posts.map((post) => {
          let postDiv = document.createElement("div");
          postDiv.classList.add("posts")
          let title = document.createElement("h4");
          title.classList.add("title");
          title.innerHTML = post.title.toUpperCase();
          let body = document.createElement("p");
          body.classList.add("body");
          body.innerHTML = post.body;
          const user = document.getElementById(`${id}`);
          postDiv.appendChild(title);
          postDiv.appendChild(body);
          user.appendChild(postDiv);
          return title;
        });
      });
  } catch (error) {
    console.log(error);
  }
}

function fetchUsers() {
  try {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        let users = data;
        let userContent = users.map((user) => {
          let name = document.createElement("h3");
          name.classList.add("name");
          name.innerHTML = user.name;
          name.setAttribute("id", user.id);
          name.onclick = function () {
            expandPosts(user.id);
          };
          usersDiv.appendChild(name);
          return name;
        });
      });
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();
