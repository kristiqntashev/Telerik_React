class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  };
};

class BST {
  constructor() {
    this.root = null;
  };
  create(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    };
    let current = this.root;

    const addSide = side => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      };
      current = current[side];
    };

    while (true) {
      if (val === current.val) return this;
      if (val < current.val) addSide('left');
      else addSide('right');
    };
  };
  inOrderRecursion(node) {
    if (node == null){
      return;
    }
    this.inOrderRecursion(node.left);
    console.log(node.val);
    this.inOrderRecursion(node.right);
  };
  preOrderRecursion(node) {
    if (node == null){
      return;
    }
    console.log(node.val);
    this.preOrderRecursion(node.left);
    this.preOrderRecursion(node.right);
  };
  postOrderRecursion(node) {
    if (node == null){
      return;
    }
    this.postOrderRecursion(node.left);
    this.postOrderRecursion(node.right);
    console.log(node.val);
  };
};

const tree = new BST();
tree.create(20);
tree.create(14);
tree.create(57);
tree.create(9);
tree.create(19);
tree.create(31);
tree.create(62);
tree.create(3);
tree.create(11);
tree.create(72);

tree.inOrderRecursion(tree.root);
tree.preOrderRecursion(tree.root);
tree.postOrderRecursion(tree.root);