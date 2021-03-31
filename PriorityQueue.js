class PriorityQueue {
  constructor() {
    this.priorityQueue = [];
  }

  insert(val) {
    const lastIdx = this.priorityQueue.length - 1;
    if (!val) return;
    if (this.priorityQueue.length === 0) this.priorityQueue.push(val);
    else if (this.priorityQueue[lastIdx] < val) {
      this.priorityQueue.push(val);
    } else {
      let idx = this.shiftItems(val);
      this.priorityQueue[idx + 1] = val;
    }
  }

  shiftItems(val) {
    const lastIdx = this.priorityQueue.length - 1;
    let i;
    for (i = lastIdx; i >= 0; i--) {
      if (this.priorityQueue[i] > val) {
        this.priorityQueue[i + 1] = this.priorityQueue[i];
      } else {
        break;
      }
    }

    return i;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.insert(5);
priorityQueue.insert(3);
priorityQueue.insert(6);

console.log(priorityQueue);
