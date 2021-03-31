function reverseQueue(queue: Array<number>) {
  // only avalible methods are push and pop
  const stack = [];
  while (queue.length !== 0) {
    stack.push(queue.shift());
  }
  while (stack.length !== 0) {
    queue.push(stack.pop());
  }
  return queue;
}
console.log(reverseQueue([]));
