import { Flex, Spacer, Stack } from "@chakra-ui/layout"
import { Button, ButtonGroup, Image } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

export const Header = () => {
	return (
		<Flex backgroundImage="https://thumb.ac-illust.com/45/453c693397891fc67474c808445e4095_t.jpeg">
			{/* <Image
			borderRadius='full'
			boxSize='150px'
			m={10}
			src='https://frame-illust.com/fi/wp-content/uploads/2015/09/74698087938f6fb7d8639c6e9005291c.png'
			alt='Dan Abramov'
			/> */}
			<Spacer />
			<Stack direction='row' spacing={4} m={10}>
			<Button colorScheme='yellow' variant='solid'>
				ご購入はこちら
			</Button>
			<Button rightIcon={<EmailIcon />} colorScheme='orange' variant='outline'>
				お問合せ
			</Button>
			</Stack>
		</Flex>
	)
}
