const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
		this.elems = [];
	}
	getUnderlyingList() {
		let list = {};
		for (let i = this.elems.length - 1; i >= 0; i--) {
			const node = new ListNode(this.elems[i]);
			node.next = (i != this.elems.length - 1) ? list : null;
			list = node;
		}
		return list;
	}

	enqueue(value) {
		this.elems.push(value);
	}

	dequeue() {
		return this.elems.shift();
	}
}

module.exports = {
  Queue
};
