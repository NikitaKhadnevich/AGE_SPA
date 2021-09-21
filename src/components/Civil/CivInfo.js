import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, useHistory, useParams} from 'react-router-dom'
import { ACTION_GET_CIVIL_Requested, ACTION_GET_CIVIL_REQUESTED_DETAIL , ACTION_GET_ROUTE_CIVIL_MENU, ACTION_GET_CIVIL_DETAIL_FAILED } from '../../ducks/civil/actions';
import { Civildata, CivildataDetailUnit, CivildataDetailTech, Civilpath } from '../../ducks/civil/selectors'
import CivDetailInfo from './CivDetailInfo'
import  CivilInfoStupid  from './CivilStupid'
import  { baseUrl, Urlpath } from '../Api/Api'
import { ButtonGoBack, indicator } from '../SmallElems/SmallElems'


const CivInfo = (props) => {
   const history = useHistory()
   const params = useParams()
   const  dispatches = useDispatch()

   const data = useSelector(Civildata)
   const dataDetailUnit = useSelector(CivildataDetailUnit)
   const dataDetailTech = useSelector(CivildataDetailTech)

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
      targetPath && targetId === 'unique_unit' ?
      dispatches(ACTION_GET_CIVIL_REQUESTED_DETAIL(dataDetailUnit[targetPath])) :
      targetPath && targetId === 'unique_tech' ?
      dispatches(ACTION_GET_CIVIL_REQUESTED_DETAIL(dataDetailTech[targetPath])) : null
   }
         //^^^^
         //Сначала была такая логика
         // const targetUnit = data[e.target.id-1].unique_unit
         // const targetTech = data[e.target.id-1].unique_tech
         // (targetPath == 'unique_tech' && targetTech.length > 0) ?
         // dispatches(ACTION_GET_CIVIL_REQUESTED_DETAIL(targetPath)) : null
         // dispatches(ACTION_GET_CIVIL_DETAIL_FAILED('Данный юнит не существует'))
         // где id = это порядковый номер элемента массива
         //Затем я заменил на CivilInfoStupid map и потребность в диспатче еррора отпала, ибо если нет unique, то она просто не рисует кнопки
         
   //1. Пройтись по масиву и забрать уникальное значение
   //2ю задиспатчить его уже в имеющийся новый массив

   // вставлю линку даты и создам новый стор для юниов 
   // путем распаршивания ее через джоин(например)
   // а уже потом у меня будет линковаться все как нужно
   const handleLocation = () => {
      history.push('/civilizations');
   }

   /*дата в params берется из link=to элемента */

   return ( 
      <Router>
      {data && data.map((item, i) => {
         if (params.id === (item.name+item.id)) {
            return (
               <>
               <div key={'Wrapper'+civInfo} className={`detailWrapper detailFor${civInfo}`}>
                  <ButtonGoBack 
                     handleLocation={handleLocation}
                     idName={civInfo}
                     indicator={civInfo}/>

                  <div key={'Items'+civInfo} className={'items'+civInfo} >
                     <div key={'ItemName'+civInfo} className={`elementName`}>
                        <p key={params.id+civInfo+'name'}>Сооружение {item.name}</p>
                     </div>
                     <div key={'Items'+civInfo+i} className={'item'+civInfo}>
                        <CivilInfoStupid key={'stupid'+civInfo+i}> 
                           {item}{urlCiv}{handleclick}{civilizations}
                        </CivilInfoStupid>
                     </div>
                  </div>
                  <Switch>
                     <Route path={`${urlCiv}/:id`} component={CivDetailInfo} />
                  </Switch>
               </div>
               </>
            )
         } 
      })}
      </Router>
   )
}

export default CivInfo


