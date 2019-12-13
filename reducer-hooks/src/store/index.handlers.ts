import {ADD_DATA} from "./index.constants";

interface Handlers {
	[key: string]: any
}

interface Action {
	type: string;
	payload?: any
}

interface State {
	data?: any[]
}

const handlers: Handlers = {
	[ADD_DATA]: (state: any, action: Action) => ({data: [...state.data, action.payload]})
}

export default handlers
