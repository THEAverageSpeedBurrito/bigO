'use strict';

//O(1)
function repeat10 () {
  for(let i = 0; i < 10; i++){
    console.log(10);
  }
}

//O(n)
function addTen(arr){
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 10;
  }
  return arr;
}

//O(n^2)
function doUselessStuff(arr) {
  for(var i = 0; i < arr.length; i++) {

    for(var x = 0; x < arr.length; x++) {

      console.log(arr[i] + arr[x]);

    }

  }
}
