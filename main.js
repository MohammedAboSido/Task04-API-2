let boxes = document.querySelector(".boxes");
let toDown = document.querySelector(".to-down");
let main = document.querySelector("main");
let box = ``;

toDown.addEventListener("click", () => {
  window.scrollTo(0, document.body.scrollHeight);
});














// const callApi = async (method, url) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url, true);
//   xhr.send();
//   return new Promise((resolve, reject) => {
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         resolve(JSON.parse(xhr.response));
//       } else if (xhr.readyState === 4 && xhr.status !== 200) {
//         reject(Error("went wrong"));
//       }
//     };
//   });
// };
// boxes.innerHTML = "Loading...";
// callApi("GET", "https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     data.forEach((item) => {
//       box += `
//         <div class="box">
//         <h4 class="box-title">${item.title}</h4>
//         <p class="box-desc">${item.body}</p>
//         <div class="box-spans">
//           <span class="span-one">P1</span>
//           <span class="span-two">Heath</span>
//         </div>
//       </div>
//         `;
//     });
//     boxes.innerHTML = box;
//   })
//   .catch((error) => (boxes.innerHTML = error));
