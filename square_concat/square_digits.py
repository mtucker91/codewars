import codewars_test as test
from solution import square_digits

@test.describe("Premade tests: ")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(square_digits(9119), 811181)
        test.assert_equals(square_digits(0), 0)

##### START SOLUTION #####
def square_digits(num):
    x = [int(a) for a in str(num)]
    concatans = ''
    for i in x:
        square = int(i)*int(i)
        concatans = concatans+str(square)
    return int(concatans)

##### END SOLUTION #####