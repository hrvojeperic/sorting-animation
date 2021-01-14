let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let numOfComparisons = 0;
let numOfSwaps = 0;
// initiates quick sort methods
const QuickSortUtility = async (stateArray, speed) => {
    let copyArr = JSON.parse(JSON.stringify(stateArray));
    let animateArr = QuickSortAlgorithm(copyArr);
    await QuickSortAnimation(animateArr, speed);
    return [numOfComparisons, numOfSwaps];  
}

const partition = (arr, low, high, animations)  => {
    let pivot = arr[high].value;  
    let i = (low-1); // index of smaller element 
    let isLess = false;
    animations.push([high, high, false, true]) // highlight partition index animation
    for (let j=low; j<high; j++) 
    { 
        // If current element is smaller than the pivot 
        animations.push([j, i+1, true, false]) // highlight animation
        numOfComparisons++;
        if (arr[j].value < pivot) { 
            numOfSwaps++;
            isLess = true;
            i++;
            // swap arr[i] and arr[j] 
            let temp = arr[i].value; 
            arr[i].value = arr[j].value; 
            arr[j].value = temp;
            animations.push([j, i, true, true]) // swap animation
        } 
        if (!isLess) {
            animations.push([j, i+1, false, false]) // un-highlight animation
        }
        else {
            animations.push([j, i, false, false]) // un-highlight animation
        }
    } 
    numOfSwaps++;
    animations.push([i+1, high, true, false]) // highlight animation
    // swap arr[i+1] and arr[high] (or pivot) 
    let temp = arr[i+1].value; 
    arr[i+1].value = arr[high].value; 
    arr[high].value = temp; 
    animations.push([i+1, high, true, true]) // swap animation
    animations.push([i+1, high, false, false]) // un-highlight animation
    //animations.push([j, i+1, false, false]) // un-highlight animation
    return i+1; 
} 

const sort = (arr, low, high, animations) => { 
    if (low < high) 
    { 
        /* pi is partitioning index, arr[pi] is  
            now at right place */
        let pi = partition(arr, low, high, animations); 

        // Recursively sort elements before 
        // partition and after partition 
        sort(arr, low, pi-1, animations); 
        sort(arr, pi+1, high, animations); 
    } 
} 

// performs quick sort on array
const QuickSortAlgorithm = (arr) => {
    console.log(arr);
    let length = arr.length;
    let animations = [];
    sort(arr, 0, length - 1, animations); 
    console.log(animations);
    return animations;
}

// performs quick sort animation
const QuickSortAnimation = async (animateArr, speed) => {
  for (let i = 0; i < animateArr.length; i++) {
      (function(index) {
          setTimeout(function() {
              let blockArray = document.getElementsByClassName('block');
              let [curr, next, isCompare, isSwap] = animateArr[i];
              if (isCompare === true && isSwap === false) { // highlight animation
                  setTimeout(function() {
                      blockArray[curr].style.backgroundColor = 'red';
                      blockArray[next].style.backgroundColor = 'red';
                  }, index * speed);
              }
              else if (isCompare === false && isSwap === false) { // un-highlight animation
                  setTimeout(function() {
                      blockArray[curr].style.backgroundColor = '#282c34';
                      blockArray[next].style.backgroundColor = '#282c34';
                  }, index * speed);
              }
              else if (isCompare === true && isSwap === true) { // swap animation
                  setTimeout(function() {
                      let currHeight = blockArray[next].style.height;
                      let nextHeight = blockArray[curr].style.height;
                      blockArray[curr].style.height = currHeight;
                      blockArray[next].style.height = nextHeight;
                      blockArray[curr].style.height = currHeight+'px';
                      blockArray[next].style.height = nextHeight+'px';
                  }, index * speed);
              }
              else if (isCompare === false && isSwap === true) { // swap animation
                setTimeout(function() {
                    blockArray[curr].style.backgroundColor = 'blue';
                    blockArray[next].style.backgroundColor = 'blue';
                }, index * speed);
            }
          }, (index) * speed);
      })(i)
  }
  await wait(animateArr.length * speed * 2);
}

export default QuickSortUtility;