// Trier par le 1er element des subArray
const sortArray = (arr: number[][]) => {
  return arr.sort((a: number[], b: number[]) => a[0] - b[0])
}

// construire les intervals du tableau sans intersection
const foo = (arr: number[][]) => {
  const sortedArr = sortArray(arr);
  let res = [sortedArr[0]];
  // On débute par l'index 1 parce qu'on on prends toujours le 1er subArray aprés le sort des elements
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i][0] > res[res.length - 1][1]) {
      res.push(sortedArr[i])
    } else if (sortedArr[i][1] > res[res.length - 1][1]) {
      res[res.length - 1][1] = sortedArr[i][1]
    }
  }

  return res;
}

console.log(foo([[0, 3], [6, 10]]))
console.log(foo([[0, 5], [3, 10]]));
console.log(foo([[0, 5], [2, 4]]));
console.log(foo([[7, 8], [3, 6], [2, 4]]))
console.log(foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]))