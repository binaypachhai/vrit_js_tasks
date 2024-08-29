function longestConsecutiveChain(arr) {
  if (arr.length === 0) return { chain: [], length: 0 };


  arr.sort((a, b) => a - b);

  let maxLength = 1;
  let currentLength = 1;
  let longestChain = [];
  let currentChain = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      continue;
    }
    else if (arr[i] === arr[i - 1] + 1) {
      currentLength++;
      currentChain.push(arr[i]);
    }
    else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestChain = currentChain.slice();
      }
      currentLength = 1;
      currentChain = [arr[i]];
    }
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
    longestChain = currentChain.slice();
  }

  return { chain: longestChain, length: maxLength };
}


const arr = [100, 4, 200, 1, 3, 2];


const result = longestConsecutiveChain(arr);

console.log("Array:", arr);
console.log("Longest consecutive chain:", result.chain);
console.log("Length of longest consecutive chain:", result.length);





// Time complexity:
// -The code sorts the array using arr.sort((a, b) => a - b), which has a time complexity of O(nlogn) where n is the number of elements in the array.
// -After sorting, the code iterates through the sorted array once using a for loop which has a time complexity of O(n).

// Hence, overall time complexity = O(nlogn)+ O(n) = O(nlogn)




// Space complexity:
// -Sorting the array in JS requires additional space proportional to the size of the array due to sorting algorithm's space requires, so the space complexity is usually O(n).
// -Variables {'maxLength' & 'currentLength'} are constant space so space complexity is O(1).
// -However variables {'longestChain', 'currentChain'} can store all the elements of the array at worst case, so the space complexity is O(n).

// Hence, overall space complexity = O(n)


