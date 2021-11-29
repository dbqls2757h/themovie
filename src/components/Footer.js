import styled from "styled-components";

const SFooter = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #555;
  font-size: 14px;
  color: gray;
`;

export const Footer = () => {
  return <SFooter>&copy; copyright UbCoding</SFooter>;
};
