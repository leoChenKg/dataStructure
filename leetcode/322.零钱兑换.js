/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 
 * 动态规划问题
 * 
 * 如果达到的
 * 
 */
var coinChange = function (coins, amount) {
  let memo = {}
  function dp(n) {
    if (memo[n] !== undefined) {
      return memo[n]
    }
    if (n === 0) return 0
    if (n < 0) return -1
    let res = Number.MAX_VALUE
    for (let i = 0; i < coins.length; i++) {
      let subRes = dp(n - coins[i])
      memo[n - coins[i]] = subRes
      if (subRes === -1) continue
      res = Math.min(res, 1 + subRes)
      memo[n] = res
    }
    return res === Number.MAX_VALUE ? -1 : res
  }

  return dp(amount)
}

console.log(coinChange([1,2,5],11))
