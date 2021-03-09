// Given the root of a binary tree, then value v and depth d, you need to add a row of nodes with value v at the given depth d.
// The root node is at depth 1.

// The adding rule is:
// given a positive integer depth d, for each NOT null tree nodes N in depth d-1
// create two tree nodes with value v as N's left subtree root and right subtree root.
// And N's original left subtree should be the left subtree of the new left subtree root
// its original right subtree should be the right subtree of the new right subtree root.
//
// If depth d is 1 that means there is no depth d-1 at all
// then create a tree node with value v as the new root of the whole original tree
// and the original tree is the new root's left subtree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 * 
 * I: the btree's root note, the value to add to the tree, and the depth to put the row of node
 * O: the btree with the newly row of nodes
 * C: 1 <= d <= tree's max depth + 1. The btree node will have at least 1 tree
 * E: If d = 1, the original root node will be the assigned to the left subtree.
 * 
 */

 /** 
  * result: 100ms (beat 96% of js submission), 44.5mb used (beat 80% of js submission). 
  * Very happy with this result. This is very optimized.
 */
var addOneRow = function(root, v, d) {
  if(root === null){
    return root;
  }
  if(d-1 === 0){
    return new TreeNode(v, root);
  } else if(d-1 === 1){
    root.left = new TreeNode(v, root.left, null);
    root.right = new TreeNode(v, null, root.right);
  } else {
    addOneRow(root.left, v, d-1);
    addOneRow(root.right, v, d-1);
  }
  return root;
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let node3 = new TreeNode(3);
let node1 = new TreeNode(1);
let node5 = new TreeNode(5);
let node2 = new TreeNode(2, node3, node1);
let node6 = new TreeNode(6, node5);
let node4 = new TreeNode(4, node2, node6);

console.log(addOneRow(node4, 1, 2)); // > There should be a layer of 1 right after root node
console.log(addOneRow(node4, 1, 1)); // > The root node should be 1, while the original root node is now the left subtree
console.log(addOneRow(node4, 1, 4)); // > There should be a layer of at the end of the tree. Node 6 should stilll have a null node to the right