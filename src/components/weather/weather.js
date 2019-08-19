import React from 'react';
import './weather.css';

import People from './people';

class Weather extends React.Component {
    render() {
        return (
            <div className="weatherframe">
                <h1>This is 'people' app, routed!</h1>
                <p>New faces are loaded from the api by refreshing the page. Yes, it is that funny!</p>
                <People />
            </div>
        )
    }
}

export default Weather