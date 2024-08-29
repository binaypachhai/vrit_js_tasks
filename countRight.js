function countRight(arr) {
  if (arr.length === 0) return { count: [] };
  let c = [];

  for (let i = 0; i < arr.length; i++) {
    c[i] = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        c[i] = c[i] + 1;
      }
    }
  }
  return { count: c };
}

const arr = [2, 4, 3, 6, 1];
const result = countRight(arr);

console.log("Count:", result.count);