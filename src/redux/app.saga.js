import { takeLatest, take, delay, put } from 'redux-saga/effects';

export function* onIncrement(){
    yield console.log('I am incremented');
    yield delay(3000);
    yield put({ type: 'INCREMENT_FROM_SAGA'});
}

export function* incrementSaga(){


    
/*     while (true) {
        yield take('INCREMENT');
        console.log('I am incremented');
        yield delay(5000);
    } */

    yield takeLatest('INCREMENT', onIncrement );
}