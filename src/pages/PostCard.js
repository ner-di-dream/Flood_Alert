import React from "react";
import styled from "styled-components";
import * as s from "./ShareAssetCSS.js";
import ProgressBar from "./ProgressBar.js";

const Entire = styled.div`
	width: 95%;
	height: 5vh;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #7f7f7f3f;
	&:hover {
		background-color: #ffffff0f;
		transition: 0.2s;
	}
`;

const TitleText = styled.span`
	width: 60%;
	margin-left: 0.25vw;
	margin-right: 0.25vw;
	text-indent: 0.75vw;
	color: white;
	line-height: 5vh;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
`;

const DangerDiv = styled.div`
	width: 40%;
	height: 100%;
	margin-left: 0.25vw;
	margin-right: 0.25vw;
`;

function PostCard(props) {
	return (
		<Entire>
			<div
				style={{
					textDecoration: "none",
					width: "100%",
					height: "5vh",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<TitleText>{props.id}</TitleText>
				<s.VrLine />
				<DangerDiv>
					<ProgressBar current={props.danger} max={100} />
				</DangerDiv>
			</div>
		</Entire>
	);
}

PostCard.defaultProps = {
	id: "지역 이름",
	danger: 0,
};

export default PostCard;
