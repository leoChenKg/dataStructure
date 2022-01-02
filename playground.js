const { ListNode, genSinglyLinked } = require('./生成链表')

let l1 = genSinglyLinked([1, 2])
let l2 = genSinglyLinked([5, 7])

function mergeTwoLists(l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l1 === null) {
    return l1
  }
  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

// var mergeTwoLists = function (l1, l2) {
//   let ans = new ListNode(-1)
//   let anP = ans

//   while (l1 && l2) {
//     if (l1.val <= l2.val) {
//       anP.next = l1
//       l1 = l1.next
//     } else {
//       anP.next = l2
//       l2 = l2.next
//     }
//     anP = anP.next
//   }
//   anP.next = !l1 ? l2 : l1
//   return ans.next
// }

console.log(JSON.stringify(mergeTwoLists(l1, l2)))
