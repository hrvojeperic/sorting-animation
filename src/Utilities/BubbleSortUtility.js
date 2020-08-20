
const BubbleSortUtility = (stateArray) => {
    let copyArr = [...stateArray];
    let animateArr = BubbleSortAlgorithm(copyArr);
    BubbleSortAnimation(animateArr);

    let blockArray = document.getElementsByClassName('block');
    
    for(let i = 0; i < blockArray.length; i++) {
        console.log(blockArray[i].style.height);
    }

    //console.log("Animating Bubble Sort...");
    return null;
}

const BubbleSortAnimation = (animateArr) => {
    const ANIMATION_SPEED_MS = 0;
    //let blockArray = document.getElementsByClassName('block');
    for (let i = 0; i < animateArr.length; i++) {
        
        //(function(index) {
        //    setTimeout(function() {
                let blockArray = document.getElementsByClassName('block');
                let [curr, next, isCompare, isSwap] = animateArr[i];
                if (isCompare === true && isSwap === false) { // highlight animation
        //            setTimeout(function() {
                        blockArray[curr].style.backgroundColor = 'red';
                        blockArray[next].style.backgroundColor = 'red';
        //            }, index * ANIMATION_SPEED_MS);
                }
                else if (isCompare === false && isSwap === false) { // un-highlight animation
        //            setTimeout(function() {
                        blockArray[curr].style.backgroundColor = '#282c34';
                        blockArray[next].style.backgroundColor = '#282c34';
        //            }, index * ANIMATION_SPEED_MS);
                }
                else if (isCompare === true && isSwap === true) { // swap animation
        //            setTimeout(function() {
                        let currHeight = blockArray[next].style.height;
                        let nextHeight = blockArray[curr].style.height;
                        blockArray[curr].style.height = currHeight;
                        blockArray[next].style.height = nextHeight;
                        blockArray[curr].style.height = currHeight+'px';
                        blockArray[next].style.height = nextHeight+'px';
         //           }, index * ANIMATION_SPEED_MS);
                }

       //     }, index * ANIMATION_SPEED_MS);
     //   })(i)
    }
}

// performs bubble sort on array
const BubbleSortAlgorithm = (arr) => {
    console.log(arr);
    let animations = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            animations.push([j, j+1, true, false]) // highlight animation
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                animations.push([j, j+1, true, true]) // swap animation
            }
            animations.push([j, j+1, false, false]) // un-highlight animation
        }
    }
    console.log(arr);
    return animations;
} 

export default BubbleSortUtility;