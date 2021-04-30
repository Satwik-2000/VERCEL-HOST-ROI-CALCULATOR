import React from 'react';
import './App.scss';
import Routes from './Routes';
import MasterContextProvider from './components/providers';

function App() {
	return (
		<React.Fragment>
			<MasterContextProvider>
				<Routes />
			</MasterContextProvider>
		</React.Fragment>
	);
}

export default App;
