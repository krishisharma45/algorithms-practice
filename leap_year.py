def leapYear(y):
    if y % 4 == 0:
        if y % 100 == 0:
            if y % 400 == 0:
                print("True")
            else:
                print("False")
        else:
            print("True")
    else:
        print("False")


n = int(raw_input())
leapYear(n)

