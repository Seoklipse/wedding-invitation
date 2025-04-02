import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>/*
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        <b>신랑측 피로연 안내</b>
        <br />
        거리가 멀어 본식에 참석하기 힘든 분들을 위해
        <br />
        혼례에 앞서 작은 자리를 만들었습니다.
        <br />
        기쁜 마음으로 오셔서 두 사람의 앞날을 축복해 주시기 바랍니다.
        <br />
        일시 : 2025년 3월 22일 토요일 11:00
        <br />
        장소 : 강원 철원군 서면 와수로110번안길 18-2 태봉웨딩홀
        <br />
      </Content>*/
    </Wrapper>
  );
};


export default Quote;
