import * as React from "react";
import User from "./components/user";

import reducer, { initialState } from "./store/index.reducer";
import { MapStateContext, MapDispatchContext } from "./store";

const App: React.FC = () => {
	const [state, dispatch]: any = React.useReducer(reducer, initialState);

	return (
		<MapStateContext.Provider value={state}>
			<MapDispatchContext.Provider value={dispatch}>
				<div className="App">
					<User />
				</div>
			</MapDispatchContext.Provider>
		</MapStateContext.Provider>
	);
};

export default App;
