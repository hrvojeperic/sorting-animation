import React from 'react';
import SortingAnimation from './SortingAnimation.js';
import '../Styles/MenuBarStyles.css';

const MenuBarComponent = (props) => {
    return (
        <div className='Menu'>
            <button disabled={props.isNewButtonDisable} onClick={props.new}>New Array</button>
            <button disabled={props.isSortButtonDisable} onClick={props.bubble}>Bubble Sort</button>
            <button disabled={props.isSortButtonDisable} onClick={props.insertion}>Insertion Sort</button>
            <button disabled={props.isSortButtonDisable} onClick={props.selection}>Selection Sort</button>
            <button disabled={props.isSortButtonDisable} onClick={props.merge}>Merge Sort</button>
            <button disabled={props.isSortButtonDisable} onClick={props.quick}>Quick Sort</button>
        </div>
    );
}

export default MenuBarComponent;