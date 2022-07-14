const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
    assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
    assert.strictEqual(high('take me to semynak'), 'semynak');   
    assert.strictEqual(high('aa b'), 'aa');
    assert.strictEqual(high('b aa'), 'b');
    assert.strictEqual(high('bb d'), 'bb');
    assert.strictEqual(high('d bb'), 'd');
    assert.strictEqual(high('aaa b'), 'aaa');
  })
});


/***** START SOLUTION *****/
function high(x){
    let hsword = '';
    let hssum = 0, sumchars = 0;
    //instantiate alphabet
    const alpha = Array.from(Array(26)).map((e, i) => (i + 65));
    const alphabet = alpha.map((y) => String.fromCharCode(y).toLowerCase());
    let splitWords = x.split(" ");
    for(j = 0; j < splitWords.length; j++){
      for (k=0; k < splitWords[j].length; k++){
        sumchars += alphabet.indexOf(splitWords[j].charAt(k))+1;
      }
      if(sumchars > hssum){
        hsword = splitWords[j];
        hssum = sumchars;
      }
      sumchars = 0;
    }
    return hsword;
  }
/***** END SOLUTION *****/