import { Box } from "@chakra-ui/layout"
import { Text } from '@chakra-ui/react'
import { Card } from "./Card"
import { Map } from "./Map"
import { Chat } from "./Chat"
import { DeliveryCard } from "./deliveryCard"
import { Table1 } from "./Table1"

export const Top = () => {
	return (
		<>
			<Box w='100%' p={4} color='black' textAlign="center" backgroundImage="https://img.kb-cdn.com/imgviewer/NVpIM2ptOHhYRzVmUk5rM1NrNlFxYVV6enV4aGk2UFRJMmxPckdDUUVNYW5TU0Ezek1EWDR1Tmc5eXFBYjZpMWtmWXI5eGdtNUNHWFowZFpWdWpuZTNNYlZsWEJaU0svRVR6b0M5S1dsQ3k2b3JMS3VwcHp2Y25HV2lXNkp3WVRYTGdWREo1R1lXdFJ4WVRheHFrRFBRZ2lIMHJWdDkxM1UxR3dqYUpFbHVhVlRsUEdlQXAxeDFOeDZPV1o0dTBzOTNVOCtGYWVEUUtTbzJoMUp5NnpHUElRdjN4bitaNVBNMVVBVkFjd1pGOFFhdzdmZCtSSlR3S0kyWHZWWC9DVQ==?square=0">
				<Text fontSize='3xl'>ふなだ梨園</Text>
				<Text fontSize='4xl'　fontFamily="YuGothic" color="#F2B33D" fontWeight="bold">大きくて、シャキッとした梨作ってます</Text>
			</Box>
			<Box w='100%' p={4} color='black' textAlign="center" backgroundImage="https://2.bp.blogspot.com/-9o7JkZ1dFRc/VdrjrrbnZoI/AAAAAAAAxEM/RkqeXmg__v0/s800/kajuen_nashi.png">
				<Card />
				<DeliveryCard />
			</Box>
			<Box w='100%' p={4} color='black' textAlign="center" backgroundImage="https://st.depositphotos.com/1323515/57495/v/600/depositphotos_574958888-stock-illustration-seamless-background-pattern-with-green.jpg">
				<Chat />
			</Box>
			<Box w='100%' p={4} color='black' textAlign="center" backgroundImage="https://img.kb-cdn.com/imgviewer/NVpIM2ptOHhYRzVmUk5rM1NrNlFxYVV6enV4aGk2UFRJMmxPckdDUUVNYWJKUFRUcDBUMXhMMVNxQ1JSaTcyZDIwaTN5dmF1cytPY1JwMmdXMThUYXJEOWF4Y1hnRTRpb3dnK1p1SS96cnhYcW5IZnB5VkZISHcvOWpTaDNFOU5qOGl5Zmk0ZUN1bEhHRy9lZENROFppZFk3TlA0ZXdPUjN4aEhtYlhiQ3NISitZcmJ0YlZsS3AwWFZIeGdVUTIrcmVubDVTeEpEMXBHR2JWbk5aQis3NE04NUlmOEYrUlA2eVJ4d0szRWVTTWg2M0ZZSngzNGhFdUFHbmgxNE43cnA3QS9GSG9sTDlmRnR3aEt4M3BjVmc9PQ==?square=0">
				<Table1 />
				<Map />
			</Box>
		</>
	)
}
