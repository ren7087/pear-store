import { WrapItem, Wrap, AspectRatio } from "@chakra-ui/layout";
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table";
import { memo, VFC } from "react";
import { Map } from "./Map";

export const Table1: VFC = memo(() => {
	return (
		<Wrap p={{ base: 4, md: 10 }} justify='center' spacing='30px'>
		<WrapItem mx="auto">
		<TableContainer>
		<Table variant='striped' colorScheme='yellow'>
		  <Tbody>
			<Tr>
			  <Td>生産者</Td>
			  <Td>船田俊明</Td>
			</Tr>
			<Tr>
			  <Td>営業期間</Td>
			  <Td>8~11月</Td>
			</Tr>
			<Tr>
			  <Td>営業時間</Td>
			  <Td>8~17時</Td>
			</Tr>
			<Tr>
			  <Td>定休日</Td>
			  <Td>基本的にありません</Td>
			</Tr>
			<Tr>
			  <Td>場所</Td>
			  <Td>〒329-4304<br />栃木県栃木市岩船町静和880</Td>
			</Tr>
			<Tr>
			  <Td>電話・FAX</Td>
			  <Td>0282-55-1990</Td>
			</Tr>
			<Tr>
			  <Td>メールアドレス</Td>
			  <Td>nasi880@yahoo.co.jp</Td>
			</Tr>
		  </Tbody>
		</Table>
	  </TableContainer>
	  </WrapItem>
	  </Wrap>
	);
});
