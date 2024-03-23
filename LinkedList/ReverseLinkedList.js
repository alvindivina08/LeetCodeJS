import MakeList from "./MakeLinkedList.js";
const List = new MakeList

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = null;

    while (curr) {
        /**
         * The next pointer is set to the next node of the current node (curr.next). 
         * This is done to preserve the reference to the next node before modifying curr.next.
         * 
         */
        next = curr.next;

        /**
         * The next pointer of the current node (curr.next) is set to the previous node (prev). 
         * This effectively reverses the direction of the link.
         */
        curr.next = prev;

        /**
         * The prev pointer is updated to point to the current node (prev = curr), 
         * moving one step forward in the list.
         */
        prev = curr;

        /**
         * The curr pointer is updated to point to the next node (curr = next), 
         * moving one step forward in the list.
         */
        curr = next;
    }
    return prev
};
const test = [
    [1,2,3,4,5]
]

test.forEach((value) => {
    const list = List.makeList(value)
    const result = reverseList(list)
    console.log(result)
})
