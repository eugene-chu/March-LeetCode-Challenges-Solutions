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
 * @return {number[]}
 * 
 * I: A non-empty binary tree
 * O: An array of with the average of each level of the tree node. Each spot in the array represents the level of the tree
 * C: The range of node's value is in the range of 32-bit signed integer. Nothing else
 * E: see below
 * 
 * runtime: 96ms; mem use: 43.7mb
 */
var averageOfLevels = function(root) {
  let result = [root.val];
  let nodeCount = [1];
  let depth = 0;
  let nextNode = (node, d) => {
    nodeCount[d] = (nodeCount[d] === undefined ? 1 : (nodeCount[d]+1));
    result[d] = (result[d] === undefined ? node.val : (result[d] + node.val));
    if(node.left){
      nextNode(node.left, (d+1));
    }
    if(node.right){
      nextNode(node.right, (d+1));
    }
  };
  
  if(root.left){
    nextNode(root.left, depth+1);
  }
  if(root.right){
    nextNode(root.right, depth+1);
  }
  nodeCount.forEach((count, i) => {
    result[i] = result[i]/count;
  });

  return result;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
// let node8 = new TreeNode(8);
let node20 = new TreeNode(20, node15, node7);
let node9 = new TreeNode(9);
let root = new TreeNode(3, node9, node20);

console.log(averageOfLevels(root)); // [3, 14.5, 11]