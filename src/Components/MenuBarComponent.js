import React from 'react';
import '../Styles/MenuBarStyles.css';

const MenuBarComponent = (props) => {

    return (
        <div className='Menu'>
            <button onClick={props.bubble}>Bubble Sort</button>
            <button onClick={props.insertion}>Insertion Sort</button>
            <button onClick={props.merge}>Merge Sort</button>
        </div>
    );

}

export default MenuBarComponent;