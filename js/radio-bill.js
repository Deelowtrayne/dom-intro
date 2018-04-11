var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
var callTotalTwo = document.querySelector('.callTotalTwo');
var smsTotalTwo = document.querySelector('.smsTotalTwo');
var totalTwo = document.querySelector('.totalTwo');

<<<<<<< HEAD
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
=======
var callsTotal2 = 0;
var smsTotal2 = 0;

function radioBillTotal(){
  // get a reference to the sms or call radio buttons
  var checkedRadioBtn = document.querySelector('input[name="billItemType"]:checked');
  if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
  }
  // update the correct total
  if (billItemType === "call"){
      callsTotal2 += 2.75;
  } else if (billItemType === "sms"){
      smsTotal2 += 0.75;
  }
  //update the totals that is displayed on the screen.
  callTotalTwo.innerHTML = callsTotal2.toFixed(2);
  smsTotalTwo.innerHTML = smsTotal2.toFixed(2);
  var totalCost = callsTotal2 + smsTotal2;
  totalTwo.innerHTML = totalCost.toFixed(2);
  // change the colour of the total
  if (totalCost > 30.00 )
    totalTwo.classList.add('warning');
  if (totalCost > 50.00 )
    totalTwo.classList.add('danger');
}

radioBillAddBtn.addEventListener('click', radioBillTotal);
>>>>>>> 53ff99562712614c7dbfce70247e4b18dabc4acf
