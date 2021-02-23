import React from 'react';
import ReactStars from 'react-rating-stars-component';
import parse from 'html-react-parser';

// Styling
import rdStyle from './RecipeDisplay.module.scss';

// Images
import add from '../../../images/add.svg';
import { useSelector } from 'react-redux';

const RecipeDisplay = ({title, imageUrl, rating, summary, extendedIngredients, vegetarian, readyInMinutes, dishTypes}) => {
    let screenHasEnoughWidth = useSelector(state => state.responsive.hasEnoughWidth);
    console.log(rating);
    return (
            <div
                className={rdStyle.item}
                style={
                    screenHasEnoughWidth? null : {width: '54vw'}
                }    
            >
                <img src={imageUrl} alt="dish" />
                <div className={rdStyle.content}>
                    <h1 className={rdStyle.title}>{title}</h1>
                    <div className={rdStyle.ratingContainer}>
{                        <span className={rdStyle.ratingTitle}>Rating:&emsp;</span>
}                        <ReactStars
                            count={5}
                            value={rating}
                            isHalf={true}
                            activeColor={"#FFF700"}
                            classNames={rdStyle.stars}
                        />
                    </div>
                    <div className={rdStyle.descriptionContainer}>
                        <p className={rdStyle.description}>
                            {parse(summary)}
                        </p>
                    </div>
                    <div className={rdStyle.buttons}>
                        <button className={rdStyle.addButton}>
                            <img src={add} alt="" className={rdStyle.buttonImage} />
                            Add to My Recipes
                        </button>
                        <button className={rdStyle.learnButton}>Learn More</button>
                    </div>
                </div>
                {
                    screenHasEnoughWidth? (
                        <div className={rdStyle.widget}>
                            <div className={rdStyle.widgetContainerInfo}>
                                <h2 className={rdStyle.widgetTitle}>Nutritional Value</h2>
                                <div className={rdStyle.widgetItems}>
                                    <div className={rdStyle.widgetItem}>
                                        <span className={rdStyle.widgetItemName}>Vegetarian dish:</span>&nbsp;
                                        <span className={rdStyle.widgetItemValue}>{vegetarian? 'Yes' : 'No'}</span>
                                    </div>
                                    <div className={rdStyle.widgetItem}>
                                        <span className={rdStyle.widgetItemName}>How many minutes to prepare:</span>&nbsp;
                                        <span className={rdStyle.widgetItemValue}>{readyInMinutes}</span>
                                    </div>
                                    <div className={rdStyle.widgetItem}>
                                        <span className={rdStyle.widgetItemName}>What is this dish:</span>&nbsp;
                                        <span className={rdStyle.widgetItemValue}>{
                                            dishTypes.join(', ')
                                        }</span>
                                    </div>
                                </div>
                            </div>
                            <div className={rdStyle.widgetContainerIngredients}>
                                <h2 className={rdStyle.widgetTitle}>Ingredients</h2>
                                <div className={rdStyle.widgetItems}>
                                    {
                                        extendedIngredients.map(item => {
                                            return (
                                                <div className={rdStyle.widgetItem}>
                                                    <span className={rdStyle.widgetItemName}>
                                                        {item.name}
                                                    </span>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
    );
}

export default RecipeDisplay;
