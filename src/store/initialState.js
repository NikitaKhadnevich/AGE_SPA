import { initialCivilState } from '../ducks/civil/reducer';
import { initialUnitsState } from '../ducks/units/reducer';
// import { initialStruState } from '../ducks/structures/reducer';
import { initialStruState } from '../ducks/structures/ToolKitStructure';
import { initialTECHState } from '../ducks/technologies/reducer';

export const initialState = {
  civil: initialCivilState,
  units: initialUnitsState,
  structures: initialStruState,
  technologies: initialTECHState,
};
