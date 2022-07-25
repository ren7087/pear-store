import {
	Center,
	Spinner,
	useDisclosure,
	Wrap,
	WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { PearCard } from "../organisms/pear/PearCard";
import { useAllPears } from "../../hooks/useAllPears";

export const Card: VFC = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { getPears, pears, loading } = useAllPears();

	useEffect(() => getPears(), []);

	const onClickPear = useCallback(
		(id: number) => {
			console.log(id);

		},
		[]
	)

	return (
		<>
			{loading ? (
				<Center h="100vh">
					<Spinner />
				</Center>
			) : (
				<Wrap p={{ base: 4, md: 10 }} justify='center' spacing='30px'>
					{pears.map((pear) => (
						<WrapItem key={pear.id} mx="auto">
							<PearCard
								id={pear.id}
								url={pear.url}
								name={pear.name}
								description={pear.description}
								season={pear.season}
								onClick={onClickPear}
							/>
						</WrapItem>
					))}
				</Wrap>
			)}
	    </>
	);
});
