import React from 'react';
import Layout from '../components/core/Layout';
import PageNotFoundComponent from '../components/core/PageNotFoundComponent';

const PageNotFound404 = () => {
	return (
		<React.Fragment>
			<Layout>
				<div className='container'>
					<PageNotFoundComponent />
				</div>
			</Layout>
		</React.Fragment>
	);
};

export default PageNotFound404;
