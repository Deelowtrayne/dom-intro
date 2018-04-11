describe('Test the Radio-bill Widget', function(){
  it('Checks if total calls function returns the expected value (2.75)', function(){
    var textBill = TextBill();
    textBill.calculate('call');
    assert.equal(textBill.totalCalls(), 2.75);
  });

  it('Checks if total SMSes function returns the expected value (0.75)', function(){
    var textBill = TextBill();
    textBill.calculate('sms');
    assert.equal(textBill.totalSmses(), 0.75);
  });

  it('Checks if total bill function returns the expected value (3.50)', function(){
    var textBill = TextBill();
    textBill.calculate('call');
    textBill.calculate('sms');
    assert.equal(textBill.total(), 3.50);
  });

  it('Checks if the total alert function returns the (danger) flag', function(){
    var textBill = TextBill();
    // Fill up the total to reach the threshold
    for (var i = 0; i < 20; i++) {
      textBill.calculate('call');
      textBill.calculate('sms');
    }
    textBill.total();
    assert.equal(textBill.totalAlert(), 'danger');
  });
});
