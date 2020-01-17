def oddNumbers(l, r):
    m = []
    if r  % 2 != 0:
        r = r + 1
    else:
        pass

    for i in range(l, r):
        if i % 2 == 0:
            pass
        else:
            m.append(i)
    return m


l = 3
r = 12

print(oddNumbers(l, r))
