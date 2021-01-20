import React from 'react';
import '../Styles/MenuBarStyles.css';

// component for menu bar
const MenuBarComponent = (props) => {
    return (
        <div className='Menu'>
            <button disabled={props.isNewButtonDisable} onClick={props.new}>New Array</button>
            <button disabled={props.isSortButtonDisable} onClick={props.bubble} style={{backgroundColor: props.bubbleButtonSelectedColor}}>Bubble Sort</button>
            <button disabled={props.isSortButtonDisable} onClick={props.insertion} style={{backgroundColor: props.insertionButtonSelectedColor}}>Insertion Sort</button>
            <button disabled={props.isSortButtonDisable} onClick={props.selection} style={{backgroundColor: props.selectionButtonSelectedColor}}>Selection Sort</button>
            <button disabled={props.isSortButtonDisable} onClick={props.merge} style={{backgroundColor: props.mergeButtonSelectedColor}}>Merge Sort</button>
            <button disabled={props.isSortButtonDisable} onClick={props.quick} style={{backgroundColor: props.quickButtonSelectedColor}}>Quick Sort</button>
            <div>
                <table>
                    <colgroup>
                        <col id="col1" />
                        <col id="col2" />
                        <col id="col3" />
                        <col id="col4" />
                        <col id="col5" />
                    </colgroup>
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