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
            <div>
                <table>
                <col id="col1" />
                <col id="col2" />
                <col id="col3" />
                <col id="col4" />
                <col id="col5" />
                    <tbody>
                        <tr className="header">
                            <td>Best</td>
                            <td>Average</td>
                            <td>Worst</td>
                            <td>Comparisons</td>
                            <td>Swaps</td>
                        </tr>
                        <tr>
                            <td>{props.bestCase}</td>
                            <td>{props.averageCase}</td>
                            <td>{props.worstCase}</td>
                            <td id='Comparisons'></td>
                            <td id='Swaps'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MenuBarComponent;