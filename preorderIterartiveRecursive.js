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

    preorderTraversalIterative(root) {
        if (!root) {
            console.log(result);
        }
        var stack = [root];
        var result = [];
        while (stack.length > 0) {
            var node = stack.pop();
            result.push(node.value);
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }
        console.log(result);
    }

    preoderRecursive(currentNode,) {
        if (currentNode == null) return;
        console.log(currentNode.value);
        this.preoderRecursive(currentNode.left)
        this.preoderRecursive(currentNode.right)
    }

}
const tree = new BST()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)
tree.insert(6)
tree.insert(7)
tree.insert(8)
tree.preorderTraversalIterative(tree.root)
tree.preoderRecursive(tree.root)