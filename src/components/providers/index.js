import React from 'react';
import { RoiProvider } from './RoiContext';
import { ThemeProvider } from './ThemeContext';

const MasterContextProvider = ({ children }) => {
	return (
		<React.Fragment>
			<ThemeProvider>
				<RoiProvider>{children}</RoiProvider>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default MasterContextProvider;
