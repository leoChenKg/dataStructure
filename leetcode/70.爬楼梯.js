/**
 * @param {number} n
 * @return {number}
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 *
 * 最后有两种到达的方式 1步 或 2步 向前推 推到底 如果
 *
 */

var climbStairs = function (n) {
  if (n < 3) return n
  let p = 1
  let q = 1
  let s = 2
  for (let i = 3; i <= n; i++) {
    p = q
    q = s
    s = p + q
  }

  return s
}

console.log(climbStairs(5))

/**
 * 0->1 1->1 2->2 3->3 4->5 5->8 6->13
 *
 *
 *
 *
 *
 */
