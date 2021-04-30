import React, { useContext } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { ThemeContext } from '../providers/ThemeContext';

const Layout = ({ children }) => {
	/**
     * States for theme
     */
	const [
		darkMode,
		setDarkMode
	] = useContext(ThemeContext);

	const renderLayout = () => {
		return (
			<React.Fragment>
				<main className={`${darkMode ? 'darkMode' : 'liteMode'}`}>
					<NavBar />
					{children}
					<Footer />
				</main>
			</React.Fragment>
		);
	};

	return <React.Fragment>{renderLayout()}</React.Fragment>;
};

export default Layout;
