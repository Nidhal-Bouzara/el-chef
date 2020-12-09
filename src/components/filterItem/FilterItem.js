import React, { useState } from 'react';

// Styling
import itemStyle from './FilterItem.module.scss';

const FilterItem = ({title, initCyclePosition}) => {
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
        currentCyclePosition: initCyclePosition,
        appliedStyle: {...cycleMap[initCyclePosition]}
    });
    const handleItemClick = () => {
        let updatedCyclePosition = cycleStates.indexOf(Cycle.currentCyclePosition) + 1;
        if (updatedCyclePosition > cycleStates.length - 1) {
            updatedCyclePosition = 0;
        }
        setCycle({
            currentCyclePosition: cycleStates[updatedCyclePosition],
            appliedStyle: {...cycleMap[cycleStates[updatedCyclePosition]]}
        });
    }
    return (
        <button
            className={Cycle.appliedStyle.button}
            onClick={handleItemClick}
        >
            <div
                className={Cycle.appliedStyle.symbol}
            ></div>
            <span className={itemStyle.spreadSelectedText}>{title}</span>
        </button>
    );
}

export default FilterItem;
