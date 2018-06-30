# Uses python3
def test(n ,a):
    product = 0

    arrayFirstIndex = 0
    arrayLastIndex = n - 1

    print("--1--")
    print(n)
    print(a)
    print("--1--")

    if n == 1:
        print(a[0])
    else:
        while arrayFirstIndex != arrayLastIndex:
            print("--2--")
            print(arrayFirstIndex)
            print(arrayLastIndex)
            print("--2--")
            if a[arrayFirstIndex] > a[arrayLastIndex]:
                arrayLastIndex = arrayLastIndex - 1
            else:
                arrayFirstIndex = arrayFirstIndex + 1
                
        print("--3--")                
        print(a[arrayFirstIndex] * a[arrayLastIndex])                            
        print("--3--")
    
    return("foo")