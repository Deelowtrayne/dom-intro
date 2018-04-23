var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
var callTotalTwo = document.querySelector('.callTotalTwo');
var smsTotalTwo = document.querySelector('.smsTotalTwo');
var totalTwo = document.querySelector('.totalTwo');

var radioBill = TextBill();

function updateRadioBillDisplays() {
  //update the totals that is displayed on the screen.
  callTotalTwo.innerHTML = radioBill.totalCalls();
  smsTotalTwo.innerHTML = radioBill.totalSmses();
  totalTwo.innerHTML = radioBill.total();
  totalTwo.classList.add(radioBill.totalAlert());
}

function processRadioBill() {
  var checkedRadioBtn = document.querySelector('input[name="billItemType"]:checked').value;
  if (checkedRadioBtn){
    radioBill.calculate(checkedRadioBtn)
  }
  updateRadioBillDisplays();
}

radioBillAddBtn.addEventListener('click', processRadioBill);

document.addEventListener("DOMContentLoaded", function(){
  let radioTemplateSource = document.querySelector('.totalsTemplate').innerHTML;
  let radioTotalTemplate = Handlebars.compile(radioTemplateSource);
  let radioDataElem = document.querySelector('#radioBillTable');
  radioDataElem.innerHTML = radioTotalTemplate({
    callTotal: "0.00",
    smsTotal: "0.00",
    combinedTotals: "0.00"
  })
})
