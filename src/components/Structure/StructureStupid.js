/* eslint-disable no-unused-vars */
import React from "react";
import { indicator } from "../SmallElems/SmallElems";
import { useParams } from "react-router-dom";
import { StructuresError } from "../../ducks/structures/selectors";
import { useSelector } from "react-redux";

export const StructureStupid = (props) => {
  const { children: item } = props;
  const { structureInfo } = indicator;
  const error = useSelector(StructuresError);
  const params = useParams();
  const empty = "Данный параметр не предусмотрен, Милорд";

  return (
    <>
      {item !== null && item !== error ? (
        <div key={"Item" + structureInfo} className={"item" + structureInfo}>
          {item.age ? (
            <p key={item.age + structureInfo}>Эпоха: {item.age}</p>
          ) : null}
          {item.build_time ? (
            <p key={item.build_time + structureInfo}>
              Время постройки: {item.build_time}
            </p>
          ) : null}
          {item.cost.Wood ? (
            <p key={item.cost + structureInfo}>
              Стоимость: {item.cost.Wood} древесины
            </p>
          ) : (
            <p>Стоимость: {empty} </p>
          )}
          {item.hit_points ? (
            <p id="liHit" key={item.hit_points + structureInfo}>
              Единицы здоровья: {item.hit_points}
            </p>
          ) : null}
          {item.pne_of_sight ? (
            <p key={item.pne_of_sight + structureInfo}>
              Обзор: {item.pne_of_sight}
            </p>
          ) : null}
          {item.armor ? (
            <p key={item.armor + structureInfo}>Броня: {item.armor}</p>
          ) : null}
          {item.special ? (
            <p key={item.special + structureInfo}>
              Примечание: {item.special.join()}
            </p>
          ) : null}
        </div>
      ) : (
        <div key={"Item" + structureInfo} className={"item" + structureInfo}>
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default StructureStupid;
