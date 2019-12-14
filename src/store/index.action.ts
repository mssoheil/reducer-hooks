import { ADD_DATA } from "./index.constants";

interface Action {
	type: string;
	payload?: any
}

export const addData = (payload: any): Action => ({
	type: ADD_DATA,
	payload,
});
