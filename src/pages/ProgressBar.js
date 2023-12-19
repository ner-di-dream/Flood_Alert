import React from "react";
import styled from "styled-components";

const Entire = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	justify-content: flex-start;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

const ProgressGauge = styled.div`
	width: ${(props) => (props.current * 100) / props.max}%;
	height: 100%;
	background-color: ${(props) => {
		const percentage = (props.current / props.max) * 100;

		if (percentage >= 75) {
			return "#ff00007f"; // 빨강 (75% 이상)
		} else if (percentage >= 50) {
			return "#ffa5007f"; // 주황 (50% 이상)
		} else if (percentage >= 25) {
			return "#ffff007f"; // 노랑 (25% 이상)
		} else {
			return "#00ff007f"; // 초록 (25% 미만)
		}
	}};
`;

const ProgressText = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: ${(props) => (props.current === props.max ? "white" : "white")};
	text-align: center;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
`;

const ProgressBar = (props) => {
	return (
		<Entire>
			<ProgressGauge current={props.current} max={props.max}>
				<ProgressText>{props.current}</ProgressText>
			</ProgressGauge>
		</Entire>
	);
};

ProgressBar.defaultProps = {
	current: 0,
	max: 999,
};

export default ProgressBar;
