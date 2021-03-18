import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import RoomDetail from './RoomDetail';
import RoomList from './RoomList';

function routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/about' component={About}/>
                <Route path='/roomdetail' component={RoomDetail}/>
                <Route path='/roomlist' component={RoomList}/>
            </Switch>
        </Router>
    );
}

export default routes;