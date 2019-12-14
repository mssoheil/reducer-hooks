import * as React from "react";

import { useGlobalState, useGlobalDispatch } from "../../store";

const Data: React.FC = () => {
	const state = useGlobalState();
	const dispatch = useGlobalDispatch();

	function handleClick() {
		dispatch({
			type: "ADD_DATA",
			payload: `\n${Math.random()}`,
		});
	}
	return (
		<div>
			data: <pre>{state.data}</pre>
			<button onClick={handleClick}>click</button>
		</div>
	);
};

export default Data;
