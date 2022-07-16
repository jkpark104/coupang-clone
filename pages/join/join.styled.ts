import styled from '@emotion/styled';
import img from 'next/image';

export const Wrapper = styled.div`
  min-width: 290px;
  max-width: 460px;
  /* padding: 0 4.35%; */
  margin: 0 auto;
`;

export const Header = styled.header`
  position: relative;
`;

export const Logo = styled.h1`
  margin: 0 auto;
  padding: 10.27% 0 0;
  text-align: center;
`;

export const Link = styled.a`
  background-image: url(//static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png),
    none;
  position: relative;
  display: block;
  max-width: 195px;
  max-height: 46px;
  margin: 0 auto;
  background-position: 50% 50%;
  padding-top: 10%;
  background-size: cover;
`;

export const Image = styled(img)`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  opacity: 0;
`;

export const Title = styled.h2`
  padding: 20px 0 10px 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.29;
  letter-spacing: normal;
  color: #111;
`;

export const Footer = styled.footer`
  padding: 20px 0 40px;
  text-align: center;
  font-family: dotum, sans-serif;
  font-size: 12px;
  line-height: 1.6;
  color: #555;
`;
