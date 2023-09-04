import { As, Heading } from '@chakra-ui/react';

type HeadingText = {
	text: string;
};

const HeadingText = (props: HeadingText) => {
	return <Heading>{props.text}</Heading>;
};

export default HeadingText;
