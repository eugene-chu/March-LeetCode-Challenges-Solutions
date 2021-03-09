/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 
 * I: Two Linked List (heads)
 * O: The intersecting node, if there are any. If none exists, return null
 * C: O(n) time with O(1) space. Linked list must retain original structure after output.
 * E: Can assume it does not loop/cycles. All values in the linked list are postive integers
 */
var getIntersectionNode = function(headA, headB) {
  // this is not O(n) time. This is O(n^2) time. But it is O(1) space
  // this is at 144 ms with the following test: headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]
    // let bcycle = headB;
    // while(headA !== null){
    //   while(bcycle !== null){
    //     if(Object.is(headA, bcycle)){
    //       return headA;
    //     }
    //     bcycle = bcycle.next;
    //   }
    //   bcycle = headB;
    //   headA = headA.next;
    // }
    // return null

  // this is not O(1) space. Bu tit shoudl be O(n) time.
  // this is at 80 ms wit the following test: headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]
  // final result after submission: 112 ms with 46.6 mb used
  let listA = new Set();

  while(headA !== null){
    listA.add(headA);
    headA = headA.next;
  }
  while(headB !== null){
    if(listA.has(headB)){
      return headB;
    }
    headB = headB.next;
  }

  return null;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

listA = new ListNode(1);
listA.next = new ListNode(1);
listA.next.next = new ListNode(3);
listA.next.next.next = new ListNode(4);
listA.next.next.next.next = new ListNode(5);

listB = new ListNode(1);
listB.next = new ListNode(2);
listB.next = listA.next;
// listB.next.next = listA.next.next;

console.log(getIntersectionNode(listA, listB)); // reference to node with value of 3


// more common space solution (around 46mb)
/**
 * var getIntersectionNode = function(headA, headB) {
    
    let pA=headA
    let pB=headB
    
    while (pA != pB) {
        
        pA = pA != null ? pA.next : headB;
        pB = pB != null ? pB.next : headA;
    }
    return (pA == pB && pA != null) ? pA : null;
    
};
 */

 // slightly more optimal space solution (around 45.9mb)
 /**
  * var getIntersectionNode = function(headA, headB) {
    let a = headA;
    
    while (a !== null) {
        for (let b = headB; b !== null; b = b.next) {
            if (a === b) return a;
        }
        a = a.next;
    }
    
    return null;
};
*/

// a common time solution (around 104 ms)
/**
 * var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null;
    }
    let a = headA;
    let b = headB;
    while(a != b){
        a = (a == null) ? headB : a.next;
        b = (b == null) ? headA : b.next;
    }
    
    return a;
};
 */