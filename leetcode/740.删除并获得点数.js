// 给你一个整数数组 nums ，你可以对它进行一些操作。
// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。
// 之后，你必须删除 所有等于 nums[i] - 1 和 nums[i] + 1 的元素。
// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

/**
 * @param {number[]} nums
 * @return {number}
 *
 * [2,3,3,3,3,4,4,5,6,6,7,7,7,8,9]
 * [2,2,2,2,2,2,2,2,2,2,3,3,3,3,4,4,5,6,6,7,7,7,8,9]
 *
 * 先删除最多的 x。如果最多的 x-1 或者 x+1 也是重复的 ，计算这三个最大值 ,删除得到最大值的数获得其点数
 *
 */
var deleteAndEarn = function (nums) {
  let sum = []

  for (let i = 0; i < nums.length; i++) {
    sum[nums[i]] = sum[nums[i]] ? sum[nums[i]] + nums[i] : nums[i]
  }
  for (let i = 0; i < sum.length; i++) {
    if (sum[i] == undefined) {
      sum[i] = 0
    }
  }
  return rob(sum)
}

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

console.log(deleteAndEarn([3, 1]))
