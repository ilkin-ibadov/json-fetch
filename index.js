/* JSON açılışı Javascript Object Notation-dur, kompüterlərin asanlıqla parse
və generate edə bildiyi, eyni zamanda insanların asanlıqla oxuya bildiyi data
formatıdır.
*/

/* İstifadə edə biləcəyimiz 2 JSON method-u mövcuddur,
bunlardan JSON.parse() string-dən JSON faylı, JSON.stringify() isə
JSON faylından Javascript-in başa düşdüyü kod yaradır.
Biz adətən sorğu göndərdiyimiz zaman body-də olan datanı stringify, sorğu qəbul
olunduqda qaytardığı response-u isə parse edəcəyik.
*/

const container = document.getElementById("container");

// GET (Read)
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.map((item) => {
      const div = document.createElement("div");
      div.classList.add("containerStyle");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      h3.innerText = item.title;
      p.innerText = item.body;
      div.appendChild(h3);
      div.appendChild(p);
      container.appendChild(div);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// POST (Create)
async function createPost(postData) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// PUT (Update)
async function updatePost(postId, updatedData) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();

    // if(!response.ok){
    //    alert(data.errors[0])
    // }

    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// DELETE
async function deletePost(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "DELETE",
        // headers: {
        //     'Authorization': `Bearer ${token}`
        // }
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Usage examples:
getPosts();
// createPost({ title: "New Post", body: "New Post Body", userId: 1 });
// updatePost(1, {
//   id: 1,
//   title: "Updated Post",
//   body: "Updated Post Body",
//   userId: 1,
// });
// deletePost(1);
