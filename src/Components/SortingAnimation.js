import React, { Component } from 'react';
import '../Styles/SortingAnimationStyles.css';
import MenuBarComponent from './MenuBarComponent.js';
import BubbleSortUtility from '../Utilities/BubbleSortUtility.js';
import InsertionSortUtility from '../Utilities/InsertionSortUtility.js';
import SelectionSortUtility from '../Utilities/SelectionSortUtility.js';
import MergeSortUtility from '../Utilities/MergeSortUtility.js';
import QuickSortUtility from '../Utilities/QuickSortUtility.js';
import NewArrayUtility from '../Utilities/NewArrayUtility.js';

// main component for animation
class SortingAnimation extends Component {

    // components state data
    state = {
        animationArray: [],
        arraySize: 150,
        minElementSize: 10,
        maxElementSize: 500,
        animationSpeed: 1,
        isNewButtonDisable: false,
        isSortButtonDisable: false,
        bestCase: "Ω(?)",
        averageCase: "θ(?)",
        worstCase: "O(?)",
        bubbleButtonSelectedColor: "",
        insertionButtonSelectedColor: "",
        selectionButtonSelectedColor: "",
        mergeButtonSelectedColor: "",
        quickButtonSelectedColor: ""
    }

    // create new array when component mounted
    componentDidMount = () => {
        document.title = "Sorting Animation"; // set tab title
        this.newArrayHandler();
    }

    // initiate new array
    newArrayHandler = () => {
        let newArr = NewArrayUtility(this.state.arraySize, this.state.minElementSize, this.state.maxElementSize);
        this.setState({animationArray: newArr, isSortButtonDisable: false, bubbleButtonSelectedColor: "white", insertionButtonSelectedColor: "white", 
                        selectionButtonSelectedColor: "white", mergeButtonSelectedColor: "white", quickButtonSelectedColor: "white", 
                        bestCase: "Ω(?)", averageCase: "θ(?)", worstCase: "O(?)"});
        document.getElementById("Comparisons").innerHTML = "0";
        document.getElementById("Swaps").innerHTML = "0";
    }

    // initiate bubble sort
    bubbleSortHandler = async () => {
        this.setState({isSortButtonDisable: true, isNewButtonDisable: true, bubbleButtonSelectedColor: "#3b3f47", bestCase: "Ω(n)", averageCase: "θ(n^2)", worstCase: "O(n^2)"});
        const [comparisons, swaps] = await BubbleSortUtility(this.state.animationArray, this.state.animationSpeed);
        this.setState({isNewButtonDisable: false});
        console.log(comparisons);
        console.log(swaps);
    }

    // initiate insertion sort
    insertionSortHandler = async () => {
        this.setState({isSortButtonDisable: true, isNewButtonDisable: true, insertionButtonSelectedColor: "#3b3f47", bestCase: "Ω(n)", averageCase: "θ(n^2)", worstCase: "O(n^2)"});
        const [comparisons, swaps] = await InsertionSortUtility(this.state.animationArray, this.state.animationSpeed);
        this.setState({isNewButtonDisable: false});
        console.log(comparisons);
        console.log(swaps);
    }

    // initiate quick sort
    selectionSortHandler = async () => {
        this.setState({isSortButtonDisable: true, isNewButtonDisable: true, selectionButtonSelectedColor: "#3b3f47", bestCase: "Ω(n^2)", averageCase: "θ(n^2)", worstCase: "O(n^2)"});
        const [comparisons, swaps] = await SelectionSortUtility(this.state.animationArray, this.state.animationSpeed);
        this.setState({isNewButtonDisable: false});
        console.log(comparisons);
        console.log(swaps);
    }

    // initiate merge sort
    mergeSortHandler = async () => {
        this.setState({isSortButtonDisable: true, isNewButtonDisable: true, mergeButtonSelectedColor: "#3b3f47", bestCase: "Ω(n log(n))", averageCase: "θ(n log(n))", worstCase: "O(n log(n))"});
        const [comparisons, swaps] = await MergeSortUtility(this.state.animationArray, this.state.animationSpeed);
        this.setState({isNewButtonDisable: false});
        console.log(comparisons);
        console.log(swaps);
    }

    // initiate quick sort  
    quickSortHandler = async () => {
        this.setState({isSortButtonDisable: true, isNewButtonDisable: true, quickButtonSelectedColor: "#3b3f47", bestCase: "Ω(n log(n))", averageCase: "θ(n log(n))", worstCase: "O(n^2)"});
        const [comparisons, swaps] = await QuickSortUtility(this.state.animationArray, this.state.animationSpeed);
        this.setState({isNewButtonDisable: false});
        console.log(comparisons);
        console.log(swaps);
    }

    // render to screen
    render() {
        // display list of boxes
        const boxList = this.state.animationArray.map((e, index) => {
            const boxHeight = e.value + 'px';
            return <div className='block' key={e.id} style={{height: boxHeight}}/>;
        });
        // render menu bar and box list
        return (
            <div>
                <MenuBarComponent 
                    bubbleButtonSelectedColor={this.state.bubbleButtonSelectedColor}
                    insertionButtonSelectedColor={this.state.insertionButtonSelectedColor}
                    selectionButtonSelectedColor={this.state.selectionButtonSelectedColor}
                    mergeButtonSelectedColor={this.state.mergeButtonSelectedColor}
                    quickButtonSelectedColor={this.state.quickButtonSelectedColor}
                    isNewButtonDisable={this.state.isNewButtonDisable}
                    isSortButtonDisable={this.state.isSortButtonDisable}
                    numOfComparisons={this.state.numOfComparisons}
                    numOfSwaps={this.state.numOfSwaps}
                    bestCase={this.state.bestCase}
                    averageCase={this.state.averageCase}
                    worstCase={this.state.worstCase}
                    new={() => this.newArrayHandler()}
                    bubble={() => this.bubbleSortHandler()}
                    insertion={() => this.insertionSortHandler()}
                    selection={() => this.selectionSortHandler()}
                    merge={() => this.mergeSortHandler()}
                    quick={() => this.quickSortHandler()} 
                />
                <div className='container'>
                    {boxList}
                </div>
            </div>
        );
    }
}

export default SortingAnimation;