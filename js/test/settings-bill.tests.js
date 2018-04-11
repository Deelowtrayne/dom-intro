describe('Tests the Settings-bill Widget', function(){
  it('Should use the default costs to calculate and return call total (5.50)', function(){
    var billSettings = BillWithSettings();
    billSettings.calculate('call');
    billSettings.calculate('call');
    assert.equal(billSettings.callTotal(), 5.50);
  });
  it('Should set new call cost to calculate and return call total (3.45)', function(){
    var billSettings = BillWithSettings();
    billSettings.callsCost(3.45);
    billSettings.calculate('call');
    assert.equal(billSettings.callTotal(), 3.45);
  });
  it('Should use the default cost to calculate and return sms total (1.50)', function(){
    var billSettings = BillWithSettings();
    billSettings.calculate('sms');
    billSettings.calculate('sms');
    assert.equal(billSettings.smsTotal(), 1.50);
  });
  it('Should set new sms cost to calculate and return sms total (3.45)', function(){
    var billSettings = BillWithSettings();
    billSettings.smsCost(1.20);
    billSettings.calculate('sms');
    assert.equal(billSettings.smsTotal(), 1.20);
  });
  it('Should set new sms and call cost to calculate and return total bill (4.73)', function(){
    var billSettings = BillWithSettings();
    billSettings.callsCost(3.28);
    billSettings.smsCost(1.45);
    billSettings.calculate('call');
    billSettings.calculate('sms');
    assert.equal(billSettings.total(), 4.73);
  });
  it('Should set new sms and call cost to calculate and return total bill (47.)', function(){
    var billSettings = BillWithSettings();
    billSettings.callsCost(3.28);
    billSettings.smsCost(1.45);
    for (var i = 0; i < 10; i++) {
      billSettings.calculate('call');
      billSettings.calculate('sms');
    }
    billSettings.total()
    assert.equal(, 47.30);
  });
});
