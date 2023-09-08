import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Text, ListItem, OrderedList } from '@chakra-ui/react';

const ShowMoreInfo = () => {
	return (
		<Accordion allowToggle>
			<AccordionItem>
				<h2>
					<AccordionButton _expanded={{ bg: 'actionPrimary', color: 'primary' }}>
						<Box
							border={0}
							as="span"
							flex="1"
							textAlign="left">
							Show More
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel
					pb={4}
					textAlign={'left'}>
					<Text
						as="b"
						fontSize={'1.35rem'}
						fontWeight={'600'}
						m={'.25rem 0'}>
						Refund Policy:
					</Text>
					<Text m={'.25rem 0'}> Refunds and Date Changes are done as per the following policies.</Text>

					<OrderedList
						m={'.5rem 0'}
						fontSize={'.875rem'}
						fontWeight={'500'}>
						<ListItem m={'.25rem 0'}>Refund Amount= Paid Amount – (Airline’s Cancellation Fee + ST Service Fee).</ListItem>
						<ListItem m={'.25rem 0'}>Date Change Amount= Airline’s Date Change Fee + Fare Difference + ST Service Fee.</ListItem>
						<ListItem m={'.25rem 0'}>*TP Convenience fee is non-refundable.</ListItem>
						<ListItem m={'.25rem 0'}>*Trippal does not guarantee the accuracy of refund/date change fees.</ListItem>
						<ListItem m={'.25rem 0'}>*The airline refund/date change fee is an estimation and can be changed without any prior notice by the airlines..</ListItem>
						<ListItem m={'.25rem 0'}>*The airline refund/date change fee is an estimation and can be changed without any prior notice by the airlines..</ListItem>
					</OrderedList>

					<Text
						as="b"
						fontSize={'1.35rem'}
						fontWeight={'600'}
						m={'.25rem 0'}>
						Baggage:
					</Text>
					<Text m={'.25rem 0'}> 20 kg / person</Text>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default ShowMoreInfo;
