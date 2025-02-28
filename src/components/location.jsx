import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const BusItem = styled.span`
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 4px;
  color: white;
  background-color: ${({ busType }) =>
    busType === "간선" ? "blue" :
    busType === "지선" ? "green" :
    busType === "직행" ? "orange" :
    busType === "공항" ? "red" :
    busType === "마을" ? "purple" :
    "black"};
`;

const SubwayLine = styled.span`
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 4px;
  color: white;
  background-color: ${({ line }) =>
    line === "2호선" ? "#33A23D" : // 2호선 (초록색)
    line === "7호선" ? "#6D8EB5" : // 7호선 (올리브색)
    "black"};
`;

const Location = () => {
  // 카카오 맵 불러오기
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1740736481162",
    "key" : "2n7n8",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      
      <Map
        id="daumRoughmapContainer1740736481162"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        <b>서울특별시 광진구 능동로 87
        <br />
        건대입구역 자이엘라 6F 에떼르노 홀</b>
        <br />
        <br />
        <Title>버스 이용시</Title>
        <br />
        <br />
        <b>건대로데오거리입구 정류장 하차 </b>[05218]
        <br />
        <BusItem busType="간선">간선버스</BusItem> 240, 721<br />
        <BusItem busType="지선">지선버스</BusItem> 2222, 2224<br />
        <BusItem busType="직행">직행버스</BusItem> 3500<br />
        <BusItem busType="공항">공항버스</BusItem> 6013<br />
        <BusItem busType="마을">마을버스</BusItem> 광진05
        <br />
        <Title>지하철 이용시</Title>
        <br />
        <br />
        <SubwayLine line="2호선">2호선</SubwayLine>, <SubwayLine line="7호선">7호선</SubwayLine> 건대입구역 5번 출구 바로 앞 (도보 30m)
        <br />
        <br />
        <Title>자가용 이용시</Title>
        <br />
        <br />
        네비게이션: "까사그랑데" 또는 "건대입구역 자이엘라" 입력
        <br />
        주소검색 : "서울 광진구 능동로 87" 또는 "서울 광진구 자양동 2-2" 검색
      </Content>
    </Wrapper>
  );
};

export default Location;