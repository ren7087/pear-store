import {
	Box,
	Text,
	Stack,
	Wrap,
	WrapItem,
	Image
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { PearCard } from "../organisms/pear/PearCard";
import { useAllPears } from "../../hooks/useAllPears";

export const DeliveryCard: VFC = memo(() => {

	return (
		<Wrap p={{ base: 4, md: 10 }} justify='center' spacing='30px'>
		<Box
		w="85%"
		h="200px"
		bg="white"
		borderRadius="10px"
		shadow="md"
		display="flex"
		p={4}
	  >
		<Image
					boxSize='180px'
					objectFit='cover'
					src='data:image/jpeg;base64,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'
					alt='なし'
				/>
			<div>
		  <Text fontSize="lg" fontWeight="bold" margin="10px">
		  	発送時の梱包について
		  </Text>
		  <Text fontSize="sm" fontWeight="bold" margin="14px">
		  	ご注文いただいた翌日にとれたてをご用意し、新鮮なままお届けいたします！ご家庭用だけでなく、贈り物やプレゼントにもぴったりです！<br />
			宅配便の場合は、開封時に梨の破損（つぶれ）がございましたら、商品は食べず、速やかに運送会社にご連絡ください。
		  </Text>
		  </div>
	  </Box>
	  </Wrap>

	);
});