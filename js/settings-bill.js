// Reference HTML elements
var settingsAddBtn = document.querySelector('.addBtnWithSettings');
var updateSettingsBtn = document.querySelector('.updateSettings');
var txtCallTotalSettings = document.querySelector('.callTotalSettings');
var txtSmsTotalSettings = document.querySelector('.smsTotalSettings');
var txtTotalSettings = document.querySelector('.totalSettings');
// OK
var newSmsCost = document.querySelector('.smsCostSetting');
var newCallCost = document.querySelector('.callCostSetting');
var newWarningLevel = document.querySelector('.warningLevelSetting');
var newCriticalLevel = document.querySelector('.criticalLevelSetting');
// reset displays
txtCallTotalSettings.innerHTML = '0.00';
txtSmsTotalSettings.innerHTML = '0.00';
txtTotalSettings.innerHTML = '0.00';

function BillWithSettings() {
  var callCost = 2.75;
  var smsCost = 0.75;
  var calls = 0;
  var smses = 0;
  var totalBill = 0;
  var warningLevel = 30;
  var criticalLevel = 50;

  // Setters
  function setCallCost(value) {
      if (callCost !== value) {
          callCost = parseFloat(value);
      }
  }

  function setSmsCost(value) {
      if (smsCost !== value) {
          smsCost = parseFloat(value);
      }
  }

  function setWarningLevel(value) {
      if (warningLevel !== value) {
          warningLevel = parseFloat(value);
      }
  }

  function setCriticalLevel(value) {
      if (criticalLevel !== value) {
          criticalLevel = parseFloat(value);
      }
  }

  //getters
  function getCallsTotal (){
    return calls.toFixed(2);
  }

  function getSmsTotal (){
    return smses.toFixed(2);
  }

  function getTotalBill (){
    totalBill = calls + smses;
    return totalBill.toFixed(2);
  }

  // processors
  function calculateBill(type) {
    if (type === "call"){
      calls += callCost;
    }
    if (type === "sms"){
      smses += smsCost;
    }
  }

  function totalPriceAlert() {
    if(totalBill > warningLevel && totalBill < criticalLevel)
      return 'warning';
    else if (totalBill > criticalLevel)
      return 'danger';

    return;
  }
  // Returns
  return {
    callCost:     setCallCost,
    smsCost:      setSmsCost,
    warning:      setWarningLevel,
    critical:     setCriticalLevel,
    calculate:    calculateBill,
    callTotal:    getCallsTotal,
    smsTotal:     getSmsTotal,
    total:        getTotalBill,
    totalAlert:   totalPriceAlert
  }
}

settingsBill = BillWithSettings();

function updateSettings(){
  var call = newCallCost.value.trim();
  var sms = newSmsCost.value.trim();
  var criticalLevel = newCriticalLevel.value.trim();
  var warningLevel = newWarningLevel.value.trim();
  settingsBill.callCost(call);
  settingsBill.smsCost(sms);
  settingsBill.warning(warningLevel);
  settingsBill.critical(criticalLevel);
}

function updateSettingsBillDisplays(){
  txtCallTotalSettings.innerHTML = settingsBill.callTotal();
  txtSmsTotalSettings.innerHTML = settingsBill.smsTotal();
  txtTotalSettings.innerHTML = settingsBill.total();
  txtTotalSettings.classList.add(settingsBill.totalAlert());
}

function processSettingsBill() {
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioBtn)
    settingsBill.calculate(checkedRadioBtn.value);
  updateSettingsBillDisplays();
}

updateSettingsBtn.addEventListener('click', updateSettings);
settingsAddBtn.addEventListener('click', processSettingsBill);
