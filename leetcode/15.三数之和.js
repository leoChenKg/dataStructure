/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * 给你一个包含 n 个整数的数组 nums，
 * 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * 请你找出所有和为 0 且不重复的三元组。
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 * 输入：nums = []
 * 输出：[]
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 *
 * 分类讨论
 */
var threeSum = function (nums) {
  let res = []
  let a, b, c
  let isAreadyHas = 0
  let HasAllZero = false

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let tempNum = (a = nums[i]) + (b = nums[j])
      for (let k = j + 1; k < nums.length; k++) {
        if (tempNum + nums[k] === 0) {
          c = nums[k]
          let n = 0
          if (!HasAllZero && a === 0 && b === 0 && c === 0) {
            res.push([a, b, c])
            HasAllZero = true
            continue
          }
          for (; n < res.length; n++) {
            if (res[n].includes(a) && res[n].includes(b) && res[n].includes(c)) {
              break
            }
          }
          if (n === res.length) {
            res.push([a, b, c])
          }
        }
      }
    }
  }

  return res
}
console.log(threeSum([-4, 0, 4, 0, 0]))
