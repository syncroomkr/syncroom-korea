import {createAsyncAction} from "typesafe-actions";
import Room from "../../common/classes/Room";
import {AxiosError} from "axios";

export const GET_DATA = 'syncroom/GET_DATA';
export const GET_DATA_SUCCESS = 'syncroom/GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'syncroom/GET_DATA_ERROR';

interface successProps {
    rooms: Room[];
    users: string[];
}

export const getDataAsync = createAsyncAction(
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR
)<undefined, successProps, AxiosError>();
