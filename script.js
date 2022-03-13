let userPost = [];
let singleUserPost = [];
let custompath = "";
let dark = false;

function singlePost(i) {
  fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => {
      window.location.pathname = "/post.html";

      singleUserPost.push(data[i]);

      localStorage.setItem("userpost", JSON.stringify(singleUserPost));

      const New = localStorage.getItem("userpost");
      const userPostNew = JSON.parse(New);

      let single = document.querySelector("singlepost");
      let d = userPostNew.length - 1;
      let html = "";

      let e = userPostNew[d];

      window.location.pathname = `/post.html`;
      html += `
     <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                 
                  </div>
                    <h5 class="post-title mb-4">${e.name}</h5>

                  </div>
                </div>
              </div>
     `;
      single.innerHTML = html;
    });
}
