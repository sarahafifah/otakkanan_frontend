import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import RoomDetail from './pages/RoomDetail';
import RoomList from './pages/RoomList';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingApproval from './pages/BookingApproval';
import CreateNewOffice from './pages/CreateNewOffice';
import RoomListOwner from './pages/RoomListOwner';

import CobaDetail from './pages/CobaDetail';
import Coba from './pages/Coba';

function routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/about' component={About}/>
                <Route path='/roomdetail/:room_id' component={RoomDetail}/>
                <Route path='/roomlist' component={RoomList}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/bookingapprove' component={BookingApproval}/>
                <Route path='/createoffice' component={CreateNewOffice}/>
                <Route path='/ownersroom' component={RoomListOwner}/>
                <Route path='/sign-in' exact component={Login}/>
                <Route path='/sign-up' exact component={Register}/>
                <Route path='/coba' component={Coba}/>
                <Route path='/cobadetail:room_id' component={CobaDetail}/>
            </Switch>
        </Router>
    );
}

export default routes;