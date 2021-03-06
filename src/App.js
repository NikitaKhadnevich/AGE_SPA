import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import history from './history';

import Home from './components/Home/Home';

import Civil from './components/Civil/Civil';
import CivInfo from './components/Civil/CivInfo';

import Units from './components/Units/Units';
import UnitInfo from './components/Units/UnitInfo';

import Structure from './components/Structure/Structure';
import StructureInfo from './components/Structure/StructureInfo';

import Technologies from './components/Technologies/Technologies'
import TechInfo from './components/Technologies/TechInfo'


const Posts = () => {
  return (
    <>
      <Router>
        <div className='posts'>
          <div className='navigation'>
            <Link to='/'>К истокам</Link>
            <Link to='/civilizations' data-path='/civilizations'>Цивилизации</Link>
            <Link to='/units'data-path='/units'>Юниты</Link>
            <Link to='/structures'data-path='/structures'>Сооружения</Link>
            <Link to='/technologies'data-path='/technologies'>Технологии</Link>
          </div>
          <Switch> 
              <Route exact path='/' component={Home} />

              <Route exact path='/civilizations' component={Civil} />
              <Route path='/civilizations/:id/' component={CivInfo} />
  
              <Route exact path='/units' component={Units} />
              <Route path='/units/:id' component={UnitInfo} />

              <Route exact path='/structures' component={Structure} />
              <Route exact path='/structures/:id' component={StructureInfo} /> 

              <Route exact path='/technologies' component={Technologies} />
              <Route path='/technologies/:id/' component={TechInfo} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Posts;
