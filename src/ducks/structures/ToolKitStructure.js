/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice } from "@reduxjs/toolkit";
import { errorMes } from "../../components/Api/Api";
// export { initialStruState } from './reducer'

export const initialStruState = {
  dataSTRU: [],
  dataSTRUDetail: [],
  error: null,
  url: "",
  isFetching: false,
  path: "",
};

export const structures = createSlice({
  name: "structure-reducer",
  initialState: initialStruState,
  reducers: {
    GET_STRU_REQUESTED: (state, action) => {
      state, (state.url = action.payload), (state.isFetching = true);
    },
    GET_STRU_SUCCEED: (state, action) => {
      state,
        (state.dataSTRU = action.payload.structures),
        (state.isFetching = false),
        (state.url = "");
    },
    GET_STRU_FAILED: (state, action) => {
      state,
        (state.error = errorMes),
        (state.isFetching = false),
        (state.url = "");
    },
  },
});

export default structures.reducer;
export const { GET_STRU_REQUESTED, GET_STRU_SUCCEED, GET_STRU_FAILED } =
  structures.actions;
