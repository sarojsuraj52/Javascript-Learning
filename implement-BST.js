class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this;
        }
        let tree = this.root;
        while (tree) {
            if (value <= tree.value) {
                if (!tree.left) {
                    tree.left = newNode
                    return this;
                }
                tree = tree.left
            }
            else {
                if (!tree.right) {
                    tree.right = newNode
                    return this;
                }
                tree = tree.right
            }
            // return this;
        }
    }

    search(value) {
        if (!this.root) {
            return false
        }
        let tree = this.root;
        while (tree) {
            if (value < tree.value) {
                tree = tree.left;
            } else if (value > tree.value) {
                tree = tree.right;
            } else if (tree.value === value) {
                return tree;
            }
            }
            return false;
        }
    }
    const tree = new BST()
tree.insert(3)
tree.insert(1)
tree.insert(10)
tree.insert(20)

console.log(tree.search(20))