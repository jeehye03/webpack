import * as React from 'react';
import styled from 'styled-components';
import arrowLeft from './assets/icon/arrowLeft.svg';
import arrowRight from './assets/icon/arrowRight.svg';

function Web() {
  return (
    <Wrap>
      <Header>
        <div>
          <h1>
            With <span>withyou company</span>
          </h1>
          <h1>Will be better.</h1>
        </div>
      </Header>
      <Section>
        <Content>
          <h1>
            위드유 컴퍼니만의
            <br />
            독보적인 마케팅 전략
          </h1>
          <p>Ad Service</p>
          <Arrow>
            <img src={arrowLeft} alt="" />
            <img src={arrowRight} alt="" />
          </Arrow>
          <Memo />
        </Content>
      </Section>
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 100%;
  height: 100vh;

  @media screen and (max-width: 720px) {
    h1 {
      font-size: 25px;
    }
  }
`;

const Header = styled.section`
  display: flex;
  align-items: center;
  margin: auto;
  max-width: 1200px;
  height: 275px;
  span {
    color: #6a30f9;
  }

  @media screen and (max-width: 720px) {
    padding: 30px;
    height: 130px;
  }
`;

const Section = styled.section`
  flex-wrap: wrap;
  background-color: #9573ff;
  color: white;
  height: 375px;

  @media screen and (max-width: 720px) {
    height: 250px;
    padding: 0 30px;
  }
`;

const Content = styled.div`
  position: relative;
  max-width: 1200px;
  margin: auto;
  padding-top: 50px;
`;
const Arrow = styled.div`
  position: absolute;
  top: -55%;
  right: 0;

  img {
    padding-left: 20px;
  }

  @media screen and (max-width: 720px) {
    position: absolute;
    top: 95%;
    right: 0;
  }
`;

const Memo = styled.div`
  position: absolute;
  right: 0;
  top: -20%;
  width: 450px;
  height: 300px;
  background-color: #ffe600;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 720px) {
    width: 200px;
    height: 150px;
    top: 120%;
    right: 0;
  }
`;

export default Web;
