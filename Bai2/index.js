const $ = document.getElementById.bind(document);

const calculateElectricityBill = (kw) => {
  let totalAmount = 0;
  if (kw <= 50) {
    totalAmount = kw * 500;
  } else if (kw <= 100) {
    totalAmount = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    totalAmount = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 350) {
    totalAmount = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    totalAmount =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }
  return totalAmount;
};

const handleCalculate = () => {
  const name = $("name").value;
  const kw = parseFloat($("kw").value);

  if (isNaN(kw) || kw < 0) {
    $("result").innerHTML = "Vui lòng nhập số KW hợp lệ.";
    return;
  }

  $("result").innerHTML =
    `${name} phải trả tiền điện là: ${calculateElectricityBill(kw).toLocaleString()} đồng.`;
};

$("calculate").addEventListener("click", handleCalculate);
