import React, { Component } from 'react';
import '../Styles/SortingAnimationStyles.css';
import MenuBarComponent from './MenuBarComponent.js';
import BubbleSortUtility from '../Utilities/BubbleSortUtility.js';
import InsertionSortUtility from '../Utilities/InsertionSortUtility.js';
import SelectionSortUtility from '../Utilities/SelectionSortUtility.js';
import MergeSortUtility from '../Utilities/MergeSortUtility.js';
import QuickSortUtility from '../Utilities/QuickSortUtility.js';
import NewArrayUtility from '../Utilities/NewArrayUtility.js';
import { v4 as uuidv4 } from 'uuid'; // fixed hard bug


class SortingAnimation extends Component {

    state = {
        animationArray: [],
        arraySize: 50,
        minElementSize: 10,
        maxElementSize: 500,
        animationSpeed: 2,
        isNewButtonDisable: false,
        isSortButtonDisable: false
    }

    // create new array when component mounted
    componentDidMount = () => {
        this.newArrayHandler();
    }

    // initiate new array
    newArrayHandler = () => {
        let newArr = NewArrayUtility(this.state.arraySize, this.state.minElementSize, this.state.maxElementSize);
        this.setState({animationArray: newArr});
        this.setState({isSortButtonDisable: false});
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
    bubbleSortHandler = async () => {
        this.setState({isSortButtonDisable: true});
        this.setState({isNewButtonDisable: true});
        await BubbleSortUtility(this.state.animationArray, this.state.animationSpeed, this.state);
        this.setState({isNewButtonDisable: false});
    }

    // initiate insertion sort
    insertionSortHandler = async () => {
        this.setState({isSortButtonDisable: true});
        this.setState({isNewButtonDisable: true});
        await InsertionSortUtility(this.state.animationArray, this.state.animationSpeed);
        this.setState({isNewButtonDisable: false});
    }

    // initiate quick sort
    selectionSortHandler = async () => {
        this.setState({isSortButtonDisable: true});
        this.setState({isNewButtonDisable: true});
        await SelectionSortUtility(this.state.animationArray, this.state.animationSpeed);
        this.setState({isNewButtonDisable: false});
    }

    // initiate merge sort
    mergeSortHandler = async () => {
        this.setState({isSortButtonDisable: true});
        this.setState({isNewButtonDisable: true});
        await MergeSortUtility(this.state.animationArray, this.state.animationSpeed);
        this.setState({isNewButtonDisable: false});
    }

    // initiate quick sort
    quickSortHandler = async () => {
        this.setState({isSortButtonDisable: true});
        this.setState({isNewButtonDisable: true});
        await QuickSortUtility(this.state.animationArray, this.state.animationSpeed);
        this.setState({isNewButtonDisable: false});
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
                    isNewButtonDisable={this.state.isNewButtonDisable}
                    isSortButtonDisable={this.state.isSortButtonDisable}
                    new={() => this.newArrayHandler()}
                    bubble={() => this.bubbleSortHandler()}
                    insertion={() => this.insertionSortHandler()}
                    selection={() => this.selectionSortHandler()}
                    merge={() => this.mergeSortHandler()}
                    quick={() => this.quickSortHandler()} />
                <div className='container'>
                    {boxList}
                </div>
            </div>
        );
    }
}

export default SortingAnimation;