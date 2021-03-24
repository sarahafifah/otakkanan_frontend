import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import RoomDetail from './pages/RoomDetail';
import RoomList from './pages/RoomList';
import Coba from './pages/Coba';
import CobaDetail from './pages/CobaDetail';

function routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/about' component={About}/>
                <Route path='/roomdetail' component={RoomDetail}/>
                <Route path='/roomlist' component={RoomList}/>
                <Route path='/coba' component={Coba}/>
                <Route path='/cobadetail/:room_id' component={CobaDetail}/>
            </Switch>
        </Router>
    );
}

export default routes;