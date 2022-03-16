/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { ACTION_GET_STRU_Requested } from "../../ducks/structures/actions";
// Для ducks
import { GET_STRU_REQUESTED } from "../../ducks/structures/ToolKitStructure";
import {
  StructuresData,
  StructuresError,
  StructuresisFetching,
} from "../../ducks/structures/selectors";
import { baseUrl, Urlpath } from "../Api/Api";
import { ButtonGoBack, indicator } from "../SmallElems/SmallElems";
import { StructureStupid } from "../Structure/StructureStupid";

const StructureInfo = (props) => {
  const history = useHistory();
  const params = useParams();
  const { structures } = Urlpath;
  const dataStru = useSelector(StructuresData);
  const error = useSelector(StructuresError);
  const isFetch = useSelector(StructuresisFetching);
  const dispatches = useDispatch();
  const { structureInfo } = indicator;
  const EMPTY_FETCH = null;

  const getFetch = useCallback(
    (url, path, arr) => {
      if (arr.length < 1) {
        //dispatches(ACTION_GET_STRU_Requested(`${url}/${path}`)); // для ducks
        dispatches(GET_STRU_REQUESTED(`${url}/${path}`));
      } else EMPTY_FETCH;
    },
    [structures]
  );

  useEffect(() => {
    getFetch(baseUrl, structures, dataStru);
  }, [structures]);

  const handleLocation = () => {
    history.push("/structures");
  };

  return (
    <>
      {dataStru.length > 0 && !error && !isFetch ? (
        <div
          className={`detailWrapper detailFor${structureInfo}`}
          key={"Wrapper" + structureInfo}
        >
          <ButtonGoBack
            key={"Goback" + structureInfo}
            handleLocation={handleLocation}
            idName={structureInfo}
            indicator={structureInfo}
          />

          <div
            key={"Items" + structureInfo}
            className={"items" + structureInfo}
          >
            <div key={"ItemName" + structureInfo} className={`elementName`}>
              <p key={params.id + structureInfo + "name"}>
                Сооружение {params.id}
              </p>
            </div>
            {dataStru
              ? dataStru.map((item, i) => {
                  if (params.id === item.name) {
                    return (
                      <>
                        <StructureStupid key={"stupid" + structureInfo + i}>
                          {item}
                        </StructureStupid>
                      </>
                    );
                  }
                })
              : null}
          </div>
        </div>
      ) : (
        <>
          {!isFetch && error ? (
            <div
              className={"Wrapper" + structureInfo}
              key={"Wrapper" + structureInfo}
            >
              <ButtonGoBack
                key={"Goback" + structureInfo}
                handleLocation={handleLocation}
                idName={"goback" + structureInfo}
                indicator={structureInfo}
              />
              <div
                key={"Items" + structureInfo}
                className={"items" + structureInfo}
              >
                <StructureStupid key={"stupid" + error}>
                  {error}
                </StructureStupid>
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default StructureInfo;
