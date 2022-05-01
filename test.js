let arr = [3,2,1]
function nextPermutation (arr) {
  const swap = (i, j) =>
  [arr[i],arr[j]] = [arr[j],arr[i]]

let len = arr.length - 1, i
for (i = len - 1; arr[i] >= arr[i+1];) i--
let j = i + 1, k = len
while (j < k) swap(j++,k--)
if (i >= 0) {
  for (j = i + 1; arr[i] >= arr[j];) j++
  swap(i,j)
  
  }
};
