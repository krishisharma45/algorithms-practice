import sys
N = int(sys.stdin.readline())
students = []
for _ in xrange(N):
    student = sys.stdin.readline().strip()
    grade = float(sys.stdin.readline())
    students.append([grade, student])
    
students.sort()

lowest = students[0][0]
#find first student with higher score
for s in students:
    if s[0] > lowest:
        sec_lowest = s[0]
        break
    
# print
for s in students:
    if s[0] == sec_lowest:
        print s[1]
    
