class MakeList {
    constructor(arr) {
        arr = this.arr
    }

    makeList(arr) {
        if (!arr) return null; // empty list
        const values = arr[Symbol.iterator]();
        const head = new ListNode(values.next().value);
        let current = head;
        for (const value of values) {
            current.next = new ListNode(value);
            current = current.next;
        }
        return head;
    }
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

export default MakeList;
