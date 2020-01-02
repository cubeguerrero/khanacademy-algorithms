class Tree {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const inorderTraversal = (root, callback) => {
  if (root === null) {
    return;
  }

  inorderTraversal(root.left, callback);
  callback(root.value);
  inorderTraversal(root.right, callback);
}

const preorderTraversal = (root, callback) => {
  if (root === null) {
    return;
  }

  callback(root.value);
  preorderTraversal(root.left, callback);
  preorderTraversal(root.right, callback);
}

const postorderTraversal = (root, callback) => {
  if (root === null) {
    return;
  }

  preorderTraversal(root.left, callback);
  preorderTraversal(root.right, callback);
  callback(root.value);
}

var t = new Tree(1,
  new Tree(2, null, null), new Tree(3,
    new Tree(4, null, null), null));

inorderTraversal(t, console.log);
preorderTraversal(t, console.log);
postorderTraversal(t, console.log);