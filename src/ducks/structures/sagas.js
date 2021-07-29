import { put, takeLatest } from 'redux-saga/effects';
import { proxy, errorMes } from '../../components/Api/Api'
/* import {
  GET_STRU_REQUESTED,
  ACTION_GET_STRU_Succeed,
  ACTION_GET_STRU_FAILED,
} from './actions'; // Импорт actions для работы через классические ducks */
import { GET_STRU_REQUESTED, GET_STRU_SUCCEED, GET_STRU_FAILED } from '../structures/ToolKitStructure'


export function* getSTRUSaga({ payload }) {
  try {
    const stru = yield fetch(`${proxy}${payload}`,
      {
        headers: {'X-Requested-With': 'XMLHttpRequest'}
      }
      );
    const res = yield stru.json();

    /* yield put(ACTION_GET_STRU_Succeed(res)); // Через классические ducks */
    yield put(GET_STRU_SUCCEED(res)); // Redux-toolkit
  } catch (error) {
    /* yield put(ACTION_GET_STRU_FAILED(errorMes)); // Через классические ducks */
    yield put(GET_STRU_FAILED(errorMes)) // Redux-toolkit
  }
}

export function* watchSTRUSaga() {
  yield takeLatest(GET_STRU_REQUESTED, getSTRUSaga);
}


/* Добавим функционал в случае расширения приложения 
import {
  GET_STRU_DETAIL_REQUESTED,
  ACTION_GET_STRU_DETAIL_Succeed,
  ACTION_GET_STRU_DETAIL_FAILED
} from './actions';

export function* getDETAILSaga({ payload }) {
  try {
    const unitDetail = yield fetch(`${proxy}${payload}`,
      {
        headers: {'X-Requested-With': 'XMLHttpRequest'}
      }
      );
    const res = yield unitDetail.json();

    yield put(ACTION_GET_STRU_DETAIL_Succeed(res));
  } catch (error) {
    yield put(ACTION_GET_STRU_DETAIL_FAILED(errorMes));
  }
}

export function* watchStruDETAILSaga() {
  yield takeLatest(GET_STRU_DETAIL_REQUESTED, getDETAILSaga);
}
*/
