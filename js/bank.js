let depositValue = document.getElementById("deposit");
let withdrawValue = document.getElementById("withdraw");
let totalValue = document.getElementById("total");

function getTotalValue(value) {
  totalValue.textContent = value + " tk";
}

const calculationFunction = (valueid) => {
  let value = parseFloat(depositValue.textContent);
  let value2 = parseFloat(withdrawValue.textContent);
  let value3 = parseFloat(totalValue.textContent);

  let getValue = Number(document.getElementById("inputDeposit").value);
  let getValue2 = Number(document.getElementById("inputWithdraw").value);

  if (getValue > 0) {
    value = value + getValue;
    depositValue.textContent = value + " tk";
  }

  if (getValue2 <= value3 && getValue2 > 0) {
    value2 = value2 + getValue2;
    withdrawValue.textContent = value2 + " tk";
  }

  document.getElementById("inputDeposit").value = "";
  document.getElementById("inputWithdraw").value = "";

  let a;
  if (valueid == "depositButton" && getValue > 0) {
    a = getValue + value3;
    getTotalValue(a);
  } else {
    if (getValue2 <= value3 && getValue2 > 0) {
      a = value3 - getValue2;
      getTotalValue(a);
    }
  }
};

document.getElementById("depositButton").addEventListener("click", function () {
  calculationFunction("depositButton");
});
document
  .getElementById("withdrawButton")
  .addEventListener("click", function () {
    calculationFunction("withdrawButton");
  });


  document.getElementById("signout").addEventListener("click",function(){window.location.href="index.html"})