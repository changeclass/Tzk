let nums = [2, 7, 11, 15]
let target = 18

function fun(nums, target) {
  for (let m = 0; m < nums.length; m++) {
    for (let n = 0; n < nums.length; n++) {
      if (nums[m] + nums[n] === target && nums[m] !== nums[n]) {
        console.log(m, n)
        return
      }
    }
  }
  console.log('NONONO')
}

fun(nums, target)
