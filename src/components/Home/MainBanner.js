import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { mainColor, mainWeight, moSize } from "../../style/GlobalStyled";

const SMainBanner = styled.div`
  height: 80vh;
  background-size: cover;
  background-position: center;
  padding: 240px 80px;
  position: relative;
  @media screen and (max-width: 500px) {
    padding: 200px 30px;
  }
`;

const MainBannerBox = styled.div`
  width: 100%;
  height: 80vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(rgba(29, 29, 29, 0), rgba(29, 29, 29, 1));
  @media screen and (max-width: 500px) {
    font-size: 45px;
    margin-bottom: 15px;
  }
`;

const Con = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
`;

const Title = styled.div`
  max-width: 600px;
  width: 100%;
  font-size: 70px;
  font-weight: ${mainWeight.TitleWeight};
  line-height: 1.2em;
  margin-bottom: 25px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 500px) {
    font-size: 45px;
    margin-bottom: 15px;
  }
`;

const Desc = styled.div`
  max-width: 600px;
  width: 100%;
  font-size: 18px;
  opacity: 0.9;
  line-height: 1.4em;
  text-shadow: 0 0 15px rgba(0, 0, 0, 1);
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
  }
`;

const Button = styled.button`
  all: unset;
  width: 160px;
  height: 40px;
  border: 1px solid #fff;
  margin-top: 30px;
  font-weight: ${mainWeight.TitleWeight};
  cursor: pointer;
  text-align: center;
  transition-duration: 0.3s;
  position: relative;
  &:hover {
    background-color: ${mainColor.fontColor};
    color: ${mainColor.bgColor};
    span {
      margin-left: 20px;
    }
  }
  span {
    transition-duration: 0.2s;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 0;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media screen and (max-width: 500px) {
    animation: none;
  }
`;

const MoreBanner = styled.section`
  width: 100%;
  /* height: 80vh; */
  height: ${(props) => props.height};
  background-color: #111;
  margin-top: 100px;
  padding-left: 80px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  transition: 0.3s;
  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;

const ConWrap = styled.div`
  width: 30%;
`;

const MoreTitle = styled.div`
  font-size: 70px;
  font-weight: ${mainWeight.TitleWeight};
  line-height: 1.2em;
  margin: 50px 0 30px 0;
`;

const MoreDesc = styled.div`
  max-width: 600px;
  width: 100%;
  font-size: 18px;
  opacity: 0.9;
  line-height: 1.8em;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
`;

const CoverBg = styled.div`
  width: 65%;
  background-size: cover;
  background-position: top;
`;

const CloseBtn = styled.div`
  font-size: 30px;
  float: right;
  margin: 30px;
`;

export const MainBanner = ({ now, num }) => {
  const [more, setMore] = useState(0);
  const [moreNum, setMoreNum] = useState(0);

  const onClickMore = () => {
    if (moreNum === 0) {
      setMore("80vh");
      window.scrollTo({
        top: 700,
        left: 0,
        behavior: "smooth",
      });
      setMoreNum(moreNum + 1);
    } else if (moreNum === 1) {
      setMore("0");
      setMoreNum(moreNum - 1);
    }
  };

  const onClickClose = () => {
    setMore("0");
    setMoreNum(moreNum - 1);
  };

  return (
    <>
      <SMainBanner
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            now[`${num}`].backdrop_path
          })`,
        }}
      >
        <MainBannerBox />

        <Con>
          <Title>{now[`${num}`].title}</Title>
          <Desc>{now[`${num}`].overview.slice(0, 100) + "..."}</Desc>

          <Button onClick={onClickMore}>
            더보기 <span>+</span>
            <ButtonBox />
          </Button>
        </Con>
      </SMainBanner>

      <MoreBanner height={more}>
        <ConWrap>
          <MoreTitle>{now[`${num}`].title}</MoreTitle>
          <MoreDesc>{now[`${num}`].overview.slice(0, 250) + "..."}</MoreDesc>
        </ConWrap>
        <CoverBg
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              now[`${num}`].backdrop_path
            })`,
          }}
        >
          <CloseBtn onClick={onClickClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseBtn>
        </CoverBg>
      </MoreBanner>
    </>
  );
};
