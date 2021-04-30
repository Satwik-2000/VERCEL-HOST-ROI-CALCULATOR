import React from 'react';
import InvestmentSvg from '../../assets/Investment';

const HeroHeader = () => {
	const renderHeroHeader = () => {
		return (
			<React.Fragment>
				<div className='hero-section'>
					<div className='flex-box flex-space-btw'>
						<div className='heading'>
							<h1>
								Calculate your{' '}
								<span className='accent-clr'>Return</span> of{' '}
								<span className='accent-clr'>Investment</span>
							</h1>
						</div>
						<div className='svg-div'>
							<div className='svg-container'>
								<InvestmentSvg />
							</div>
						</div>
					</div>

					<p className='muted-max-text bold-text'>
						Works best for teams with more than 100 members
					</p>
				</div>
			</React.Fragment>
		);
	};

	return <React.Fragment>{renderHeroHeader()}</React.Fragment>;
};

export default HeroHeader;
