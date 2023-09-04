import { Heading } from '@chakra-ui/react';

type HeadingText = {
	text: string;
};

const HeadingText = (props: HeadingText) => {
	return (
		<Heading
			as={'h4'}
			color={'ebony'}>
			{props.text}
		</Heading>
	);
};

export default HeadingText;
