import React from 'react'
import { connect, useSelector } from 'react-redux';

import { CivilisFetching } from '../../ducks/civil/selectors'
import { StructuresisFetching } from '../../ducks/structures/selectors'
import { TechisFetching } from '../../ducks/technologies/selectors'
import { UnitsisFetching } from '../../ducks/units/selectors'

const Footer = (props) => {
   const { smallFooter } = props
   const civilFetch = useSelector(CivilisFetching);
   const strucFetch = useSelector(StructuresisFetching);
   const technFetch = useSelector(TechisFetching);
   const unitsFetch = useSelector(UnitsisFetching);

   var accumFetch = {}
   Object.defineProperty(accumFetch, 'status', {
   get: function() { return civilFetch || strucFetch || technFetch || unitsFetch; },
   enumerable: true,
   configurable: false,
   });

   return (
      <>
         {!accumFetch.status ? smallFooter() : null}
      </>

   )
}

export default Footer

