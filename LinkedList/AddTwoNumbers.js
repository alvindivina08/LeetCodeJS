import MakeList from "./MakeLinkedList.js";
const List = new MakeList

/**
 @param {ListNode} l1
 @param {ListNode} l2
 @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum -= 10
        }

        head.next = new ListNode(sum);
        head = head.next
        sum = carry;
        carry = 0;
    }
    return List.next
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const test = [
    [[2,4,3],[5,6,4]]
]

test.forEach((value) => {
    const list1 = List.makeList(value[0])
    const list2 = List.makeList(value[1])
    const result = addTwoNumbers(list1, list2)
    console.log(result)
})
