import React from 'react';
import HeroHeader from '../components/core/HeroHeader';
import Layout from '../components/core/Layout';
import RoiCalculator from '../components/core/roi';

const Home = () => {
	return (
		<Layout>
			<div className='container'>
				<HeroHeader />
				<RoiCalculator />
			</div>
		</Layout>
	);
};

export default Home;
