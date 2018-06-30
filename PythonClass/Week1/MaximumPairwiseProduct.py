# Uses python3
def test(n ,a):
    product = 0
    for i in range(n):
        for j in range(i + 1, n):
            product = max(product, a[i] * a[j])
    return(product)