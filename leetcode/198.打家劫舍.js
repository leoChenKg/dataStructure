/**
 * @param {number[]} nums
 * @return {number}
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋。
 * 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，
 * 计算你 不触动警报装置的情况下，
 * 一夜之内能够偷窃到的最高金额。
 *
 *
 * 数组中访问连续的两个单元，就不行。那么要行的话，就间隔（可以间隔多个）的访问，能够最大的金额
 */
var rob = function (nums) {
  let len = nums.length
  if (len < 2) return nums[0]
  
  let dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
    let p = i - 2
    let max = dp[i - 2]
    while (p-- >= 0) if (dp[p] > max) max = dp[p]

    dp[i] = max + nums[i]
    if (dp[i] > max) max = dp[i]
  }
  return Math.max(dp[len - 1], dp[len - 2])
}
console.log(rob([7, 6, 3, 1, 1, 4, 5, 100, 1, 0, 45, 67, 45, 24, 5, 6, 7, 8, 19, 100, 390, 34, 5, 7, 8, 234, 234, 24, 65]))
