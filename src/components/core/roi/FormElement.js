import React, { useContext } from 'react';
import { HashIcon, EmailIcon } from '../../../assets/Icons';
import { RoiContext } from '../../providers/RoiContext';

const FormElement = ({
	label = '',
	value = 0,
	holder = '',
	type = 'text',
	autofocus = false,
	error = false,
	errorMsg = ''
}) => {
	const [
		values,
		setValues
	] = useContext(RoiContext);

	const handleChangeNumberType = (key, value) => {
		if (value >= 0) {
			setValues({
				...values,
				[key]: value
			});
		}
		else if (value < 0 || value.replace(/\s/g, '').length > 0) {
			setValues({
				...values,
				[key]: ''
			});
		}
	};

	const handleChangeTextType = (key, value) => {
		setValues({
			...values,
			[key]: value
		});
	};

	const getIcon = () => {
		return (
			<React.Fragment>
				{type === 'number' && <HashIcon size={16} />}
				{type === 'email' && <EmailIcon size={16} />}
			</React.Fragment>
		);
	};

	const renderFormElement = () => {
		return (
			<React.Fragment>
				<label>
					<span>
						{getIcon()}
						{label}
					</span>

					<br />
					{type === 'number' && (
						<input
							autoFocus={autofocus}
							required
							min={0}
							type='number'
							value={value}
							onChange={(e) => {
								handleChangeNumberType(holder, e.target.value);
							}}
						/>
					)}
					{type !== 'number' && (
						<input
							autoFocus={autofocus}
							required
							min={0}
							type={type}
							value={value}
							onChange={(e) => {
								handleChangeTextType(holder, e.target.value);
							}}
						/>
					)}
					<span>
						{error && <span className='error-msg'>{errorMsg}</span>}
					</span>
				</label>
			</React.Fragment>
		);
	};

	return <React.Fragment>{renderFormElement()}</React.Fragment>;
};

export default FormElement;
