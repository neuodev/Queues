class Queue {
  constructor() {
    this.S1 = []; // for enqueue
    this.S2 = []; // for dequeue
  }

  enqueue(val) {
    if (!val) return;
    this.S1.push(val);
  }
  dequeue() {
    if (this.S2.length === 0) {
      while (this.S1.length !== 0) {
        const lastElement = this.S1.pop();
        this.S2.push(lastElement);
      }
    }
    return this.S2.pop();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
