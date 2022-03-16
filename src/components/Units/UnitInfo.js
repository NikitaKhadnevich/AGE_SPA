/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useParams,
} from "react-router-dom";
import {
  ACTION_GET_UNIT_Requested,
  ACTION_GET_UNIT_DETAIL_Requested,
  ACTION_GET_ROUTE_UNIT_MENU,
} from "../../ducks/units/actions";
import { Unitsdata, Unitspath } from "../../ducks/units/selectors";
import UnitDetailInfo from "./UnitDetailInfo";
import { UnitsStupid } from "./UnitsStupid";
import { baseUrl, Urlpath } from "../Api/Api";
import { ButtonGoBack, indicator } from "../SmallElems/SmallElems";

const UnitInfo = (props) => {
  const history = useHistory();
  const params = useParams();
  const dataUnit = useSelector(Unitsdata);
  const dispatches = useDispatch();

  const detailUrl = useSelector(Unitspath);

  const { unitSkil } = indicator;
  const { units } = Urlpath;
  const urlCiv = props.match.url;
  const EMPTY_FETCH = null;

  const getFetch = (url, path, arr) => {
    if (!arr) {
      dispatches(ACTION_GET_UNIT_Requested(`${url}/${path}`));
    } else return null;
  };
  useEffect(() => {
    getFetch(baseUrl, units, dataUnit);
  }, []);

  const handleclick = () => {
    detailUrl
      ? dispatches(ACTION_GET_UNIT_DETAIL_Requested(detailUrl))
      : EMPTY_FETCH;
  };

  const handleLocation = () => {
    history.push("/units");
  };

  return (
    <>
      {dataUnit &&
        dataUnit.map((item, i) => {
          if (params.id === item.name + item.id) {
            return (
              <div
                key={"Wrapper" + unitSkil}
                className={`detailWrapper detailFor${unitSkil}`}
              >
                <ButtonGoBack
                  handleLocation={handleLocation}
                  idName={unitSkil}
                  indicatorKey={unitSkil}
                />

                <div key={"Items" + unitSkil} className={"items" + unitSkil}>
                  <div key={"ItemName" + unitSkil} className={`elementName`}>
                    <p key={params.id + unitSkil + "name"}>
                      Технология {item.name}
                    </p>
                  </div>
                  <div key={"Items" + unitSkil} className={"item" + unitSkil}>
                    <UnitsStupid key={"stupid" + unitSkil + i}>
                      {item}
                      {urlCiv}
                      {handleclick}
                      {units}
                    </UnitsStupid>
                  </div>
                </div>
                <Switch>
                  <Route path={`${urlCiv}/:id`} component={UnitDetailInfo} />
                </Switch>
              </div>
            );
          }
        })}
    </>
  );
};

export default UnitInfo;
