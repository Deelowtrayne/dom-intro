var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
var callTotalTwo = document.querySelector('.callTotalTwo');
var smsTotalTwo = document.querySelector('.smsTotalTwo');
var totalTwo = document.querySelector('.totalTwo');
//
var radioTotalTemplate = Handlebars.compile(templateSource);
var radioDataElem = document.querySelector('#radioBillTable');

var radioBill = TextBill();

function processRadioBill() {
  var checkedRadioBtn = document.querySelector('input[name="billItemType"]:checked').value;
  if (checkedRadioBtn) {
    radioBill.calculate(checkedRadioBtn)
  }
  //update the totals that is displayed on the screen.
  radioDataElem.innerHTML = radioTotalTemplate({
    totalBillClass: 'totalTwo ' + radioBill.totalAlert(),
    callTotal: radioBill.totalCalls(),
    smsTotal: radioBill.totalSmses(),
    combinedTotals: radioBill.total()
  });
}

function initializeRadioBill() {
  radioDataElem.innerHTML = radioTotalTemplate({
    callTotalClass: 'callTotalTwo',
    smsTotalClass: 'smsTotalTwo',
    totalBillClass: 'totalTwo',
    callTotal: "0.00",
    smsTotal: "0.00",
    combinedTotals: "0.00"
  })
}
// ADDING EVENT LISTENERS
radioBillAddBtn.addEventListener('click', processRadioBill);
document.addEventListener("DOMContentLoaded", initializeRadioBill);
