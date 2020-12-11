import React, { useState, useCallback } from 'react';
import Axios from 'axios';
import debounce from 'lodash/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterList } from '../../redux/app/recipeSearch';

// Styles
import spreadStyle from './DiscoverSpread.module.scss';

// Components
import FilterItem from '../filterItem/FilterItem';

const DiscoverSpread = () => {
    const [IngredientsValue, setIngredientsValue] = useState('');
    const [Suggestions, setSuggestions] = useState([]);
    const filterList = useSelector(state => state.recipeSearch.filterList);
    const dispatch = useDispatch();

    // When the user submits an ingredients search query this sends a req to the api
    // and makes the first item in the returned array a filter item
    const handleIngredientsSearch = async () => {
        if (IngredientsValue.trim() === '') {
            return;
        }
        const response = await Axios.get('https://api.spoonacular.com/food/ingredients/search', {
            params: {
                query: IngredientsValue,
                apiKey: '6ff4debfae3c409a891e3d5605d8d9dc'
            }
        })
        let Item = response.data.results[0]
        dispatch(
            setFilterList({
                id: Item.id,
                name: Item.name,
                cyclePosition: 'selected'
            })
        )
        setSuggestions([]);
        setIngredientsValue('');
    }
    
    // Responsible for transforming a suggestion drop-down item click into a filter item
    const handleSuggestionClick = (e) => {
        dispatch(
            setFilterList({
                id: e.target.dataset.id,
                name: e.target.dataset.name,
                cyclePosition: 'selected'
            })
        )
        setSuggestions([]);
        setIngredientsValue('');
    }

    // Responsible for sending Axios req on search query change and making the data into suggestion items
    const handleSearchChange = async (e) => {
        if (e.target.value.trim() === '') {
            setSuggestions([]);
            return;
        }
        const response = await Axios.get('https://api.spoonacular.com/food/ingredients/search', {
            params: {
                query: e.target.value,
                apiKey: '6ff4debfae3c409a891e3d5605d8d9dc'
            }
        })
        setSuggestions(
            response.data.results.map((item) => {
                return(
                    <li 
                        key={item.id}
                        data-id={item.id}
                        data-name={item.name}
                        onClick={handleSuggestionClick}    
                    >
                            {item.name}
                    </li>
                )
            })
        )
    }
    const debouncedHandleSearchChanged = useCallback(debounce(handleSearchChange, 400), []);
    function handleInputChanged(e) {
        debouncedHandleSearchChanged(e)
        setIngredientsValue(e.target.value.trim(), debouncedHandleSearchChanged)
    }
    return (
        <div className={spreadStyle.spreadContainer}>
            <div className={spreadStyle.spreadSearch}>
                <label className={spreadStyle.spreadLabel}>Ingredients:</label>
                <div className={spreadStyle.spreadFormContainer}>
                    <form
                        method="GET"
                        onSubmit={(e) => {
                            handleIngredientsSearch();
                            e.preventDefault();
                        }}
                    >
                        <div className={spreadStyle.spreadInputContainer}>
                            <input
                                type="text"
                                className={spreadStyle.spreadInput}
                                name="ingredients"
                                id="ingredients"
                                value={IngredientsValue}
                                onChange={handleInputChanged}
                            />
                            <div className={spreadStyle.spreadDecoration}></div>
                        </div>
                    </form>
                    {
                        (Suggestions.length!==0) && (
                            <ul className={spreadStyle.suggestions}>
                                {Suggestions}
                            </ul>
                        )
                    }
                </div>
            </div>
            <div className={spreadStyle.spreadList}>
                {   filterList.length > 0 ?
                    filterList.map((item) => {
                        return (
                            <FilterItem
                                key={item.id}
                                id={item.id}
                                title={item.name}
                                cyclePosition={item.cyclePosition}
                            />
                        )
                    }) : (<div style={{fontFamily: 'Work Sans'}}>^^^ Add Ingredients by searching above (If it doesn't it means the El-Chef API key has exceeded the daily quota)</div>)
                }
            </div>
        </div>
    );
}

export default DiscoverSpread;
