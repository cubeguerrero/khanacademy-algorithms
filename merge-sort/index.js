function merge(array, p, q, r) {
  var lowHalf = [];
  var highHalf = [];

  var k = p;
  var i;
  var j;

  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }

  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  while (i < lowHalf.length && j < highHalf.length) {
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i++;
    } else {
      array[k] = highHalf[j];
      j++;
    }
    k++;
  }

  while (i < lowHalf.length) {
    array[k] = lowHalf[i];
    i++;
    k++;
  }

  while (j < highHalf.length) {
    array[k] = highHalf[j];
    j++;
    k++;
  }
}

function mergeSort(array, p, r) {
  if (r > p) {
    var q = Math.floor((p + r) / 2);
    mergeSort(array, p, q);
    mergeSort(array, q+1, r);
    merge(array, p, q, r);
  }
}

var array = [-1, 3, 0, 5];
merge(array, 0, Math.floor((0 + array.length-1) / 2), array.length-1);
console.log(array);