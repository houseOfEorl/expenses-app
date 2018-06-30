import MaximumPairwiseProductFast
import MaximumPairwiseProduct
import random
import time

# n = int(input())
# m = int(input())
n = 10
m = 100000

for i in range(99):
    iRandom = random.randrange(1, n + 1)
    lst = [] 
    for j in range(0, iRandom):
        lst.append(random.randrange(1, m + 1))
        startTimeResult1 = time.time()
        result1 = MaximumPairwiseProduct.test(len(lst), lst)
        finalTimeResult1 = (time.time() - startTimeResult1)
        startTimeResult2 = time.time()
        result2 = MaximumPairwiseProductFast.test(len(lst), lst)
        finalTimeResult2 = (time.time() - startTimeResult2)
        if result1 == result2:
            print("OK - Execution time: Result1: ", finalTimeResult1, "Result2: ", finalTimeResult2)
        else:
            print("Wrong Answer: ", result1, result2)
            print("Wrong Answer: ", lst)
