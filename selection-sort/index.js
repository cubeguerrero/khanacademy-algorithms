function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var minIndex = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        swap(array, minIndex, j);
      }
    }
  }
}

var array = [5, 2, 4, 1, 3];
selectionSort(array);
console.log(array);