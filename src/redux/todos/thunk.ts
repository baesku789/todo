import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {TodoAction} from "./types";
import {getTodosAsync} from "./actions";
import FrontApi from "../../api/FrontApi";

export const getTodosThunk = (): ThunkAction<void, RootState, null, TodoAction> => {
    return async dispatch => {
        const {request, success, failure} = getTodosAsync;
        dispatch(request())
        try{
            const response = await FrontApi.getTodos();
            dispatch(success(response))
        }catch (e) {
            dispatch(failure(e))
        }
    }
}