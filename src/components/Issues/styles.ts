import styled from 'styled-components';

export const ContainerIssues = styled.section`
  background: #fff;
  padding: 20px 0;
  padding-right: 24px;
  transition: 0.5s;
  margin-bottom: 16px;
  cursor: pointer;
  box-shadow: 1px 1px 4px #ccc;
  &:hover {
    transform: translateX(10px);
  }
  & + a {
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #41414d;
  }
  svg {
    margin-left: auto;
    color: #ccc;
  }
`;
