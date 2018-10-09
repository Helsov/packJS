const operations = require('./operations.js');
const assert = require('assert');

describe("Блок теста", ()=>{
  it('правильно находит сумму 1 и 3', ()=>{
    assert.equal(operations.add(1,3), 4);
  });

  it('правильно находит вычитание 24 и 6', ()=>{
    assert.equal(operations.subtract(24,6), 18);
  });

  it('правильно находит умножение 2 и 4', ()=>{
    assert.equal(operations.multiply(2,4), 8);
  });

  it('правильно находит деление 12 и 4', ()=>{
    assert.equal(operations.divide(12,4), 3);
  });

  it('сообщает об ошибки при использовании строки вместо числа', ()=>{
    assert.equal(operations.validateNumbers('sammy', 5), false);
  });

  it('сообщает об ошибки при использовании двух строк вместо чисел', ()=>{
    assert.equal(operations.validateNumbers('sammy', 'sammy'), false);
  });

  it('успех пр использовании двух чисел', ()=>{
    assert.equal(operations.validateNumbers(5, 5), true);
  });
})
