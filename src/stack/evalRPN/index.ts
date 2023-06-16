interface IOperator {
  [key: string]: (a: number, b: number) => number;
}

export const evalRPN = (tokens: string[]): number => {
  const stack: number[] = [];
  const operator: IOperator = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b | 0,
  };


  for (let token of tokens) {
    if (operator[token]) {
      const exp2 = Number(stack.pop());
      const exp1 = Number(stack.pop());

      stack.push(operator[token](exp1, exp2));
    } else {
      stack.push(Number(token))
    }
  };

  return stack[0];
}

