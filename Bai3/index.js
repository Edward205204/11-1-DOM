const $ = document.getElementById.bind(document);
const incomeInput = $("income");
const dependentsInput = $("dependents");
const nameInput = $("name");

const getTaxableIncome = (income, dependents) => {
  return income - 4 - dependents * 1.6;
};

const getTaxRate = (taxableIncome) => {
  if (taxableIncome <= 60) return 5;
  if (taxableIncome <= 120) return 10;
  if (taxableIncome <= 210) return 15;
  if (taxableIncome <= 384) return 20;
  if (taxableIncome <= 624) return 25;
  if (taxableIncome <= 960) return 30;
  return 35;
};

const calculateTax = (taxableIncome) => (taxRate) => {
  return (taxableIncome * taxRate) / 100;
};

const handleCalculateTax = () => {
  const taxableIncome = getTaxableIncome(
    incomeInput.value,
    dependentsInput.value
  );
  const taxAmount = calculateTax(taxableIncome)(getTaxRate(taxableIncome));

  if (isNaN(taxAmount)) {
    $("#result").innerHTML = `Vui lòng nhập đúng thông tin`;
    return;
  }

  $("result").innerHTML =
    `${nameInput.value} phải trả thuế là: ${taxAmount.toFixed(2)} triệu đồng.`;
};

$("calculate-tax").addEventListener("click", handleCalculateTax);
