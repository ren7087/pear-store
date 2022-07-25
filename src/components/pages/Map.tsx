import { WrapItem, Wrap, AspectRatio } from "@chakra-ui/layout";
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table";
import { memo, VFC } from "react";

export const Map: VFC = memo(() => {
	return (
		<AspectRatio ratio={16 / 9} maxH="500px" maxW="1000px" m="auto" position="relative">
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12857.966437621222!2d139.688545!3d36.3246335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66b8f1c5f23acdfa!2z44G144Gq44Gg5qKo5ZyS!5e0!3m2!1sja!2sjp!4v1658671667031!5m2!1sja!2sjp"></iframe>
		</AspectRatio>
	);
});
