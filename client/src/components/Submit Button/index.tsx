import { Button } from '@chakra-ui/react';

type SubmitButton = {
	maxWidth: string;
	width: string;
	marginTop: string;
	bgColor: string;
	color: string;
	borderRadius: string;
	isLoading?: boolean;
	type: 'button' | 'submit' | 'reset' | undefined;
	text: string;
};

const SubmitButton = (props: SubmitButton) => {
	return (
		<Button
			fontWeight={'600'}
			maxWidth={props.maxWidth}
			w={props.width}
			mt={props.marginTop}
			color={props.color}
			bg={props.bgColor}
			borderRadius={props.borderRadius}
			isLoading={props.isLoading}
			type={props.type}>
			{props.text}
		</Button>
	);
};

export default SubmitButton;
