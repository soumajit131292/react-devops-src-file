import React from 'react';
import Login from './Components/LoginComponent';
import './App.css';
import {BrowserRouter as  Router,Switch, Route} from 'react-router-dom'
import MyDashboard from './Components/MyDashboard'
import GetAllProductsComponent from './Components/GetAllProductsComponent'
import BuildDetails   from './Components/BuildDetails'
import AboutUsComponent from './Components/AboutUsComponent';
import TriggerComponent from './Components/TriggerComponent'
import Dropdown from './Components/Dropdown';
import RejectedData from './Components/RejectedData';
import Admin from './Components/Admin'
import ApprovedData from './Components/ApprovedData'
import UserRegistration from './Components/UserRegistration'
import BuildData from './Components/BuildData'
import Registration from './Components/Registration'
import Tablebuild from './Components/Tablebuild'
class App extends React.Component{
 
 
   render(){
     return (
        <Router>
           <Switch>
           {/* <Route path='/Dashboard'   component={DashboardComponent} /> */}
            <Route path='/Dashboard'   component={MyDashboard} />
            {/* <Route path='/admindashboard'   component={Admindashboard} /> */}
            {/* <Route  path='/' exact component={Login} /> */}
            <Route  path='/' exact component={Login} />
            <Route  path='Tablebuild' exact component={Tablebuild} />
            <Route path='/GetAllProductsComponent'  component={GetAllProductsComponent}/>
            <Route path='/BuildDetails'  component={BuildDetails}/>
            <Route path='/AboutUsComponent'  component={AboutUsComponent}/>
            <Route path='/TriggerComponent' component={TriggerComponent}/>
            <Route path='/RejectedData' component={RejectedData}/>
            <Route path='/ApprovedData' component={ApprovedData}/>
            <Route path='/Dropdown' component={Dropdown}/>
            <Route path='/Admin' component={Admin}/>
            <Route path='/UserRegistration' component={UserRegistration}/>
            <Route path='/BuildData' component={BuildData}/>
            <Route path='/Registration' component={Registration}/>
         </Switch>
           </Router>
     );
   }
}

export default App;