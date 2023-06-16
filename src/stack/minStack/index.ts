class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(val: number) {
    this.stack.push(val)

    if (this.minStack.length == 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }

    return null;
  }

  pop() {
    if (this.top() == this.getMin()) {
      this.minStack.pop();
    }

    this.stack.pop();
    return null;
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

export { MinStack };