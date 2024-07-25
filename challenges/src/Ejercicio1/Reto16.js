/**
 * @typedef {Object} TreeNode
 * @property {null | number} value
 * @property {null | TreeNode} left
 * @property {null | TreeNode} right
 */

/**
 * @typedef {Object} StackEntry
 * @property {TreeNode} node
 * @property {number} index
 */
function transformTree(tree) {
    if (tree.length === 0) {
        return null;
    }

    const root = {
        value: tree[0], left: null, right: null
    };

    const stack = [
        { node: root, index: 0 }
    ];

    for (const entry of stack) {
        const { node, index } = entry;

        const rightChildIndex = 2 * index + 2;
        const rightValue = tree[rightChildIndex];

        const leftChildIndex = 2 * index + 1;
        const leftValue = tree[leftChildIndex];

        if (typeof rightValue === 'number') {
            node.right = { value: rightValue, left: null, right: null };
            stack.push({ node: node.right, index: rightChildIndex });
        }

        if (typeof leftValue === 'number') {
            node.left = { value: leftValue, left: null, right: null };
            stack.push({ node: node.left, index: leftChildIndex });
        }
    }

    return root;
}