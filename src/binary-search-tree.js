const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

	constructor(data) {
		if (data !== undefined) {
			this._root = new Node(data);
		}
		else 
			this._root = null;
	}
	root() {
		return this._root;
	}
	add(data) {
		if (this._root === null) {
			this._root = new Node(data);
		}
		else {
			let curr = this._root;
			while (curr) {
				if (data === curr.data) {
					break;
				}
				if (data > curr.data) {
					if (!curr.right) {
						curr.right = new Node(data);
						break;
					}
					else {
						curr = curr.right;
					}
				}
				if (data < curr.data) {
					if (!curr.left) {
						curr.left = new Node(data);
						break;
					}
					else {
						curr = curr.left;
					}
				}
			}
		}
	}

	has(data) {
		return (this.find(data) !== null);
	}

	find(data) {
		let curr = this._root;
		while (curr !== null) {
			if (data === curr.data) {
				break;
			}
			else if (data > curr.data) {
				curr = (curr.right !== null) ? curr.right : null;
			}
			else if (data < curr.data) {
				curr = (curr.left !== null) ? curr.left : null;
			}
		}
		return curr;
	}

	remove(data) {
		/*
		let curr = this._root;
		let prev = null;
		while (curr) {
			if (data === curr.data) {
				if (!curr.left && !curr.right) {
					if (prev) {
						(prev.right === curr) ? prev.right = null : prev.left = null;
					}
					else {
						this._root = null;
					}
				}
				if (!curr.left) {
					if (prev) {
						(prev.right === curr) ? prev.right = curr.right : prev.left = curr.right;
					}
					else {
						this._root  = curr.right;
					}
				}
				else if (!curr.right) {
					if (prev) {
						(prev.right === curr) ? prev.right = curr.left : prev.left = curr.left;
					}
					else {
						this._root  = curr.left;
					}
				}
				else {
					prev = curr;
					let min = curr.right;
					while (min.left) {
						prev = min;
						min = min.left;
					}
					curr.data = min.data;
					(prev.right === min) ? prev.right = null : prev.left = null;
				}
				break;
			}
			else if (data > curr.data) {
				prev = curr;
				curr = (curr.right) ? curr.right : null;
			}
			else if (data < curr.data) {
				prev = curr;
				curr = (curr.left) ? curr.left : null;
			}
		}*/
		this._root = _remove(this._root, data);
		
		function _remove(curr, data) {
			if (!curr) {
				return null;
			}
			if (data < curr.data) {
				curr.left = _remove(curr.left, data)
				return curr;
			}
			else if (data > curr.data) {
				curr.right = _remove(curr.right, data);
				return curr;
			}
			else {
				if (!curr.left && !curr.right) {
					return null;
				}
				if (!curr.left) {
					curr = curr.right;
					return curr;
				}
				if (!curr.right) {
					curr = curr.left;
					return curr;
				}
				let min = curr.right;
				while (min.left) {
					min = min.left;
				}
				curr.data = min.data;
				curr.right = _remove(curr.right, min.data)
				return curr;
			}
		}
	}

	min() {
		if (!this._root) return;
		let min = this._root;
		while (min.left) {
			min = min.left;
		}
		return min.data;
	}

	max() {
		if (!this._root) return;
		let max = this._root;
		while (max.right) {
			max = max.right;
		}
		return max.data;
	}
}

module.exports = {
  BinarySearchTree
};