import styled from "styled-components";
import { Link } from "react-router-dom";

import { router } from "../router";
import { mainWeight, moSize } from "../style/GlobalStyled";
import { useState } from "react";

const Sheader = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  transition-duration: 0.5s;
  @media screen and (max-width: 500px) {
    padding: ${moSize.padding};
  }
`;

const Logo = styled.ul`
  font-size: 25px;
  font-weight: 600;
  a {
    color: crimson;
  }
`;

const MenuWrap = styled.li`
  display: flex;
`;

const Menu = styled.div`
  &:nth-child(1) {
    margin-right: 50px;
    @media screen and (max-width: 500px) {
      margin-right: 20px;
    }
  }
  font-weight: ${mainWeight.TitleWeight};
`;

export const Header = () => {
  const [bg, setBg] = useState();

  const handleScroll = () => {
    const sct = window.pageYOffset;

    // console.log(sct);
    if (sct >= 200) {
      setBg("rgba(0,0,0,0.7)");
    } else {
      setBg("");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <Sheader bgColor={bg}>
        <Logo>
          <Link to={router.home}>the Movie</Link>
        </Logo>

        <MenuWrap>
          <Menu>
            <Link to={router.home}>홈</Link>
          </Menu>
          <Menu>
            <Link to={router.search}>영화검색</Link>
          </Menu>
        </MenuWrap>
      </Sheader>
    </div>
  );
};
