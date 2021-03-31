class Queue {
  constructor() {
    this.array = [];
    this.F = null;
    this.R = null;
  }

  enqueue(val) {
    this.array.push(val);
    if (this.array.length === 1) {
      this.F = 0;
      this.R = 0;
    } else {
      this.R = this.array.length - 1;
    }
  }
  dequeue() {
    if (this.array.length === 0) return false;
    if (this.array.length - 1 === this.F) return 
    this.F = this.F + 1;
  }

}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.dequeue();
queue.dequeue();
console.log(queue);
