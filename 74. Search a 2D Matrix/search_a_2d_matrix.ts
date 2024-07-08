function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  if (rows === 0) return false;
  const cols = matrix[0].length;
  if (cols === 0) return false;

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = matrix[Math.floor(mid / cols)][mid % cols];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
