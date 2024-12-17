import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2024 Your Company. All Rights Reserved.
    </FooterContainer>
  );
};

export default Footer;
