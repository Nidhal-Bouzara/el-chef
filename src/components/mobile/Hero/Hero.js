import React from 'react';
import debounce from 'lodash/debounce';

// Images
import chefMascot from '../../../images/chef-min.png';

// Styles
import heroStyle from './Hero.module.scss';

class Hero extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hasEnoughLength: false,
        }
    }

    onWindowResizeHorizontal = () => {
        this.setState({
            ...this.state,
            hasEnoughLength: window.innerHeight > 920,
        })
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            hasEnoughLength: window.innerHeight > 920,
        })
    }

    render (props) {
        // window.onresize = debounce(this.onWindowResizeHorizontal, 200);
        return (
            <section className={heroStyle.heroLayout}>
                <div className={heroStyle.heroContent}>
                    <h1 className={heroStyle.title}>El Chef</h1>
                    <h2 className={heroStyle.subTitle}>A dish for every kitchen</h2>
                    <p className={heroStyle.description}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>
                </div>
                <img
                    style={
                        !this.state.hasEnoughLength? {
                            top: '260px',
                            bottom: 'auto',
                        } : null
                    }
                    className={heroStyle.heroImage}
                    src={chefMascot}
                    alt="The Mascot of El Chef" />
                    <div></div>
            </section>
        );
    }
}

export default Hero;
