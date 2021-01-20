let numOfComparisons = 0;
let numOfSwaps = 0;
/* merge sort utility */

// set a timeout using a promise
let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// minimum of two numbers
const min = ( x,  y) => { return (x < y) ? x : y; }

// initiates merge sort methods
const MergeSortUtility = async (stateArray, speed) => {
    let copyArr = JSON.parse(JSON.stringify(stateArray));
    let animateArr = mergeSortAlgorithm(copyArr);
    await mergeSortAnimation(animateArr, speed);
    return [numOfComparisons, numOfSwaps];  
}

// performs merge sort on array
const mergeSortAlgorithm = (arr) => {
    let length = arr.length;
    let animations = [];
    let arr1 = JSON.parse(JSON.stringify(arr));
    mergesort(arr, arr1, 0, arr.length - 1, length, animations);
    return animations;
}

// merge two sorted subarrays A[from .. mid] and A[mid + 1 .. to]
const merge = ( A,  temp,  from,  mid,  to, N, animations) => {
	let k = from, i = from, j = mid + 1;
	while (i <= mid && j <= to) {
        animations.push([i, j, true, false]); // highlight animation
        animations.push([i, j, false, false]); // un-highlight animation
        numOfComparisons++;
		if (A[i].value < A[j].value) {
            numOfSwaps++;
            animations.push([k, A[i].value, true, true]); // swap animation
            temp[k++].value = A[i++].value;
        }
		else {
            numOfSwaps++;
            animations.push([k, A[j].value, true, true]); // swap animation
            temp[k++].value = A[j++].value; 
        }
	}
	// copy remaining elements
	while (i < N && i <= mid) {
        numOfSwaps++;
        /* animations.push([i, i, true, false]); // highlight animation (NOTE: Uncomment if highlighting swap is desired) */
        /* animations.push([i, i, false, false]); // un-highlight animation (NOTE: Uncomment if highlighting swap is desired) */
        animations.push([k, A[i].value, true, true]); // swap animation
        temp[k++].value = A[i++].value;
    }
	// copy back to the original array to reflect sorted order
	for (let i = from; i <= to; i++)
		A[i].value = temp[i].value;
}

// iteratively sort array A[low..high] using temporary array
const mergesort = (A,  temp,  low,  high, N, animations) => {
	// divide the array into blocks of size m = [1, 2, 4, 8, 16...]
	for (let m = 1; m <= high - low; m = 2*m) {
		for (let i = low; i < high; i += 2*m) {
			let from = i;
			let mid = i + m - 1;
			let to = min(i + 2*m - 1, high);
			merge(A, temp, from, mid, to, N, animations);
		}
	}
}

// performs merge sort animation
const mergeSortAnimation = async (animateArr, speed) => {
    var numC = { value: 0 };
    var numS = { value: 0 };
    for (let i = 0; i < animateArr.length; i++) { // perform animations
        _animate(animateArr, speed, i, numC, numS);
    }
    await wait(animateArr.length * speed * 2); // wait till all animations are done
}

// perform highlight, un-highlight, or swap animation
const _animate = (animateArr, speed, i, numC, numS) => {
    (function(index) {
        setTimeout(function() {
            let blockArray = document.getElementsByClassName('block');
            let [curr, next, isCompare, isSwap] = animateArr[i];
            if (isCompare === true && isSwap === false) { // highlight animation
                setTimeout(function() {
                    numC.value++;
                    document.getElementById("Comparisons").innerHTML = "" + numC.value;
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
                    numS.value++;
                    document.getElementById("Swaps").innerHTML = "" + numS.value;
                    blockArray[curr].style.height = next;
                    blockArray[curr].style.height = next+'px';
                }, index * speed);
            }
        }, (index) * speed);
    })(i)
}

export default MergeSortUtility;