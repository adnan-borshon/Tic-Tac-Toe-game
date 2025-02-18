let btn = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let count = 0;

function checkWin() {
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let winner of win) {
    let pos1 = btn[winner[0]].innerText;
    let pos2 = btn[winner[1]].innerText;
    let pos3 = btn[winner[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        alert(`Winner`);
        console.log(`Winner found`);
      }
    }
  }
}
btn.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (count % 2 === 0) {
      box.innerText = "O";
      box.style.color = "green";
      count++;
    } else {
      box.innerText = "X";
      box.style.color = "green";
      count++;
    }
    box.disabled = true;
    checkWin();
  });
});

reset.addEventListener("click", () => {
  btn.forEach((box) => {
    box.innerText = "";
    count = 0;
    box.disabled = false;
  });
  
  alert("Game reset!");
});
