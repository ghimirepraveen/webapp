console.log("hello world ");

const dispaly = document.querySelector(".resultpreview");
const btns = document.querySelector(".but");
btns.addEventListener("click", counter);
let count = 0;
function counter(e) {
  const btan = e.target.id;
  if (btan == "inc") {
    count = count + 1;
  } else if (btan == "dec") {
    count = count - 1;
  } else {
    count = 0;
  }
  dispaly.textContent = count;
}
