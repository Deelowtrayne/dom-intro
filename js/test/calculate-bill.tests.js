describe('Checks if the total phone bill matches the test value', function(){
  it('total phone bill should return R7.75', function(){
    assert.deepEqual('R'+totalPhoneBill('call, sms, call, sms, sms'), 'R7.75');
  });

  it('total phone bill should return R15.50', function(){
    assert.deepEqual('R'+totalPhoneBill('call, sms, call, sms, sms, call, sms, call, sms, sms'), 'R15.50');
  });
});
