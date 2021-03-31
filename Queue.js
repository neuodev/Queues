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
}

