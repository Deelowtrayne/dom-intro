var calculateBtn = document.querySelector('.calculateBtn');
var billTotal = document.querySelector('.billTotal');
var billString = document.querySelector('.billString');

function totalPhoneBill(callsAndSmses) {
  var allData = callsAndSmses.split(',');
  var totalBill = 0;
  for (var i = 0; i < allData.length; i++) {
  	if (allData[i].trim() == "call") {
    	totalBill += 2.75;
    } else if (allData[i].trim() == "sms") {
    	totalBill += 0.75;
    }
  }
  return totalBill.toFixed(2);
}
<<<<<<< HEAD

=======
>>>>>>> 53ff99562712614c7dbfce70247e4b18dabc4acf
//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', function(){
  billTotal.innerHTML = totalPhoneBill(billString.value);
  if (totalPhoneBill(billString.value) > 30.00) {
    billTotal.style.color = 'red';
  } else if (totalPhoneBill(billString.value) > 20.00 && totalPhoneBill(billString.value) < 30.00) {
    billTotal.style.color = 'orange';
  } else {
    billTotal.style.color = 'inherit';
  }
});
