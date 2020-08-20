import React, { Component } from 'react';
import '../Styles/SortingAnimationStyles.css';
import MenuBarComponent from './MenuBarComponent.js';
import BubbleSortUtility from '../Utilities/BubbleSortUtility.js';
import InsertionSortUtility from '../Utilities/InsertionSortUtility.js';
import MergeSortUtility from '../Utilities/MergeSortUtility.js';
import NewArrayUtility from '../Utilities/NewArrayUtility.js';

class SortingAnimation extends Component {
    
    constructor(props) {
        super(props);
    }

    state = {
        animationArray: [],
        arraySize: 100,
        minElementSize: 10,
        maxElementSize: 500,
    }

    // initiate new array
    newArrayHandler = () => {
        this.setState({animationArray: []});
        let newArr = NewArrayUtility(this.state.arraySize, this.state.minElementSize, this.state.maxElementSize);
        this.setState({animationArray: newArr}, () => {
            console.log("DONE NEW");
        });
    }

    bubbleSortHandler = () => {

        BubbleSortUtility(this.state.animationArray);
        console.log("DONE!!!!");
    }
    

    render() {

        // display list of boxes
        const boxList = this.state.animationArray.map((e, index) => {
            const boxHeight = e + 'px';
            return <div className='block' key={index} style={{height: boxHeight}}/>;
        });

        return (
            <div>
                
                <MenuBarComponent 
                    new={() => this.newArrayHandler()}
                    bubble={() => this.bubbleSortHandler()}
                    insertion={() => InsertionSortUtility()}
                    merge={() => MergeSortUtility()} />     
                
                
                <div className='container'>
                    {boxList}
                </div>

            </div>
        );
    }

}


export default SortingAnimation;