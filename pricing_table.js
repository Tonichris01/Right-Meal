// UI
const checkBill = document.querySelector('input[type="checkbox"]');
const monthly = document.getElementById("basic");
const yearly = document.getElementById("premium");
const perDuration = document.querySelectorAll("#per");

console.log();
// Event Listener
checkBill.addEventListener("change", () => {
  if (checkBill.checked) {
    monthly.innerText = "18";
    yearly.innerText = "48";
    perDuration.forEach(function (per) {
      per.innerText = "Billed Annually";
    });
    document.getElementById("yearly").style.color = "#2196f3";
    document.getElementById("monthly").style.color = "#ccc";
  } else {
    monthly.innerText = "31";
    yearly.innerText = "76";
    perDuration.forEach(function (per) {
      per.innerText = "Per Month";
    });
    document.getElementById("monthly").style.color = "#2196f3";
    document.getElementById("yearly").style.color = "#ccc";
  }
});