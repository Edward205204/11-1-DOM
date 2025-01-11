const $ = document.getElementById.bind(document);
const customerTypeSelect = $("customer-type");
const connectionsInput = $("connections");
const channelsInput = $("channels");
const calculateButton = $("calculate-btn");
const invoiceResult = $("invoice-result");
const connectionRow = $("connection-row");

const calculateInvoice = () => {
  const customerId = $("customer-id").value;
  let billAmount = 0;
  if (customerTypeSelect.value === "residential") {
    billAmount = 4.5 + 20.5 + 7.5 * channelsInput.value;
  } else if (customerTypeSelect.value === "business") {
    billAmount =
      15 +
      75 +
      (connectionsInput.value > 10 ? (connectionsInput.value - 10) * 5 : 0) +
      50 * channelsInput.value;
  }

  invoiceResult.innerHTML = `Mã khách hàng: ${customerId}<br>
  Hóa đơn cần trả: $${billAmount.toFixed(2)}`;
};

customerTypeSelect.addEventListener("change", () => {
  if (customerTypeSelect.value === "business") {
    connectionRow.style.display = "block";
  } else {
    connectionRow.style.display = "none";
  }
});

calculateButton.addEventListener("click", calculateInvoice);
