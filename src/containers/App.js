import React, { Component } from 'react';
import Routes from './routes';
import { withRouter } from 'react-router-dom';
import 'semantic-ui-less/semantic.less';
class App extends Component {
    

    render() {
        return (
            <div>
                <Routes/>
            </div>
        );
    }
}

export default App;