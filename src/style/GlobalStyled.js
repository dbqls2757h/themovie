import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColor = {
  bgColor: "#1d1d1d",
  fontColor: "#fff",
};

export const mainWeight = {
  TitleWeight: "600",
};

export const moSize = {
  padding: "0 30px",
  titleSize: "45px",
  descSize: "16px",
  movieTitle: "14px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    a
    {
        color: #fff;
        text-decoration: none;
    }

    body{
        font-family:  'Noto Sans KR', sans-serif;
        background-color: ${mainColor.bgColor};
        color: ${mainColor.fontColor};
        word-break: break-all;
        letter-spacing: -1px;
    }
`;
