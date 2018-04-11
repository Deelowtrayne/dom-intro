// Reference HTML elements
var settingsAddBtn = document.querySelector('.addBtnWithSettings');
var updateSettingsBtn = document.querySelector('.updateSettings');
var txtCallTotalSettings = document.querySelector('.callTotalSettings');
var txtSmsTotalSettings = document.querySelector('.smsTotalSettings');
var txtTotalSettings = document.querySelector('.totalSettings');
<<<<<<< HEAD
// OK
var newSmsCost = document.querySelector('.smsCostSetting');
var newCallCost = document.querySelector('.callCostSetting');
var newWarningLevel = document.querySelector('.warningLevelSetting');
var newCriticalLevel = document.querySelector('.criticalLevelSetting');
// reset displays
=======

// Default settings
var callCost = 2.75;
var smsCost = 0.75;
var warningLevel = 30.00;
var criticalLevel = 50.00;
var settingsCallTotal = 0.00;
var settingsSmsTotal = 0.00;
>>>>>>> 53ff99562712614c7dbfce70247e4b18dabc4acf
txtCallTotalSettings.innerHTML = '0.00';
txtSmsTotalSettings.innerHTML = '0.00';
txtTotalSettings.innerHTML = '0.00';
//var settingsBillTotal = 0

// Setters
function setCallCost() {
    var newCallCost = document.querySelector('.callCostSetting').value;
    if (callCost !== newCallCost) {
        callCost = parseFloat(newCallCost);
    }
}
function setSmsCost() {
    var newSmsCost = document.querySelector('.smsCostSetting').value;
    if (smsCost !== newSmsCost) {
        smsCost = parseFloat(newSmsCost);
    }
}
function setWarningLevel() {
    var newWarningLevel = document.querySelector('.warningLevelSetting').value;
    if (warningLevel !== newWarningLevel) {
        warningLevel = parseFloat(newWarningLevel);
    }
}
function setCriticalLevel() {
    var newCriticalLevel = document.querySelector('.criticalLevelSetting').value;
    if (criticalLevel !== newCriticalLevel) {
        criticalLevel = parseFloat(newCriticalLevel);
    }
}
// Update Settings
function updateSettings() {
    setCallCost();
    setSmsCost();
    setWarningLevel();
    setCriticalLevel();
}

// Calculate bill totals
function settingsBillTotal(){
    // get a reference to the sms or call radio buttons
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioBtn){
    var settingsbillItemType = checkedRadioBtn.value;
    console.log(settingsbillItemType);
  }
  // update the correct total
  if (settingsbillItemType === "call"){
    settingsCallTotal += callCost;

  } else if (settingsbillItemType === "sms"){
    settingsSmsTotal += smsCost;
    console.log(settingsSmsTotal);
  }
  //update the totals that is displayed on the screen.
  txtCallTotalSettings.innerHTML = settingsCallTotal.toFixed(2);
  txtSmsTotalSettings.innerHTML = settingsSmsTotal.toFixed(2);
  var totalBill = settingsCallTotal + settingsSmsTotal;
  txtTotalSettings.innerHTML = totalBill.toFixed(2);
  // change the colour of the total
  if (totalBill > warningLevel)
    txtTotalSettings.classList.add('warning');
  if (totalBill > criticalLevel)
    txtTotalSettings.classList.add('danger');
}

updateSettingsBtn.addEventListener('click', updateSettings);
settingsAddBtn.addEventListener('click', settingsBillTotal);
