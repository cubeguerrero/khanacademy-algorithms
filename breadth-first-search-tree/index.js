class Tree {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const breadthFirstTraversal = (root, callback) => {
  if (root === null) {
    return;
  }

  let queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();
    let value = current.value;
    callback(value);

    if (current.left === null && current.right === null) {
      continue;
    }

    if (current.left !== null) {
      queue.push(current.left);
    }

    if (current.right !== null) {
      queue.push(current.right);
    }
  }
}

t = new Tree(1,
  new Tree(2, null, null), new Tree(3,
    new Tree(4, null, null), null));

breadthFirstTraversal(t, console.log);