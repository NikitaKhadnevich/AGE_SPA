import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, useHistory, useParams} from 'react-router-dom'
import { ACTION_GET_CIVIL_Requested, ACTION_GET_CIVIL_REQUESTED_DETAIL , ACTION_GET_ROUTE_CIVIL_MENU, ACTION_GET_CIVIL_DETAIL_FAILED } from '../../ducks/civil/actions';
import { Civildata } from '../../ducks/civil/selectors'
import CivDetailInfo from './CivDetailInfo'
import  CivilInfoStupid  from './CivilStupid'
import  { baseUrl, Urlpath } from '../Api/Api'
import { ButtonGoBack, indicator } from '../SmallElems/SmallElems'


const CivInfo = (props) => {
   const history = useHistory()
   const params = useParams()
   const data = useSelector(Civildata)
   const  dispatches = useDispatch()
   const { civInfo } = indicator
   const { civilizations } = Urlpath
   const urlCiv = props.match.url

   const getFetch = (url, path, arr) => {
      if (!arr) {
      dispatches(ACTION_GET_CIVIL_Requested(`${url}/${path}`));
      } else return null
   }
   useEffect(() => {
   getFetch(baseUrl, civilizations, data)
   }, []);

   const handleclick = (e) => {
      const targetPath = e.target.dataset.path
      const targetId = e.target.id
      dispatches(ACTION_GET_ROUTE_CIVIL_MENU(targetId));
      targetPath ?
      dispatches(ACTION_GET_CIVIL_REQUESTED_DETAIL(targetPath)) : null
   }

   const handleLocation = () => {
      history.push('/civilizations');
   }

   return ( 
   <>
      {data && data.map((item, i) => {
         if (params.id === (item.name+item.id)) {
            return (
               <div key={'Wrapper'+civInfo}>
                  <ButtonGoBack handleLocation={handleLocation} idName={'goback'+civInfo} indicator={civInfo}/>
                  <div key={'Items'+civInfo+i} className={'items'+civInfo}>
                     <CivilInfoStupid key={'stupid'+civInfo+i}> 
                        {item}{urlCiv}{handleclick}{civilizations}
                     </CivilInfoStupid>
                  </div>
                  <Switch>
                     <Route path={`${urlCiv}/:id`} component={CivDetailInfo} />
                  </Switch>
               </div>
            )
         } 
      })}
   </>
   )
}

export default CivInfo


