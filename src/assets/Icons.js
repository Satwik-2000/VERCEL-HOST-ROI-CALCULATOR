import React from 'react';

export const SunIcon = ({ size = 20, classes = '' }) => {
	return (
		<React.Fragment>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`${classes}`}
			>
				<circle cx='12' cy='12' r='5' />
				<line x1='12' y1='1' x2='12' y2='3' />
				<line x1='12' y1='21' x2='12' y2='23' />
				<line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
				<line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
				<line x1='1' y1='12' x2='3' y2='12' />
				<line x1='21' y1='12' x2='23' y2='12' />
				<line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
				<line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
			</svg>
		</React.Fragment>
	);
};

export const MoonIcon = ({ size = 20, classes = '' }) => {
	return (
		<React.Fragment>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`${classes}`}
			>
				<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
			</svg>
		</React.Fragment>
	);
};

export const GithubIcon = ({ size = 20, classes = '' }) => {
	return (
		<React.Fragment>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`${classes}`}
			>
				<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
			</svg>
		</React.Fragment>
	);
};

export const RightArrowIcon = ({ size = 20, classes = '' }) => {
	return (
		<React.Fragment>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`${classes}`}
			>
				<polyline points='9 18 15 12 9 6' />
			</svg>
		</React.Fragment>
	);
};

export const HashIcon = ({ size = 20, classes = '' }) => {
	return (
		<React.Fragment>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`${classes}`}
			>
				<line x1='4' y1='9' x2='20' y2='9' />
				<line x1='4' y1='15' x2='20' y2='15' />
				<line x1='10' y1='3' x2='8' y2='21' />
				<line x1='16' y1='3' x2='14' y2='21' />
			</svg>
		</React.Fragment>
	);
};

export const EmailIcon = ({ size = 20, classes = '' }) => {
	return (
		<React.Fragment>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`${classes}`}
			>
				<circle cx='12' cy='12' r='4' />
				<path d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94' />
			</svg>
		</React.Fragment>
	);
};

export const GridIcon = ({ size = 20, classes = '' }) => {
	return (
		<React.Fragment>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`${classes}`}
			>
				<rect x='3' y='3' width='7' height='7' />
				<rect x='14' y='3' width='7' height='7' />
				<rect x='14' y='14' width='7' height='7' />
				<rect x='3' y='14' width='7' height='7' />
			</svg>
		</React.Fragment>
	);
};
