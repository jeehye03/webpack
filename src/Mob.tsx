import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import dataList from './data';
import logo from './assets/icon/logo.svg';
import arrow from './assets/icon/arrowMob.svg';
import img from './assets/images/img.png';

function Mob() {
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);
  const [data, setData] = useState(dataList);

  function handleScroll() {
    if (ScrollY > 318) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <Container>
      <Nav>
        {ScrollActive ? (
          <>
            <img src={arrow} alt="" />
            <p>
              평범한 한복데이트는 그만! 고퀄리티
              <br />
              한복대여 체험단 모집
            </p>
          </>
        ) : (
          <img src={logo} alt="" />
        )}
      </Nav>

      <img src={img} alt="" />
      <Article>
        {data.map((item) => (
          <div key={item.id}>
            {!ScrollActive && <h3>{item.title}</h3>}
            <span>{item.status}</span>
            <p>제공내역 :{item.offer}</p>
            <p>지원인원 : {item.applicantsCnt}명</p>
            <p>모집인원 : {item.recruitCnt}명</p>
            <p>신청기간 : {item.date}</p>
            <p>{item.contents}</p>
          </div>
        ))}
      </Article>
    </Container>
  );
}
const Container = styled.div`
  word-break: keep-all;
`;
const Nav = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 30px;
  align-items: center;
  background-color: #fff;
  padding: 20px 25px;

  img {
    padding-right: 10px;
  }
`;

const Article = styled.article`
  padding: 10px 20px;
  span {
    color: #6a30f9;
    font-weight: 700;
  }
`;

export default Mob;
