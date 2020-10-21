class Stack {
  constructor() {
    this.item = []
  }
  push(element) {
    this.item.push(element)
  }
  pop() {
    if (this.items.length == 0)
      return "Underflow";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);