import type { NextPage } from 'next';
import Form from '../../src/components/Form/Form';
import * as Styled from './join.styled';

const Join: NextPage = function JoinPage() {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo>
          <Styled.Link href="/join">
            <Styled.Image
              src="https://static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png"
              layout="fill"
              alt="coupang"
            />
          </Styled.Link>
        </Styled.Logo>
      </Styled.Header>
      <Styled.Title>회원정보를 입력해주세요</Styled.Title>
      <Form type="signup" />
      <Styled.Footer>©Coupang Corp. All rights reserved.</Styled.Footer>
    </Styled.Wrapper>
  );
};

export default Join;
