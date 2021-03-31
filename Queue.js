class Queue {
  constructor(length) {
    this.array = new Array(length);
    this.F = 0;
    this.R = 0;
  }

  enqueue(val) {
    if (this.R === this.array.length) {
      this._doubleArray();
    }
    this.array[this.R] = val;
    this.R++;
  }
  dequeue() {
    if (this.array.length === 0) return false;
    if (this.array.length === this.F) return;
    this.F = this.F + 1;
  }
  peek() {
    return this.array[this.F];
  }

  _doubleArray() {
    const newArrayLength = this.array.length * 2;
    const newArray = new Array(newArrayLength);
    for (let i = 0; i < this.array.length; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
    console.log(this.array);
  }
}

const queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.peek());
console.log(queue);
