// initiates merge sort methods
const MergeSortUtility = (stateArray, speed) => {
    let copyArr = JSON.parse(JSON.stringify(stateArray));
    let animateArr = MergeSortAlgorithm(copyArr);
    MergeSortAnimation(animateArr, speed);
}

// performs merge sort on array
const MergeSortAlgorithm = (arr) => {
    let length = arr.length;
    let animations = [];

    
    return animations;
}



  // performs bubble sort animation
const MergeSortAnimation = (animateArr, speed) => {
    for (let i = 0; i < animateArr.length; i++) {
        (function(index) {
            setTimeout(function() {
                let blockArray = document.getElementsByClassName('block');
                let [curr, next, isCompare, isSwap] = animateArr[i];
                if (isCompare === true && isSwap === false) { // highlight animation
                    setTimeout(function() {
                        console.log(blockArray);
                        //blockArray[curr].style.backgroundColor = 'red';
                        //blockArray[next].style.backgroundColor = 'red';
                    }, index * speed);
                }
            }, (index) * speed);
        })(i)
    }
}
  

export default MergeSortUtility;