const { assert } = require("chai")

function test(n, expected) {
  let actual = solution(n)
  it(`Expected ${expected}, got ${actual}`, () => {  
  assert.strictEqual(actual, expected)
    })
}

describe("basic tests", function(){
  test(10,23)
})


/****** START SOLUTION ******/
function solution(number){
    let summed = 0, numcheck = 0;
    let valschecked = [5,3];
    let dupvalschecked = [0];
    // while the number to check is less than the argument number
    for (let i = 1; numcheck < number; i++){
      // while the loop goes through the values to check
      for (let j = 0; j < valschecked.length; j++){
        // number to check = the value of the array multipled by the iteration i
        numcheck = valschecked[j] * i;
        // if the updated number to check is less than the argument number
        if(numcheck < number){
          //if the same number to check is not in the list of duplicates
          if(dupvalschecked.includes(numcheck) == false){
            //add the number checked to the main sum of all the numbers
            summed += numcheck;
            // add the number checked to the duplicate array for future iterations
            dupvalschecked.push(numcheck);
          }
        }
      }
    }
    //return the end result
    return summed;
  }
/****** END SOLUTION ******/