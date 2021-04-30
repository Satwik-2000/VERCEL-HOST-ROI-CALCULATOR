import React, { useContext, useEffect } from 'react';
import { RoiContext } from '../../providers/RoiContext';
import FormElement from './FormElement';
import { RightArrowIcon } from '../../../assets/Icons';
import Results from './Results';
import { emailHasError } from '../../../helpers/emailValidator';

const RoiForm = () => {
	const [
		values,
		setValues
	] = useContext(RoiContext);

	const {
		cSuiteLeaders,
		lv1Leaders,
		knowledgeWorkers,
		email,
		error
	} = values;

	const handleSubmit = (e) => {
		e.preventDefault();
		setValues({
			...values,
			error: emailHasError(email)
		});
	};

	useEffect(
		() => {
			setValues({
				...values,
				error: {
					status: true,
					msg: ''
				}
			});
		},
		[
			cSuiteLeaders,
			lv1Leaders,
			knowledgeWorkers,
			email
		]
	);

	const renderForm = () => {
		return (
			<React.Fragment>
				<div className='roi-form'>
					<form onSubmit={handleSubmit}>
						<div>
							<FormElement
								type='number'
								label='Number of C-Suite Leaders'
								value={cSuiteLeaders}
								holder='cSuiteLeaders'
								autofocus={true}
							/>
						</div>
						<div>
							<FormElement
								type='number'
								label='Number of Level 1 Leaders'
								value={lv1Leaders}
								holder='lv1Leaders'
								autofocus={false}
							/>
						</div>
						<div>
							<FormElement
								type='number'
								label='Number of Knowledge Worker'
								value={knowledgeWorkers}
								holder='knowledgeWorkers'
								autofocus={false}
							/>
						</div>

						<div className='email-div'>
							<div className='input'>
								<FormElement
									type='email'
									label='Email ID'
									value={email}
									holder='email'
									autofocus={false}
									error={error.status}
									errorMsg={error.msg}
								/>
							</div>
							<div className='submit'>
								<button type='submit'>
									<RightArrowIcon />
								</button>
							</div>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	};

	const renderCalcContainer = () => {
		return (
			<React.Fragment>
				<div className='calc-container'>
					<div className='form-container'>{renderForm()}</div>
					<div className='result-container'>
						<Results view={!error.status} />
					</div>
				</div>
			</React.Fragment>
		);
	};

	return <React.Fragment>{renderCalcContainer()}</React.Fragment>;
};

export default RoiForm;
