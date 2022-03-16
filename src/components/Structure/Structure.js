/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_STRU_Requested } from "../../ducks/structures/actions"; // Для  ducks
import { GET_STRU_REQUESTED } from "../../ducks/structures/ToolKitStructure";
import { StructuresData } from "../../ducks/structures/selectors";
import { baseUrl, Urlpath } from "../Api/Api";
import { ListAge, indicator, SortStructure } from "../SmallElems/SmallElems";

const Structures = (props) => {
  const { structures } = Urlpath;
  const data = useSelector(StructuresData);
  const dispatches = useDispatch();
  const { structure } = indicator;
  const propsUrl = props.match.url;
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
    getFetch(baseUrl, structures, data);
  }, [structures]);

  return (
    <ListAge
      data={data}
      blockName={structure}
      elem={structures}
      propsUrl={propsUrl}
      SortStructure={SortStructure}
    />
  );
};

export default Structures;
