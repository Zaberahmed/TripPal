import { As, Heading } from '@chakra-ui/react';

type HeadingText = {
	text: string;
	type: As | undefined;
};

const HeadingText = (props: HeadingText) => {
	return <Heading as={props.type}>{props.text}</Heading>;
};

export default HeadingText;
