export class PriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    // Method to swap elements in the heap
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    // Method to bubble up an element to its correct position
    bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex].priority >= this.heap[index].priority) break;
        this.swap(parentIndex, index);
        index = parentIndex;
      }
    }
  
    // Method to bubble down an element to its correct position
    bubbleDown() {
      let index = 0;
      const length = this.heap.length;
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let swapIndex = null;
  
        if (leftChildIndex < length) {
          if (this.heap[leftChildIndex].priority > this.heap[index].priority) {
            swapIndex = leftChildIndex;
          }
        }
  
        if (rightChildIndex < length) {
          if (
            (swapIndex === null && this.heap[rightChildIndex].priority > this.heap[index].priority) ||
            (swapIndex !== null && this.heap[rightChildIndex].priority > this.heap[leftChildIndex].priority)
          ) {
            swapIndex = rightChildIndex;
          }
        }
  
        if (swapIndex === null) break;
        this.swap(index, swapIndex);
        index = swapIndex;
      }
    }
  
    // Method to insert an element with a given priority
    enqueue(element, priority) {
      this.heap.push({ element, priority });
      this.bubbleUp();
    }
  
    // Method to remove and return the element with the highest priority
    dequeue() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop().element;
  
      const root = this.heap[0].element;
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return root;
    }
  
    // Method to check if the priority queue is empty
    isEmpty() {
      return this.heap.length === 0;
    }
  
    // Method to get the size of the priority queue
    size() {
      return this.heap.length;
    }
  }
