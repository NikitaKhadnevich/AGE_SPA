/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useHistory, useParams } from "react-router-dom";
import {
  ACTION_GET_TECH_Requested,
  ACTION_GET_TECH_REQUESTED_DETAIL,
} from "../../ducks/technologies/actions";
import {
  TechData,
  TechPath,
  TechDataDetail,
  TechError,
  TechisFetching,
} from "../../ducks/technologies/selectors";
import TechDetailInfo from "../Technologies/TechDetailInfo";
import TechInfoStupid from "./TechStupid";
import { baseUrl, Urlpath } from "../Api/Api";
import { indicator, ButtonGoBack } from "../SmallElems/SmallElems";

const TechInfo = (props) => {
  const history = useHistory();
  const params = useParams();
  const dispatches = useDispatch();

  const data = useSelector(TechData);
  const detailUrl = useSelector(TechPath);

  const { techInfo } = indicator;
  const { technologies } = Urlpath;
  const urlCiv = props.match.url;
  const EMPTY_FETCH = null;

  const getFetch = (url, path, arr) => {
    if (!arr) {
      dispatches(ACTION_GET_TECH_Requested(`${url}/${path}`));
    } else return null;
  };

  useEffect(() => {
    getFetch(baseUrl, technologies, data);
  }, []);

  const handleclick = (e) => {
    detailUrl
      ? dispatches(ACTION_GET_TECH_REQUESTED_DETAIL(detailUrl))
      : EMPTY_FETCH;
  };

  const handleLocation = () => {
    history.push("/technologies");
  };

  return (
    <>
      {data &&
        data.map((item, i) => {
          if (params.id === item.name + item.id) {
            return (
              <div
                key={"Wrapper" + techInfo}
                className={`detailWrapper detailFor${techInfo}`}
              >
                <ButtonGoBack
                  key={"button" + techInfo}
                  handleLocation={handleLocation}
                  idName={techInfo}
                  indicator={techInfo}
                />

                <div key={"Items" + techInfo} className={"items" + techInfo}>
                  <div key={"ItemName" + techInfo} className={`elementName`}>
                    <p key={params.id + techInfo + "name"}>
                      ???????????????????? {item.name}
                    </p>
                  </div>
                  <div key={"Items" + techInfo} className={"item" + techInfo}>
                    <TechInfoStupid key={"stupid" + techInfo + i}>
                      {item}
                      {urlCiv}
                      {handleclick}
                      {technologies}
                    </TechInfoStupid>
                  </div>
                </div>
                <Switch>
                  <Route path={`${urlCiv}/:id`} component={TechDetailInfo} />
                </Switch>
              </div>
            );
          }
        })}
    </>
  );
};

export default TechInfo;
