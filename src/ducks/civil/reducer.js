import {
  GET_CIVIL_REQUESTED,
  GET_CIVIL_SUCCEED, 
  GET_CIVIL_FAILED,
  GET_CIVIL_REQUESTED_DETAIL,
  GET_CIVIL_DETAIL_SUCCEED,
  GET_CIVIL_DETAIL_FAILED,
  GET_ROUTE_MENU,
  GET_CIVIL_DETAIL_UNIT,
  GET_CIVIL_DETAIL_TECH,

} from './actions';

export const initialCivilState = {
  data: [],
  dataDetail: [],
  dataDetailUnit: [],
  dataDetailTech: [],
  error: null,
  url: '',
  isFetching: false,
  path: ''
};

export const civil = (state = initialCivilState, action) => {

  switch (action.type) {
    case GET_CIVIL_REQUESTED:
      return {
        ...state,
        url: action.payload,
        isFetching: true
      };
    case GET_CIVIL_SUCCEED:
      return {
        ...state,
        data: action.response,
        isFetching: false
      };
      
      case GET_CIVIL_FAILED:
        return {
        ...state,
        error: action.error,
        isFetching: true
      };

      case GET_CIVIL_REQUESTED_DETAIL:
        return {
          ...state,
          url: action.payloadDetail,
          isFetching: true
        };
      case GET_CIVIL_DETAIL_SUCCEED:
        return {
          ...state,
          dataDetail: action.response,
          isFetching: false
        };
          // 6 результат заносится в редьюсер - стор
        case GET_CIVIL_DETAIL_FAILED:
          return {
          ...state,
          error: action.error,
          isFetching: false
        };
      case GET_ROUTE_MENU:
        return {
        ...state,
        path: action.path,
      };
      case GET_CIVIL_DETAIL_UNIT:
        return {
          ...state,
          dataDetailUnit: action.response
        }
        case GET_CIVIL_DETAIL_TECH:
          return {
            ...state,
          dataDetailTech: action.response
          }  
      default:
        return { ...state };
  }
}; 
