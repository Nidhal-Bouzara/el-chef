import React from 'react';
import ReactStars from 'react-rating-stars-component';

// Styling
import rdStyle from './RecipeDisplay.module.scss';

// Images
import dish from '../../../images/dish.png';
import add from '../../../images/add.svg';
import { useSelector } from 'react-redux';

const RecipeDisplay = () => {
    let screenHasEnoughWidth = useSelector(state => state.responsive.hasEnoughWidth);
    console.log(screenHasEnoughWidth);
    return (
            <div
                className={rdStyle.item}
                style={
                    screenHasEnoughWidth? null : {width: '54vw'}
                }    
            >
                <img src={dish} alt="dish" />
                <div className={rdStyle.content}>
                    <h1 className={rdStyle.title}>PROTEIN MEAT MEAL</h1>
                    <div className={rdStyle.ratingContainer}>
                        <span className={rdStyle.ratingTitle}>Rating:&emsp;</span>
                        <ReactStars
                            count={5}
                            value={3.5}
                            isHalf={true}
                            activeColor={"#FFF700"}
                            classNames={rdStyle.stars}
                        />
                    </div>
                    <div className={rdStyle.descriptionContainer}>
                        <p className={rdStyle.description}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam…
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
                            <div className={rdStyle.widgetContainer}>
                                <h2 className={rdStyle.widgetTitle}>Nutritional Value</h2>
                                <div className={rdStyle.widgetItems}>
                                    <div className={rdStyle.widgetItem}>
                                        <span className={rdStyle.widgetItemName}>Calories:</span>
                                        <span className={rdStyle.widgetItemValue}>584</span>
                                    </div>
                                    <div className={rdStyle.widgetItem}>
                                        <span className={rdStyle.widgetItemName}>Carbs:</span>
                                        <span className={rdStyle.widgetItemValue}>84g</span>
                                    </div>
                                    <div className={rdStyle.widgetItem}>
                                        <span className={rdStyle.widgetItemName}>Fat:</span>
                                        <span className={rdStyle.widgetItemValue}>20g</span>
                                    </div>
                                    <div className={rdStyle.widgetItem}>
                                        <span className={rdStyle.widgetItemName}>Protein:</span>
                                        <span className={rdStyle.widgetItemValue}>19g</span>
                                    </div>
                                </div>
                            </div>
                            <div className={rdStyle.widgetContainer}>
                                <h2 className={rdStyle.widgetTitle}>Ingredients</h2>
                                <div className={rdStyle.widgetItems}>
                                    <div className={rdStyle.widgetItem}>
                                        <span className={rdStyle.widgetItemName}>Meat, Potatoes, Sauce, Peas, Dirt, Gravel, Oil, Olives.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
    );
}

export default RecipeDisplay;
