import { memo, VFC } from "react";
import styled from "styled-components";

const Fukidashi = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
	position: relative;
	max-width: 870px;
	margin: 0 auto;
	align-items: flex-start;
	margin-bottom: 1em;
`

const Fukidashi2 = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
	position: relative;
	max-width: 870px;
	margin: 0 auto;
	align-items: flex-start;
	margin-bottom: 1em;
	flex-direction: row-reverse;
`

const SText = styled.div`
	position: relative;
	display: flex;
	flex-flow: wrap;
	justify-content: flex-end;
	width: calc(100% - 118px);
`

const SText2 = styled.div`
	position: relative;
	display: flex;
	flex-flow: wrap;
	justify-content: flex-end;
	width: calc(100% - 118px);
	justify-content: flex-start;
`

const SComment = styled.p`
	background: #eceefe;
	margin-bottom: 1em;
	padding: 0.8em 1em;
	border-radius: 11px;
	display: inline-block;
	font-size: 1.5rem;
`

const SComment2 = styled.p`
    background: #e5fcbd;
	margin-bottom: 1em;
	padding: 0.8em 1em;
	border-radius: 11px;
	display: inline-block;
	font-size: 1.5rem;
`

const SIcon = styled.div`
	text-align: center;
	position: relative;
	top: -1em;
`

const SImg = styled.img`
	width: 88px;
	height: 88x;
	border-radius: 80px;
	position: relative;
	z-index: 0;
`

const Slabel = styled.p`
	font-size: 1.5rem;
	margin-bottom: 0.25em;
`



export const Chat: VFC = memo(() => {
	return (
		<>
		<Fukidashi>
		<SText>
			<SComment>ふなだ梨園のこだわりを教えてください！</SComment>
			{/* <SComment>おおかみには気をつけます。</SComment> */}
		</SText>
		<SIcon>
			<SImg src="https://1.bp.blogspot.com/-pwYQZYc6tWs/VwoG49A4AHI/AAAAAAAA5ns/_mZdwhTeBvI9MhbPPAf_j7iJVlNSB0w3w/s800/kankou_asia_family.png" alt="お客様" />
			<Slabel>お客様</Slabel>
		</SIcon>
		</Fukidashi>
		<Fukidashi2>
		<SText2>
			<SComment2>はい！</SComment2>
			<SComment2>日光量の多さ、肥沃な大地、澄んだ水</SComment2>
			<SComment2>この３つにこだわり、美味しい自慢の梨を生産しています！</SComment2>
		</SText2>
		<SIcon>
			<SImg src="https://mitkp.com/wp-content/uploads/2017/03/nouka_ase_fuku.png" alt="ふなだ梨園" />
			<Slabel>船田梨園</Slabel>
		</SIcon>
		</Fukidashi2>
		</>
	);
});
