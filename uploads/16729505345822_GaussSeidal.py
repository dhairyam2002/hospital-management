def seidel(a, x, b):
    n = len(a)
    for j in range(0, n):
        d = b[j]
        for i in range(0, n):
            if (j != i):
                d -= a[j][i] * x[i]
                x[j] = d / a[j][j]
    return x


n = 6
a = []
b = []
x = [0, 0, 0, 0, 0, 0]
a = [[3, -2, 1, 0, 0, 1],
     [-2, 4, -2, 1, 0, 0],
     [1, -2, 4, -2, 1, 0],
     [0, 1, -2, 4, -2, 1],
     [0, 0, 1, -2, 4, -2],
     [1, 0, 0, 1, -2, 3]]
b = [10, -8, 10, 10, -8, 10]

print("Assumed X values: ", x)
for i in range(0, 25):
    x = seidel(a, x, b)
    print('Iteration ', (i+1), ":", x)
