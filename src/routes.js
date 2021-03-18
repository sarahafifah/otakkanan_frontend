import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard.js';
import About from './About.js';
import RoomDetail from './RoomDetail.js';
import RoomList from './RoomList.js';

function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/about" exact component={About}/>
                <Route path="/detail" exact component={RoomDetail}/>
                <Route path="/list" exact component={RoomList}/>
            </Switch>
        </BrowserRouter>
    );
}

export default routes;