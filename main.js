let boxes = document.querySelector(".boxes");
let toDown = document.querySelector(".to-down");
let main = document.querySelector("main");
let box = ``;
boxes.innerHTML = "Loading...";
fetch(
  "https://api.giphy.com/v1/gifs/trending?api_key=VTgOb97pV9Q9MtChVSKLsccXGBiBTqjr"
)
  .then((res) => res.json())
  .then((data) => {
    data.data.forEach((item) => {
      box += `
          <div class="box">
            <img src=${item.images["480w_still"].url} alt=""/>
          </div> 
            `;
    });
    boxes.innerHTML = box;
  })
  .catch((error) => (boxes.innerHTML = error));

const callApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    data.data.forEach((item) => {
      box += `
            <div class="box">
              <img src=${item.images["480w_still"].url} alt=""/>
            </div> 
    `;
    });
    boxes.innerHTML = box;
  } catch (error) {
    boxes.innerHTML = error;
  }
};
callApi(
  "https://api.giphy.com/v1/gifs/trending?api_key=VTgOb97pV9Q9MtChVSKLsccXGBiBTqjr"
);

toDown.addEventListener("click", () => {
  window.scrollTo(0, document.body.scrollHeight);
});
