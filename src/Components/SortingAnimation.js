import React, { Component } from 'react';
import '../Styles/SortingAnimationStyles.css';
import MenuBarComponent from './MenuBarComponent.js';
import BubbleSortUtility from '../Utilities/BubbleSortUtility.js';
import InsertionSortUtility from '../Utilities/InsertionSortUtility.js';
import MergeSortUtility from '../Utilities/MergeSortUtility.js';
import NewArrayUtility from '../Utilities/NewArrayUtility.js';
import { v4 as uuidv4 } from 'uuid'; // fixed hard bug

class SortingAnimation extends Component {

    state = {
        animationArray: [],
        arraySize: 100,
        minElementSize: 10,
        maxElementSize: 500,
        animationSpeed: 2
    }

    // initiate new array
    newArrayHandler = () => {
        let newArr = NewArrayUtility(this.state.arraySize, this.state.minElementSize, this.state.maxElementSize);
        this.setState({animationArray: newArr});
        /*this.setState({animationArray: [{id: uuidv4(), value: 500}, 
                                        {id: uuidv4(), value: 400},
                                        {id: uuidv4(), value: 300}, 
                                        {id: uuidv4(), value: 200}, 
                                        {id: uuidv4(), value: 100}]}, () => {
            console.log(this.state.animationArray);
            console.log(this.state.animationArray.length);
            console.log(this.state.animationArray[0].value);
        });*/
    }

    // initiate bubble sort
    bubbleSortHandler = () => {
        BubbleSortUtility(this.state.animationArray, this.state.animationSpeed);
    }

    // initiate insertion sort
    insertionSortHandler = () => {
        InsertionSortUtility(this.state.animationArray, this.state.animationSpeed);
    }

    // initiate merge sort
    mergeSortHandler = () => {
        MergeSortUtility(this.state.animationArray, this.state.animationSpeed);
    }
    
    render() {
        // display list of boxes
        const boxList = this.state.animationArray.map((e, index) => {
            const boxHeight = e.value + 'px';
            return <div className='block' key={e.id} style={{height: boxHeight}}/>;
        });
        return (
            <div>
                <MenuBarComponent 
                    new={() => this.newArrayHandler()}
                    bubble={() => this.bubbleSortHandler()}
                    insertion={() => this.insertionSortHandler()}
                    merge={() => this.mergeSortHandler()} />     
                <div className='container'>
                    {boxList}
                </div>
            </div>
        );
    }
}

export default SortingAnimation;