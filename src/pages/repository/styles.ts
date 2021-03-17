import styled from 'styled-components';

export const Container = styled.main`
  padding: 40px 200px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;

  a {
    text-decoration: none;
    color: #a8a8b3;
    display: flex;
    align-items: center;
  }
`;

export const RepositoryInfo = styled.section`
  display: flex;
  align-items: center;

  img {
    max-width: 100px;
    border-radius: 50%;
  }
`;

export const UserInfo = styled.aside`
  display: flex;
  margin-top: 40px;
  margin-bottom: 40px;

  div {
    margin-right: 80px;
    h3 {
      font-size: 36px;
      margin: 0;
    }
    p {
      color: #737380;
      font-size: 20px;
    }
  }
`;

export const Loading = styled.div`
  width: 100%;
  text-align: center;
`;
