import * as React from 'react';
import classnames from 'classnames';
import './index.styl';

export interface BasicProps {
	icon?: string;
	active?: boolean;
	disabled?: boolean;
	inline?: boolean;
	primary?: boolean;
	outline?: boolean;
	light?: boolean;
	type?: string;
	onClick?: (e?: MouseEvent) => void;
}

type ButtonProps = React.ButtonHTMLAttributes<{}> & BasicProps;

class Button extends React.Component<ButtonProps, any> {
	static defaultProps = {
		icon: '',
		active: false,
		disabled: false,
		inline: false,
		primary: false,
		outline: false,
		light: false,
		type: 'button',
		onClick: () => {}
	};

	render() {
		const { props } = this;
		const { icon, active, disabled, inline, primary, outline, light, type, onClick } = props;
		const classes = classnames({
			'cube-btn_active': active,
			'cube-btn_disabled': disabled,
			'cube-btn-inline': inline,
			'cube-btn-primary': primary,
			'cube-btn-outline': outline,
			'cube-btn-outline-primary': outline && primary,
			'cube-btn-light': light
		});
		return (
			<button className={`${classes} cube-btn`} type={type} onClick={(e) => !disabled && onClick(e)}>
				{icon && <i className={icon} />}
				{this.props.children}
			</button>
		);
	}
}

export default Button;
