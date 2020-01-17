from pip._vendor.distlib.compat import raw_input

def validateEmail(n):
    char = n[1]
    s = ""
    end = ""
    last = ""
    if char.isalpha():
        if bool(n.find('@')):
            s = [char, n.find('@')]
            if bool(s.isalnum()):
                if n.count('.') == 1 or 2:
                    end = [n.find('@'), len(n)]
                    if bool(n.isalnum()):
                        if n.count('.') == 1:
                            last = [n.find('.'), len(n)]
                            if last.isalpha():
                                return 'Valid'
                            else:
                                return 'Invalid'
                        elif n.count('.') == 2:
                            last = [n.find('.'), len(n)]
                            if last.isalpha():
                                return 'Valid'
                            else:
                                return 'Invalid'
                        else:
                            return 'Invalid'
                    else:
                        return 'Invalid'
                else:
                    return 'Invalid'
            else:
                return 'Invalid'
        else: return 'Invalid'
    else: return 'Invalid'

if __name__ == '__main__':
    n = raw_input()

print(validateEmail(n))
