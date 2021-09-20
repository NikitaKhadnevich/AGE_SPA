import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { indicator, ButtonClose} from '../SmallElems/SmallElems'
const { units, unitSkil, unitDetailInfo, unitsStupid } = indicator
import { Unitserror, UnitsdataUnitDetail } from '../../ducks/units/selectors'
import { useDispatch } from 'react-redux';
import { ACTION_GET_ROUTE_UNIT_MENU } from '../../ducks/units/actions'


export const UnitsStupid = (props) => {
   const { children: [item, urlCiv, handleclick,  units] } = props
   const dispatches = useDispatch()

   useEffect(() => {
      dispatches(ACTION_GET_ROUTE_UNIT_MENU(item.created_in))
   }, [item.created_in])

   return (
      <>
      <p key={item.name+unitSkil}>Имя: {item.name}</p>
      <p key={item.accuracy+unitSkil}>Точность: {item.accuracy}</p>
      { item.reload_time ? <p key={item.reload_time+unitSkil}>Время перезарядки: {item.reload_time} сек.</p>: null }
      <p key={item.movement_rate+unitSkil+'movement'}>Скорость передвижения: {item.movement_rate}</p>
      <p key={item.armor+unitSkil+'armor'}>Броня: {item.armor}</p>
      <p key={item.hit_points+unitSkil+'hit'}>Запас здоровья: {item.hit_points}</p>
      { item.range ? <p key={item.range+unitSkil+'range'}>Дистанция атаки: {item.range}</p> : null } 
      { item.build_time ? <p key={item.build_time+unitSkil+'build_time'}>Время постройки: {item.build_time}</p> : null }      
      <p key={item.age+unitSkil}>Тип: {item.age}</p>
      <p key={item.description+unitSkil}>Отличительная особенность: {item.description}</p>
      { item.cost.Wood ? <p key={item.cost.Wood+unitSkil+'Wood'}>Стоимость в древесине: {item.cost.Wood} единиц</p> : null }
      { item.cost.Food ? <p key={item.cost.Food+unitSkil+'Food'}>Затраты на создание в еде: {item.cost.Food} единиц</p> : null }      
      { item.cost.Gold ? <p key={item.cost.Gold+unitSkil+'Gold'}>Стоимость в золоте: {item.cost.Gold} монет</p> : null }
      { item.cost.info ? <p key={item.cost.Gold+unitSkil}>Стоимость: {item.cost.info} </p> : null }
      { item.created_in.includes('https' || 'http') ?  
         <div key={item.name+unitSkil+'building'} className={units+'ItemDetail'}> 
            <Link to={`${urlCiv}/building`} id={item.id} onClick={handleclick}>Мануфакторум Юнита {item.name}</Link> 
         </div> : 
      <div key={'UnitsItemNoTech'+unitsStupid} className={units+'NoItem'}>
         <p>У цивилизации нет уникальных юнитов</p>
      </div>
      }
      </>
   )
};

export const  UnitDetailStupid = (props) => {
   const  { item, dataUnitDetail, handleLocation } = props
   const { unitDetailInfo } = indicator
   return (
      <>
         {item ?
            <> 
               <li>Имя: {item.name}</li>
               <li>Фракция: {item.age}</li>
               <li>Время постройки: {item.build_time}</li>
               <li>Стоимость постройки: {item.cost.Wood} древесины</li>
               <li>Защита: {item.armor}</li>
               <li id='liHit'>Единицы здоровья: {item.hit_points}</li>
            </> : 
         dataUnitDetail ?
            <>
               <ul key={'Skils'+unitDetailInfo} id='Skils'>
                  <ButtonClose handleLocation={handleLocation} idName={'Skils'} indicator={unitDetailInfo} selector={Unitserror} detailData={UnitsdataUnitDetail}/>
                  <li>Имя: {dataUnitDetail.name}</li>
                  <li>Фракция: {dataUnitDetail.age}</li>
                  <li>Время постройки: {dataUnitDetail.build_time}</li>
                  <li>Стоимость постройки: {dataUnitDetail.cost.Wood} древесины</li>
                  <li>Защита: {dataUnitDetail.armor}</li>
                  <li id='liHit'>Единицы здоровья: {dataUnitDetail.hit_points}</li>
               </ul>   
            </> : 
            <ul key={'Skils'+unitDetailInfo} id='Skils'>
               <li>У цивилизации нет юнитов</li>
            </ul>
         }
      </>
   )
}

export default UnitsStupid




