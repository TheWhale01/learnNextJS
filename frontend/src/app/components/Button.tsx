'use client'

interface buttonProps {
	name: string;
	callback: any;
}

const Button = ({name, callback}: buttonProps) => {
	return (
		<button onClick={callback} >{ name }</button>
	);
};

export default Button;
