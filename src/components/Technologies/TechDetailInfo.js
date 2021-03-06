/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  ACTION_GET_TECH_DETAIL_Succeed,
  ACTION_GET_TECH_DETAIL_FAILED,
} from "../../ducks/technologies/actions";
import {
  TechData,
  TechDataDetail,
  TechError,
  TechisFetching,
} from "../../ducks/technologies/selectors";
import { TechDetailStupid } from "./TechStupid";
import { indicator, ButtonClose } from "../SmallElems/SmallElems";

const TechDetailInfo = (props) => {
  const history = useHistory();
  const dataDetail = useSelector(TechDataDetail);
  const fetchStatus = useSelector(TechisFetching);
  const dispatches = useDispatch();
  const { techDetailInfo } = indicator;
  const EMPTY_FETCH = null;

  const handleLocation = () => {
    history.go(-1);
    dispatches(ACTION_GET_TECH_DETAIL_Succeed({}));
    dispatches(ACTION_GET_TECH_DETAIL_FAILED(EMPTY_FETCH));
  };

  return (
    <>
      {dataDetail[0] && !fetchStatus ? (
        <>
          <div className="skilsWrap">
            <ButtonClose
              handleLocation={handleLocation}
              idName={"SkilsBut"}
              indicator={techDetailInfo}
              selector={TechError}
              dataDetail={TechDataDetail}
            />

            {dataDetail.map((item, i) => {
              return (
                <ul key={"Skils" + techDetailInfo + i} id={`Skils ${i}`}>
                  <TechDetailStupid
                    item={item}
                    handleLocation={handleLocation}
                  />
                </ul>
              );
            })}
          </div>
        </>
      ) : dataDetail.id && !fetchStatus ? (
        <TechDetailStupid
          dataDetail={dataDetail}
          handleLocation={handleLocation}
        />
      ) : !fetchStatus ? (
        <ButtonClose
          handleLocation={handleLocation}
          idName={"SkilsBut"}
          indicator={techDetailInfo}
          selector={TechError}
          dataDetail={TechDataDetail}
        />
      ) : null}
    </>
  );
};

export default TechDetailInfo;
