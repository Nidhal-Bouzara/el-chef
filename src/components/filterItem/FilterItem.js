import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCyclePosition } from '../../redux/app/recipeSearch';

// Styling
import itemStyle from './FilterItem.module.scss';

const FilterItem = ({id, title, cyclePosition}) => {

    const dispatch = useDispatch();
    const filterList = useSelector(state => state.recipeSearch.filterList);
    const cycleMap = {
        neutral: {
            button: itemStyle.spreadButton + ' ' + itemStyle.spreadNeutral,
            symbol: itemStyle.spreadPlus + ' ' + itemStyle.spreadPlusNeutral
        },
        selected: {
            button: itemStyle.spreadButton + ' ' + itemStyle.spreadSelected,
            symbol: itemStyle.spreadSelectedCheckmark
        },
        removed: {
            button: itemStyle.spreadButton + ' ' + itemStyle.spreadRemoved,
            symbol: itemStyle.spreadPlus + ' ' + itemStyle.spreadPlusRemoved
        }
    }
    const cycleStates = ['neutral', 'selected', 'removed'];
    const [Cycle, setCycle] = useState({
        appliedStyle: {...cycleMap[cyclePosition]}
    });
    const handleItemClick = (e) => {
        
        console.log(filterList);
        let itemIndex = filterList.findIndex(item => parseInt(item.id) === parseInt(e.currentTarget.dataset.id));
        console.log(itemIndex, filterList, filterList[itemIndex]);        
        let updatedCyclePosition = cycleStates.indexOf(filterList[itemIndex].cyclePosition) + 1;
        if (updatedCyclePosition > cycleStates.length - 1) {
            updatedCyclePosition = 0;
        }
        // console.log(e.currentTarget, '&&', e.currentTarget.dataset, '&&', parseInt(e.currentTarget.dataset.id), '&&', e.currentTarget.dataset.id);
        dispatch(
            updateCyclePosition({
                    itemIndex: itemIndex,
                    newCycle: cycleStates[updatedCyclePosition]
            })
        )
        setCycle({
            appliedStyle: {...cycleMap[cycleStates[updatedCyclePosition]]}
        });
    }
    return (
        <button
            className={Cycle.appliedStyle.button}
            onClick={handleItemClick}
            data-id={id}
        >
            <div
                className={Cycle.appliedStyle.symbol}
            ></div>
            <span className={itemStyle.spreadSelectedText}>{title}</span>
        </button>
    );
}

export default FilterItem;
