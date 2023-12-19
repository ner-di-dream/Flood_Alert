import React, { useEffect, useState } from "react";
import * as c from "./MainPageCSS.js";
import * as s from "./ShareAssetCSS.js";
import mapImg from "../images/map.png";
import PostCard from "./PostCard.js";

const MainPage = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// 처음 실행될 때 posts에 요소 3개를 하드코딩하여 설정
		setPosts([
			{
				id: "중구", // string 형태의 id
				danger: 91, // int 형태의 danger
			},
			{
				id: "동대문구",
				danger: 85,
			},
			{
				id: "종로구",
				danger: 82,
			},
			{
				id: "중랑구",
				danger: 82,
			},
			{
				id: "성동구",
				danger: 79,
			},
			{
				id: "도봉구",
				danger: 76,
			},
			{
				id: "노원구",
				danger: 73,
			},
			{
				id: "마포구",
				danger: 70,
			},
			{
				id: "강북구",
				danger: 67,
			},
			{
				id: "금천구",
				danger: 64,
			},
			{
				id: "영등포구",
				danger: 61,
			},
			{
				id: "광진구",
				danger: 58,
			},
			{
				id: "은평구",
				danger: 55,
			},
			{
				id: "성북구",
				danger: 49,
			},
			{
				id: "구로구",
				danger: 46,
			},
			{
				id: "강동구",
				danger: 43,
			},
			{
				id: "동작구",
				danger: 40,
			},
			{
				id: "용산구",
				danger: 38,
			},
			{
				id: "서대문구",
				danger: 31,
			},
			{
				id: "강남구",
				danger: 28,
			},
			{
				id: "송파구",
				danger: 28,
			},
			{
				id: "강서구",
				danger: 23,
			},
			{
				id: "관악구",
				danger: 22,
			},
			{
				id: "양천구",
				danger: 15,
			},
			{
				id: "서초구",
				danger: 7,
			},
			// 추가적인 요소가 있다면 계속 추가할 수 있습니다.
		]);

		// 여기에 추가적인 초기화 로직이 있다면 넣을 수 있습니다.
	}, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행

	function MapList() {
		return posts.map((item, index) => (
			<PostCard id={item.id} danger={item.danger} />
		));
	}

	return (
		<div>
			<c.Entire>
				<c.Content>
					<c.PageTitle>
						<s.BoldText size={"xl"}>침수 위험도 목록</s.BoldText>
					</c.PageTitle>
					<c.QuizListTopBar>
						<c.BarText width={"60%"}>지역</c.BarText>
						<s.VrLine />
						<c.BarText width={"40%"}>위험도</c.BarText>
					</c.QuizListTopBar>
					<c.QuizContent>{MapList()}</c.QuizContent>
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default MainPage;

/*
지역구 ID: 중구, Cost: 91
지역구 ID: 동대문구, Cost: 85
지역구 ID: 종로구, Cost: 82
지역구 ID: 중랑구, Cost: 82
지역구 ID: 성동구, Cost: 79
지역구 ID: 도봉구, Cost: 76
지역구 ID: 노원구, Cost: 73
지역구 ID: 마포구, Cost: 70
지역구 ID: 강북구, Cost: 67
지역구 ID: 금천구, Cost: 64
지역구 ID: 영등포구, Cost: 61
지역구 ID: 광진구, Cost: 58
지역구 ID: 은평구, Cost: 55
지역구 ID: 성북구, Cost: 49
지역구 ID: 구로구, Cost: 46
지역구 ID: 강동구, Cost: 43
지역구 ID: 동작구, Cost: 40
지역구 ID: 용산구, Cost: 38
지역구 ID: 서대문구, Cost: 31
지역구 ID: 강남구, Cost: 28
지역구 ID: 송파구, Cost: 28
지역구 ID: 강서구, Cost: 23
지역구 ID: 관악구, Cost: 22
지역구 ID: 양천구, Cost: 15
지역구 ID: 서초구, Cost: 7
*/
