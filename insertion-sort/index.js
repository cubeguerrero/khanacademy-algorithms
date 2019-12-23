function insert(array, rightIndex, value) {
  for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
    array[j + 1] = array[j];
  }

  array[j + 1] = value;
}

function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
}

var array = [5, 2, 4, 1, 3];
insertionSort(array);
console.log(array);