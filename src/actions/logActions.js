import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

export const getLogs = () => async dispatch => {

    try {

        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }

}
export const addLog = (log) => async dispatch => {
    console.log('Here')
    console.log(JSON.stringify(log));
    try {

        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }

}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}