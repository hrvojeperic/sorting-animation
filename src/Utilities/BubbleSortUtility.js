let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// initiates bubble sort methods
const BubbleSortUtility = async (stateArray, speed) => {
    let copyArr = JSON.parse(JSON.stringify(stateArray));
    let animateArr = BubbleSortAlgorithm(copyArr);
    await BubbleSortAnimation(animateArr, speed);
}

// performs bubble sort on array
const BubbleSortAlgorithm = (arr) => {
    let length = arr.length;
    let animations = [];
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            animations.push([j, j+1, true, false]) // highlight animation
            if (arr[j].value > arr[j+1].value) {
                let temp = arr[j].value;
                arr[j].value = arr[j+1].value;
                arr[j+1].value = temp;
                animations.push([j, j+1, true, true]) // swap animation
            }
            animations.push([j, j+1, false, false]) // un-highlight animation
        }
    }
    return animations;
}

// performs bubble sort animation
const BubbleSortAnimation = async (animateArr, speed) => {
        
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
                
            }, (index) * speed);
        })(i)
    }
    await wait(animateArr.length * speed * 2);
}

export default BubbleSortUtility;