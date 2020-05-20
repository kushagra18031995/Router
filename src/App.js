import React from 'react'
import "./App.css"
import Nav from "./Nav"
import About from "./About"
import Shop from "./Shop"
import Inform from './Inform'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
 function App (){
   return (
     <Router>
     <div className ="App">
       <Nav/>
       <Switch>
       <Route path='/About' component ={About}/>
       <Route path ='/Shop' component={Shop}/>
      <Route path ='/Inform' component ={Inform}/> 
       </Switch>
     </div>
  </Router>
   )
 }
 
 export default App;