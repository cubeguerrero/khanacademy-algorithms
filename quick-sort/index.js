function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function partition(array, p, r) {
  var q = p;
  for (var j = p; j < r; j++) {
    if (array[j] <= array[r]) {
      swap(array, j, q);
      q++;
    }
  }
  swap(array, q, r);
  return q;
}

function quickSort(array, p, r) {
  if (p < r) {
    var pivot = partition(array, p, r);
    quickSort(array, p, pivot - 1);
    quickSort(array, pivot + 1, r);
  }
}

var array = [5, 3, 1, 2, 4];
quickSort(array, 0, array.length - 1);
console.log(array);