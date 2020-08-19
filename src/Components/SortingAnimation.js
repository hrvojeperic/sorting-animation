import React, { Component } from 'react';
import '../Styles/SortingAnimationStyles.css';
import MenuBarComponent from './MenuBarComponent.js';
import AnimateBubbleSort from '../Utilities/BubbleSortUtility.js';
import AnimateInsertionSort from '../Utilities/InsertionSortUtility.js';
import AnimateMergeSort from '../Utilities/MergeSortUtility.js';

class SortingAnimation extends Component {
/*
    constructor(props) {
        super(props);
    }

    state = {
        animateArray = []
    }
*/
    render() {
        return (
            <div>

                <MenuBarComponent 
                    bubble={() => AnimateBubbleSort()}
                    insertion={() => AnimateInsertionSort()}
                    merge={() => AnimateMergeSort()}/>     
                <div className="App-header">
                    <p>My name is Joey</p>
                </div>

            </div>
        );
    }

}


export default SortingAnimation;