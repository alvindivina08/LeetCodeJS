import MakeList from "./MakeLinkedList.js";
const List = new MakeList;
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head, fast = head, prev, next;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    while(slow) {
        next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    let left = head, right = prev
    while(right) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true
};

const test = [
    [1,2,2,1]
]

test.forEach((value) => {
    const list = List.makeList(value);
    const result = isPalindrome(list);
    console.log(result);
})