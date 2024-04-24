// !#3
// let div = document.querySelector("div");
// let btnLeft = document.querySelector("#left");
// let btnRight = document.querySelector("#right");

// btnLeft.addEventListener("click", (e) => {
//   div.style.margin = "0px 100px 0px 0px";
// });

// btnRight.addEventListener("click", (e) => {
//   div.style.margin = "0px 0px 0px 100px";
// });

// !#9
// let ul = document.createElement("ul");
// document.body.append(ul);
// ul.innerHTML = "<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li>";
// let li = document.querySelectorAll("li");
// let btn = document.createElement("button");
// document.body.append(btn);
// btn.addEventListener("click", () => {
//   li.forEach((item) => {
//     item.style.color = "green";
//   });
// });

// !#10
let btn1 = document.querySelector("#btn1");
let table = document.querySelector("#table");
btn1.addEventListener("click", () => {
  const table1 = table.insertRow();
  const cell1 = table1.insertCell();
  const cell2 = table1.insertCell();
  cell1.innerHTML = "Новая таблица 1";
  cell2.innerHTML = "Новая таблица 2 ";
});
// !#13
// document.addEventListener("click", (event) => {
//   let x = event.clientX;
//   let y = event.clientY;
//   alert(`x = ${x}; y = ${y}`);
// });
// !#14
// let allH = document.querySelectorAll("h4");
// allH.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     let num = Number(item.textContent);
//     console.log(num);
//     let square = num ** 2;
//     item.textContent = square;
//   });
// });

// !#17
// let allH = document.querySelectorAll("h4");
// allH.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     let num = Number(item.textContent);
//     console.log(num);
//     let square = num ** 2;
//     item.textContent = square;
//   });
// });
// !#19
// let inputElement = document.createElement("input");
// inputElement.setAttribute("type", "text");
// document.body.appendChild(inputElement);
// inputElement.addEventListener("input", function (event) {
//   let inputValue = event.target.value;
//   console.log(inputValue);
// });
