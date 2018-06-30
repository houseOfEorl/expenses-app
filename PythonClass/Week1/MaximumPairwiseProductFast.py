# Uses python3
def test(n ,a):
    product = 0
    maximumFirst = a[0]
    maximumSecond = 0
    for i in range(1, n):
        if a[i] > maximumFirst:
            maximumSecond = maximumFirst
            maximumFirst = a[i]
        elif a[i] > maximumSecond:
            maximumSecond = a[i]
    return(maximumFirst * maximumSecond)