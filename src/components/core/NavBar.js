import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setThemeDark, setThemeLight } from '../../helpers/theme';
import { MoonIcon, SunIcon, GithubIcon } from '../../assets/Icons';
import { ThemeContext } from '../providers/ThemeContext';

const NavBar = () => {
	/**
     * States for theme
     */
	const [
		darkMode,
		setDarkMode
	] = useContext(ThemeContext);

	/**
     * utility function to toggle theme
     */
	const toggleTheme = () => {
		/**
	     * Save theme in local storage
	     */
		if (darkMode) setThemeLight();
		else setThemeDark();

		/**
	     * change current state
	     */
		setDarkMode(!darkMode);
	};

	/**
	 * rendering the theme toggle button
	 */
	const themeToggleButton = () => {
		return (
			<React.Fragment>
				<button
					className='theme-toggle'
					onClick={toggleTheme}
					title='change theme'
				>
					{/**
					 * Show the moon icon if darkmode is active
					 */}
					{darkMode && <MoonIcon />}

					{/**
					 * Show the sun icon if darkmode is not active
					 */}
					{!darkMode && <SunIcon />}
				</button>
			</React.Fragment>
		);
	};

	/**
	 * rendering the brand name
	 */
	const brandName = () => {
		return (
			<React.Fragment>
				<Link to={'/'}>
					<p className='nav-brand'>
						{/**
						 * Show the full brandname in desktops
						 */}
						<span className='name phone-hide'>
							ROI <span className='accent-clr'>Calculator</span>
						</span>

						{/**
						 * Show the short brandname in phones
						 */}
						<span className='name phone-view'>
							ROI<span className='accent-clr'> Calc.</span>
						</span>
					</p>
				</Link>
			</React.Fragment>
		);
	};

	/**
	 * rendering the github button
	 */
	const githubIcon = () => {
		return (
			<React.Fragment>
				<a
					href='https://github.com/Satwik-2000'
					target='_blank'
					rel='noopener noreferrer'
					title='GitHub Repo'
				>
					<button className='search-icon'>
						<GithubIcon />
					</button>
				</a>
			</React.Fragment>
		);
	};

	/**
	 * The main navvigation bar
	 */
	const navBar = () => {
		return (
			<React.Fragment>
				<nav>
					<div className='nav-body'>
						<div className='container flex-box flex-row flex-space-btw'>
							{themeToggleButton()}
							{brandName()}
							{githubIcon()}
						</div>
					</div>
				</nav>
			</React.Fragment>
		);
	};

	/**
	 * rendering the Navigation Bar
	 */
	return <React.Fragment>{navBar()}</React.Fragment>;
};

export default NavBar;
