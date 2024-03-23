/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let fast = head, slow = head, prev, next
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next
    }

    while(slow){
        next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    /**
    p1.next = p2; and p2.next = p1Next;: These lines perform the actual merging. 
    We set the next pointer of p1 to point to p2, effectively inserting p2 into the list after p1. 
    Similarly, we set the next pointer of p2 to point to p1Next, 
    effectively reconnecting the remaining nodes of the original list.

    p1 = p1Next; and p2 = p2Next;: These lines update the pointers p1 and p2 to their respective next nodes, 
    preparing them for the next iteration of the loop.
     */
    let p1 = head, p2 = prev, p1Next, p2Next;
    while (p2.next) {
        // save the next array
        p1Next = p1.next;
        p2Next = p2.next;

        // merge
        p1.next = p2;
        p2.next = p1Next;

        // next loop
        p1 = p1Next;
        p2 = p2Next;
    }
    // Handle odd length case
    if (p2) {
        p2.next = null;
    }
};