import React from "react";
let array_size = 0;
export function mergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxilArray = array.slice();

  mergeSortHelper(array, 0, array.length - 1, auxilArray, animations);
  return animations;
}
function mergeSortHelper(mainArray, startId, endId, auxilArray, animations) {
  if (startId === endId) return;
  const middleIdx = Math.floor((startId + endId) / 2);
  mergeSortHelper(auxilArray, startId, middleIdx, mainArray, animations);
  mergeSortHelper(auxilArray, middleIdx + 1, endId, mainArray, animations);
  doMerge(mainArray, startId, middleIdx, endId, auxilArray, animations);
}

function doMerge(mainArray, startId, middleIdx, endId, auxilArray, animations) {
  let k = startId,
    i = startId,
    j = middleIdx + 1;

  while (i <= middleIdx && j <= endId) {
    const animation = {};
    animation.comparison = [i, j];

    if (auxilArray[i] <= auxilArray[j]) {
      animation.swap = [k, i];
      mainArray[k++] = auxilArray[i++];
    } else {
      animation.swap = [k, j];
      mainArray[k++] = auxilArray[j++];
    }
    animations.push(animation);
  }
  while (i <= middleIdx) {
    animations.push({
      comparison: [i, i],
      swap: [k, i],
    });
    mainArray[k++] = auxilArray[i++];
  }
  while (j <= endId) {
    animations.push({
      comparison: [j, j],
      swap: [k, j],
    });
    mainArray[k++] = auxilArray[j++];
  }
}
export function selectionSort(divs, div_sizes) {
  //Setting Time complexities
  array_size = div_sizes.length;
  c_delay = 0;

  for (var i = 0; i < 1; i++) {
    div_update(divs[i], div_sizes[i], "red"); //Color update

    let index_min = i;
  }
}

var speed = 1000;

var delay_time = 10000 / (Math.floor(array_size / 10) * speed); //Decrease numerator to increase speed.
var c_delay = 0; //This is updated ov every div change so that visualization is visible.

export function div_update(cont, height, color) {
  window.setTimeout(function () {
    console.log(cont);

    cont = React.createElement("div", null, 100);
    // cont.style = " height:" + height + "%; background-color:" + color + ";";
  }, (c_delay += delay_time));
}
/*
export function enable_buttons() {
  window.setTimeout(function () {
    for (var i = 0; i < butts_algos.length; i++) {
      butts_algos[i].classList = [];
      butts_algos[i].classList.add("butt_unselected");

      butts_algos[i].disabled = false;
      inp_as.disabled = false;
      inp_gen.disabled = false;
      inp_aspeed.disabled = false;
    }
  }, (c_delay += delay_time));
} */
