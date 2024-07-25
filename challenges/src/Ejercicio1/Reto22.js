function compile(code) {
    let result = 0;
    let index = 0;
    let isReturnPoint = false;
    let skipCondition = false;

    for (let i = 0; i < code.length; i++) {
        if (skipCondition) {
            if (code[i] === '?') {
                skipCondition = false;
            }
            continue;
        }

        switch (code[i]) {
            case '+':
                result++;
                break;
            case '*':
                result *= 2;
                break;
            case '-':
                result--;
                break;
            case '%':
                isReturnPoint = true;
                index = i;
                break;
            case '<':
                if (isReturnPoint) {
                    code = code.slice(0, i) + code.slice(i + 1);
                    i = index;
                    isReturnPoint = false;
                }
                break;
            case '¿':
                if (result <= 0) {
                    skipCondition = true;
                }
                break;
            case '?':
                break;
        }
    }
    return result;
}
