let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let numOfComparisons = 0;
let numOfSwaps = 0;
// initiates merge sort methods
const MergeSortUtility = async (stateArray, speed) => {
    let copyArr = JSON.parse(JSON.stringify(stateArray));
    let animateArr = MergeSortAlgorithm(copyArr);
    await MergeSortAnimation(animateArr, speed);
    return [numOfComparisons, numOfSwaps];  
}

// performs merge sort on array
const MergeSortAlgorithm = (arr) => {
    let length = arr.length;
    let animations = [];
    let arr1 = JSON.parse(JSON.stringify(arr));
    mergesort(arr, arr1, 0, arr.length - 1, length, animations);
    console.log(arr1);
    return animations;
}

// Utility function to find minimum of two numbers
const min = ( x,  y) => {
	return (x < y) ? x : y;
}

// Merge two sorted subarrays A[from .. mid] and A[mid + 1 .. to]
const merge = ( A,  temp,  from,  mid,  to, N, animations) =>
{
	let k = from, i = from, j = mid + 1;

	// loop till there are elements in the left and right runs
	while (i <= mid && j <= to) {
    animations.push([i, j, true, false]); // highlight animation
    animations.push([i, j, false, false]); // un-highlight animation
    numOfComparisons++;
		if (A[i].value < A[j].value) {
      numOfSwaps++;
      animations.push([k, A[i].value, true, true]); // swap animation
      console.log("k: ", k, " i: ", i);
      console.log(JSON.parse(JSON.stringify(temp)));
      console.log(JSON.parse(JSON.stringify(A)));
      temp[k++].value = A[i++].value;
    }
		else {
      numOfSwaps++;
      animations.push([k, A[j].value, true, true]); // swap animation
      console.log("k: ", k, " j: ", j);
      console.log(JSON.parse(JSON.stringify(temp)));
      console.log(JSON.parse(JSON.stringify(A)));
      temp[k++].value = A[j++].value; 
    }
	}

	// Copy remaining elements
	while (i < N && i <= mid) {
    numOfSwaps++;
    animations.push([i, i, true, false]); // highlight animation
    animations.push([i, i, false, false]); // un-highlight animation
    animations.push([k, A[i].value, true, true]); // swap animation
    temp[k++].value = A[i++].value;
  }

	// Don't need to copy second half

	// copy back to the original array to reflect sorted order
	for (let i = from; i <= to; i++)
		A[i].value = temp[i].value;
}

// Iteratively sort array A[low..high] using temporary array
const mergesort = ( A,  temp,  low,  high, N, animations) =>
{
	// divide the array into blocks of size m
	// m = [1, 2, 4, 8, 16...]
	for (let m = 1; m <= high - low; m = 2*m)
	{
		// for m = 1, i = 0, 2, 4, 6, 8
		// for m = 2, i = 0, 4, 8
		// for m = 4, i = 0, 8
		// ...
		for (let i = low; i < high; i += 2*m)
		{
			let from = i;
			let mid = i + m - 1;
			let to = min(i + 2*m - 1, high);

			merge(A, temp, from, mid, to, N, animations);
		}
	}
}



  // performs bubble sort animation
const MergeSortAnimation = async (animateArr, speed) => {
    for (let i = 0; i < animateArr.length; i++) {
        (function(index) {
            setTimeout(function() {
                let blockArray = document.getElementsByClassName('block');
                let [curr, next, isCompare, isSwap] = animateArr[i];
                if (isCompare === true && isSwap === false) { // highlight animation
                    setTimeout(function() {
                        //console.log(blockArray);
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
                      /*let currHeight = blockArray[next].style.height;
                      let nextHeight = blockArray[curr].style.height;
                      blockArray[curr].style.height = currHeight;
                      blockArray[next].style.height = nextHeight;
                      blockArray[curr].style.height = currHeight+'px';
                      blockArray[next].style.height = nextHeight+'px';
                      */
                      //let currHeight = blockArray[next].style.height;
                      let nextHeight = blockArray[curr].style.height;
                      blockArray[curr].style.height = next;
                      //blockArray[next].style.height = nextHeight;
                      blockArray[curr].style.height = next+'px';
                      //blockArray[next].style.height = nextHeight+'px';
                      

                  }, index * speed);
                }
      
            }, (index) * speed);
        })(i)
    }
    await wait(animateArr.length * speed * 2);
}
  

export default MergeSortUtility;