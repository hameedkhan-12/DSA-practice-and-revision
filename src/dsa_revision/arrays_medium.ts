const productOfArrayExceptSelf = (arr: number[]) => {
  let arrNew: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) product *= arr[j];
    }
    arrNew.push(product);
  }
  return arrNew;
};

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));

const productOfArrayExceptSelfOptimal = (nums: number[]) => {
  let n = nums.length;
  let result: number[] = new Array(n).fill(1)

  let prefix = 1
  for(let i = 0; i<n; i++){
    result[i] = prefix
    prefix *= nums[i]
  }

  let suffix = 1;

  for(let i = n-1; i>=0; i--){
    result[i] *=suffix
    suffix *= nums[i]
  }

  return result;
}

console.log(productOfArrayExceptSelfOptimal([1, 2, 3, 4]));