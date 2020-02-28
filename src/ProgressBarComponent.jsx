import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    styles: PropTypes.object
}

const defaultProps = {
    styles: {
        barContainerStyle: {
            width: '200px',
            height: '30px',
            margin: '40px',
            backgroundColor: 'grey'  
        },
        barStyle: {
            backgroundColor: 'green',
            height: '100%',
            width: '0%'
        }
    }
}

class ProgressBarComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.barRef = React.createRef();
        const SECONDS = '2'
    }

    componentDidMount()
    {
        this.fillBar(5);
    }
    
    fillBar = (seconds=this.SECONDS) => {
        let divObject = this.barRef.current.style
        let percent = 0;
        const interval = setInterval( () => {
            divObject.width = percent + '%';
            percent ++;
            if(percent > 100) {
                clearInterval(interval);
            }    
        }, (seconds * 1000) / 100)
    }

    render() {
        const styles = this.props.styles || {};
        return (
            <div>
                <div style={styles.barContainerStyle}>
                    <div style={styles.barStyle} ref={this.barRef}>
                    </div>
                </div>
            </div>
        );
    }
}

ProgressBarComponent.propTypes = propTypes;
ProgressBarComponent.defaultProps = defaultProps;

export default ProgressBarComponent;