let count = 0;

function increment() {
  count = count + 1;
  document.getElementById("count-el").innerText = count;
  console.log(count);
}

function save() {
  console.log("Count saved:", count);
}
