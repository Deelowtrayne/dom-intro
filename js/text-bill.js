<<<<<<< HEAD
=======
var billTypeText = document.querySelector('.billTypeText');
>>>>>>> 53ff99562712614c7dbfce70247e4b18dabc4acf
var textTotalAddBtn = document.querySelector('.addToBillBtn');
var callsTotalElem = document.querySelector('.callTotalOne');
var smsTotalElem = document.querySelector('.smsTotalOne');
var totalCostElem = document.querySelector('.totalOne');
<<<<<<< HEAD

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
=======
var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){
  // get the value entered in the billType textfield
  var billTypeEntered = billTypeText.value.trim();
  // update the correct total
  if (billTypeEntered === "call"){
      callsTotal += 2.75;
  }
  else if (billTypeEntered === "sms"){
      smsTotal += 0.75;
  }
  // change the colour of the total
  if (callsTotal > 30.00 )
    callsTotalElem.classList.add('warning');
  if (callsTotal > 50.00 )
    callsTotalElem.classList.add('danger');
  //update the totals that is displayed on the screen.
  billTypeText.value = "";
  callsTotalElem.innerHTML = callsTotal.toFixed(2);
  smsTotalElem.innerHTML = smsTotal.toFixed(2);
  var totalCost = callsTotal + smsTotal;
  totalCostElem.innerHTML = totalCost.toFixed(2);
}
textTotalAddBtn.addEventListener('click', textBillTotal);
>>>>>>> 53ff99562712614c7dbfce70247e4b18dabc4acf
