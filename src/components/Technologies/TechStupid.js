import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { indicator, ButtonClose } from '../SmallElems/SmallElems'
const { technology, techInfo, techDetailInfo, techStupid } = indicator
import { TechError, TechDataDetail } from '../../ducks/technologies/selectors'
import { useDispatch } from 'react-redux';
import { ACTION_GET_ROUTE_TECH_MENU } from '../../ducks/technologies/actions'


const TechInfoStupid = (props) => {
   const { children: [item, urlCiv, handleclick, technologies] } = props  
   const dispatches = useDispatch()
   
   useEffect(() => {
      dispatches(ACTION_GET_ROUTE_TECH_MENU(item.develops_in))
   }, [item.develops_in])

   return (
      <>
         <p>Имя юнита: {item.name}</p>
         <p>Время постоки: {item.build_time}</p>
         <p>Тип: {item.age}</p>
         <p>Отличительная особенность: {item.description}</p>
         <p>Распостранение: {item.expansion}</p>
         <p>Стоимость Юнита: {item.cost.Wood} древесины, {item.cost.Gold} золота</p>
         {item.develops_in.length > 2 ? 
            <div key={'TechItem'+techStupid} className={technologies+'ItemDetail'}>
               <Link to={`${urlCiv}/tech`} id={item.id} onClick={handleclick} >Мануфакторум Юнита {item.name}</Link> 
            </div> : 
               <div key={'TechItemNoTech'+techStupid} className={technologies+'NoItem'}>
                  <p>У цивилизации нет уникальных технологий</p>
               </div>
         }  
      </>
   )
};

export const  TechDetailStupid = (props) => {
   const  { item, dataDetail, handleLocation } = props

   return (
      <>
         {item ?
            <> 
               <li>Имя: {item.name}</li>
               <li>Фракция: {item.age}</li>
               <li>Стоимость постройки: {item.cost?.Wood} древесины</li>
               <li>Защита: {item.armor}</li>
               <li>Время постройки: {item.build_time}</li>
               <li>
                  <ul> Необходимые ресурсы:
                     { item.cost.Wood ? <li>{item.cost.Wood} древесины </li> : <li>0 древесины</li> }
                     { item.cost.Gold ? <li>{item.cost.Gold} золота </li> : <li>0 золота</li> }
                  </ul>
               </li>
               <li id='liHit' >Единицы здоровья: {item.hit_points}</li>
            </> : 
         dataDetail ?
            <>
               <ul key={'skils'+techDetailInfo} id={'skils'+techDetailInfo}>
                  <ButtonClose
                     handleLocation={handleLocation}
                     idName={'SkilsBut'}
                     indicator={techDetailInfo}
                     selector={TechError}
                     detailData={TechDataDetail}/>
                  <li>Имя: {dataDetail.name}</li>
                  <li>Фракция: {dataDetail.age}</li>
                  <li>Время постройки: {dataDetail.build_time}</li>
                  <li>
                     <ul> Необходимые ресурсы:
                        { dataDetail.cost.Wood ? <li>{dataDetail.cost.Wood} древесины</li> : <li> -  древесины</li> }
                        { dataDetail.cost.Gold ? <li>{dataDetail.cost.Gold} золота</li> : <li> -  золота</li> }
                     </ul>
                  </li>
                  <li>Защита: {dataDetail.armor}</li>
                  <li id='liHit' >Единицы здоровья: {dataDetail.hit_points}</li>
               </ul>   
            </> : 
            <ul key={'Skils'+techDetailInfo} id='Skils'>
               <li>У цивилизации нет юнитов</li>
            </ul>   
         }
      </>
   )
}

export default TechInfoStupid