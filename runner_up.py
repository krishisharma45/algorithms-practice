from pip._vendor.distlib.compat import raw_input

n = int(raw_input())
arr = map(int, raw_input().split())

s = []
for i in range(len(list(arr))):
    if arr[i] < max(arr):
        s.append(arr[i])

print(max(s))

