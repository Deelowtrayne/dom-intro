var billTypeText = document.querySelector('.billTypeText');
var textTotalAddBtn = document.querySelector('.addToBillBtn');
var callsTotalElem = document.querySelector('.callTotalOne');
var smsTotalElem = document.querySelector('.smsTotalOne');
var totalCostElem = document.querySelector('.totalOne');

function TextBill() {
  var calls = 0;
  var smses = 0;
  var total = 0;

  function calculateBill(billType) {
    if (billType === "call"){
      calls += 2.75;
    } else if (billType === "sms"){
      smses += 0.75;
    }
  }

  function callsTotal(){
    return parseFloat(calls).toFixed(2);
  }

  function smsTotal(){
    return parseFloat(smses).toFixed(2);
  }

  function totalBill(){
    total = calls + smses;
    return parseFloat(total).toFixed(2);
  }

  function totalPriceAlert(){
    // change the colour of the total
    if (total > 30.00 && total <= 50.00)
      return 'warning';
    if (total > 50.00)
      return 'danger';
  }

  return {
    totalCalls:   callsTotal,
    totalSmses:   smsTotal,
    total:        totalBill,
    calculate:    calculateBill,
    totalAlert:   totalPriceAlert
  };
}
// Create instance
var myTextBill = TextBill();

function updateTextBillDisplays(){
  //update the totals that is displayed on the screen.
  callsTotalElem.innerHTML = myTextBill.totalCalls();
  smsTotalElem.innerHTML = myTextBill.totalSmses();
  totalCostElem.innerHTML = myTextBill.total();
  totalCostElem.classList.add(myTextBill.totalAlert());
}

function processTextBill() {
  var billTypeText = document.querySelector('.billTypeText').value.trim();
  if (billTypeText) {
    myTextBill.calculate(billTypeText);
  }

  billTypeText.value = "";
  updateTextBillDisplays();
}

textTotalAddBtn.addEventListener('click', processTextBill);

document.addEventListener('DOMContentLoaded', function(){
  let textTemplateSource = document.querySelector('.totalsTemplate').innerHTML;
  let textTotalTemplate = Handlebars.compile(textTemplateSource);
  let textDataElem = document.querySelector('#textBillTable');
  textDataElem.innerHTML = textTotalTemplate({
    callTotal: "0.00",
    smsTotal: "0.00",
    combinedTotals: "0.00"
  })
});
