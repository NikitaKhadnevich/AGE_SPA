/* eslint-disable no-unused-vars */
import React from "react";
import { connect, useSelector } from "react-redux";

import { CivilisFetching } from "../../ducks/civil/selectors";
import { StructuresisFetching } from "../../ducks/structures/selectors";
import { TechisFetching } from "../../ducks/technologies/selectors";
import { UnitsisFetching } from "../../ducks/units/selectors";

const SpinnerHome = (props) => {
  const { smallElem } = props;
  const civilFetch = useSelector(CivilisFetching);
  const strucFetch = useSelector(StructuresisFetching);
  const technFetch = useSelector(TechisFetching);
  const unitsFetch = useSelector(UnitsisFetching);
  var accumFetch = {};
  Object.defineProperty(accumFetch, "status", {
    get: function () {
      return civilFetch || strucFetch || technFetch || unitsFetch;
    },
    enumerable: true,
    configurable: false,
  });

  return <>{accumFetch.status ? smallElem() : null}</>;
};

export default SpinnerHome;

/*******  Реализация таже, но на классах **********/
// class SpinnerHome extends React.Component {
//   get fetchingState() {
//     const { isFetchingCivil, isFetchingUnit, isFetchingStru, isFetchingTech } = this.props;
//     // Этот гет служит для нас своеобразным хранилищем - в сонст пропс может быть уйма стэйтов спинера разных компонентов,
//     return isFetchingCivil || isFetchingUnit || isFetchingStru || isFetchingTech
//     // в ретурн же прописывается через || isFetching
//   }
//   render() {
//     const fetchingState = this.fetchingState
//     console.log(`fetchingState`, fetchingState)
//     return fetchingState && <SpinerStupid />
//   }
// }

// export const mapStateToProps = ({ civil, units, structures, technologies }) => ({
//   isFetchingCivil: civil.isFetching,
//   isFetchingUnit: units.isFetching,
//   isFetchingStru: structures.isFetching,
//   isFetchingTech: technologies.isFetching
// });

// export default connect(mapStateToProps)(SpinnerHome);
