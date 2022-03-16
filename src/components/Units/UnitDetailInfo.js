import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  ACTION_GET_UNITS_DETAIL_Succeed,
  ACTION_GET_UNITS_DETAIL_FAILED,
} from "../../ducks/units/actions";
import {
  UnitsdataUnitDetail,
  UnitsisFetching,
  Unitserror,
} from "../../ducks/units/selectors";
import { UnitDetailStupid } from "../Units/UnitsStupid";
import { indicator, ButtonClose } from "../SmallElems/SmallElems";

const UnitDetailInfo = (props) => {
  const history = useHistory();
  const dataUnitDetail = useSelector(UnitsdataUnitDetail);
  const fetchStatus = useSelector(UnitsisFetching);
  const dispatches = useDispatch();
  const { unitDetailInfo } = indicator;
  const EMPTY_FETCH = null;

  const handleLocation = () => {
    history.go(-1);
    dispatches(ACTION_GET_UNITS_DETAIL_Succeed([]));
    dispatches(ACTION_GET_UNITS_DETAIL_FAILED(EMPTY_FETCH));
  };

  return (
    <>
      {dataUnitDetail[0] && !fetchStatus ? (
        <>
          <div key={"skils" + unitDetailInfo} id={"skils" + unitDetailInfo}>
            <ButtonClose
              handleLocation={handleLocation}
              idName={"SkilsBut"}
              indicator={unitDetailInfo}
              selector={Unitserror}
              detailData={UnitsdataUnitDetail}
            />

            {dataUnitDetail.map((item, i) => {
              return (
                <ul key={"Skils" + unitDetailInfo + i} id={`Skils ${i}`}>
                  <UnitDetailStupid
                    item={item}
                    handleLocation={handleLocation}
                  />
                </ul>
              );
            })}
          </div>
        </>
      ) : dataUnitDetail.id && !fetchStatus ? (
        <UnitDetailStupid
          dataUnitDetail={dataUnitDetail}
          handleLocation={handleLocation}
        />
      ) : !fetchStatus ? (
        <ButtonClose
          handleLocation={handleLocation}
          idName={"SkilsBut"}
          indicator={unitDetailInfo}
          selector={Unitserror}
          detailData={UnitsdataUnitDetail}
        />
      ) : null}
    </>
  );
};

export default UnitDetailInfo;
