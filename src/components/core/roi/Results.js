import React, { useContext } from 'react';
import {
	calcInvestment,
	calcReturnBenifit
} from '../../../helpers/roiCalculator';
import { RoiContext } from '../../providers/RoiContext';
import { GridIcon } from '../../../assets/Icons';

const Results = ({ view = false }) => {
	const [
		values,
		setValues
	] = useContext(RoiContext);

	const { cSuiteLeaders, lv1Leaders, knowledgeWorkers } = values;

	const getReturn = () => {
		return calcReturnBenifit(cSuiteLeaders, lv1Leaders, knowledgeWorkers);
	};

	const getInvestment = () => {
		return calcInvestment(cSuiteLeaders, lv1Leaders, knowledgeWorkers);
	};

	const getRoi = () => {
		const rtn = getReturn();

		const inv = getInvestment();

		if (inv !== 0) {
			return Math.round(rtn / inv);
		}
		return 0;
	};

	const renderResults = () => {
		return (
			<React.Fragment>
				<div className='results-container'>
					<p className='result-head'>
						{' '}
						<GridIcon size={16} /> Results
					</p>
					<div className='row1'>
						<div className='item'>
							<div className='card'>
								<div className='card-body'>
									<span className='sub-head'>
										Return{' '}
										<span className='muted-max-text bold-text'>
											<small>Benifit</small>
										</span>
									</span>
								</div>
								<hr />
								<div className='card-body'>
									<p className='medium-text'>
										{view ? getReturn() : '0'}
									</p>
								</div>
							</div>
						</div>
						<div className='item'>
							<div className='card'>
								<div className='card-body'>
									<span className='sub-head'>
										Investment{' '}
										<span className='muted-max-text bold-text'>
											<small>Cost</small>
										</span>
									</span>
								</div>
								<hr />
								<div className='card-body'>
									<p className='medium-text'>
										{view ? getInvestment() : '0'}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='row2'>
						<div className='item'>
							<div className='card'>
								<div className='card-body'>
									<span className='main-head'>
										Return of Investment
									</span>
								</div>
								<hr />
								<div className='card-body'>
									<p className='big-text muted-text'>
										{view ? getRoi() : '0'}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<div className={view ? 'active' : 'inactive'}>
				{renderResults()}
			</div>
		</React.Fragment>
	);
};

export default Results;
